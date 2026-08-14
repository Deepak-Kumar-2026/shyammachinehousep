import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { COMPANY_INFO, PRODUCTS, TARGET_CITIES } from './src/data/companyData';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent database for leads & analytics
interface LeadRecord {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  city: string;
  productInterest: string;
  message: string;
  source: string;
  status: 'NEW' | 'CONTACTED' | 'IN_DISCUSSION' | 'QUOTATION_SENT' | 'CLOSED';
  createdAt: string;
  notes?: string;
}

let leadsDatabase: LeadRecord[] = [
  {
    id: 'lead-101',
    customerName: 'Rajesh Kumar (Surya Engineering)',
    phone: '+91 98112 34567',
    email: 'rajesh@suryaengg.com',
    city: 'Delhi',
    productInterest: 'All Geared Heavy Duty Lathe Machine (SMH-AG-2000)',
    message: 'Need urgent quote for 2 units of 2 Meter All Geared Lathe with 3-Axis DRO for Delhi factory.',
    source: 'QUERY_FORM',
    status: 'NEW',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: 'High priority customer from Okhla Industrial Area'
  },
  {
    id: 'lead-102',
    customerName: 'Anand Sharma (Anand Auto Components)',
    phone: '+91 99580 12345',
    email: 'anand@anandauto.co.in',
    city: 'Noida',
    productInterest: 'Hydraulic C-Frame Power Press 50T',
    message: 'Downloaded catalog and requested pricing for 50 Ton Hydraulic Press.',
    source: 'CATALOG_DOWNLOAD',
    status: 'CONTACTED',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    id: 'lead-103',
    customerName: 'Tariq Al-Mansoor',
    phone: '+971 50 123 4567',
    email: 'tariq@gulfmachinery.ae',
    city: 'Dubai',
    productInterest: 'Heavy Duty Radial Drilling Machine 62mm',
    message: 'Inquired via AI Assistant for Jebel Ali export delivery of Radial Drill 60mm.',
    source: 'AI_CHAT',
    status: 'IN_DISCUSSION',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: 'lead-104',
    customerName: 'Vikram Singh',
    phone: '+91 98450 98765',
    email: 'vikram@peenyatoolroom.com',
    city: 'Bangalore',
    productInterest: 'Universal Heavy Duty Milling Machine',
    message: 'Requested specifications sheet and video of Universal Milling Machine in operation.',
    source: 'WHATSAPP_DIRECT',
    status: 'QUOTATION_SENT',
    createdAt: new Date(Date.now() - 3600000 * 30).toISOString()
  }
];

let visitCount = 3420;
let catalogDownloadCount = 482;

// Initialize Gemini SDK lazily
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// -------------------------------------------------------------
// API Endpoints
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', company: COMPANY_INFO.name, timestamp: new Date() });
});

// AI Chatbot endpoint for Buyers (Auto-Reply & WhatsApp forward link)
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, customerDetails } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGeminiClient();

    let botReply = '';
    const supplierPhone = COMPANY_INFO.phone;
    const supplierEmail = COMPANY_INFO.email;
    const supplierGst = COMPANY_INFO.gstin;

    if (!ai) {
      // Fallback response if Gemini key is not configured in environment
      botReply = `Welcome to Shyam Machine House! We manufacture Grade-1 Industrial Transformer Winders, CNC Coil Winders, Soldering Pots, Sleeve Cutting Machines, Lathes, Radial Drills, Milling Machines, Power Presses, and Surface Grinders. How can we assist your workshop today? You can also contact us directly at ${supplierPhone} or email ${supplierEmail}.`;
    } else {
      const productsDetailedCatalog = PRODUCTS.map((p, idx) => `
Machine #${idx + 1}: ${p.name}
Model Code: ${p.model}
Category: ${p.category} ${p.isHotProduct ? '[HOT FEATURED PRODUCT]' : ''}
Tagline: ${p.tagline}
Description: ${p.description}
Key Features: ${p.features.join('; ')}
Applications: ${p.applications.join('; ')}
Tech Specifications:
${p.specifications.map(s => `  - ${s.parameter}: ${s.value} ${s.unit || ''}`).join('\n')}
Warranty: ${p.warranty}
Stock Status: ${p.inStock ? 'In Stock (Ready for Dispatch from Delhi Yard)' : 'Built to Order'}
Catalog File: ${p.catalogPdfName}
`).join('\n----------------------------------------\n');

      const systemInstruction = `
You are the official AI Technical & Sales Assistant for "Shyam Machine House" (Shyam Machine Tools), India's premier manufacturer and exporter of heavy industrial workshop machinery located in New Delhi (GSTIN: ${supplierGst}).
Supplier Contact: ${supplierPhone} | Email: ${supplierEmail} | Website: ${COMPANY_INFO.website}

CRITICAL MANDATE:
You MUST answer every buyer question precisely and accurately as per the official website product data provided below.
When the user asks about ANY machine (e.g., 350mm CNC coil winder, transformer winder, sleeve cutting machine, soldering pot, lathe, radial drill, power press, milling machine, toroidal winder, etc.), retrieve its exact specifications, model number, wire capacity, cutting speed, temperature ranges, features, and applications from this catalog and provide a clear, customized answer tailored directly to the specific question asked!

OFFICIAL WEBSITE MACHINERY CATALOG DATA:
${productsDetailedCatalog}

KEY FACTORY & LOGISTICS DATA:
- 25+ years experience, ISO 9001:2015 certified, 12,500+ machines installed worldwide.
- Dispatch to 20 target cities & export markets: Delhi, Noida, Ghaziabad, Mumbai, Bangalore, South Africa, Dubai, Nepal, Kolkata, Australia, Saudi Arabia, UK, Malaysia, Bangladesh, Chennai, Patna, Dehradun, Gurugram, Faridabad, Hyderabad.
- Comprehensive 12-Month Warranty + lifetime technical support.
- GST Invoicing, proforma invoices, and freight dispatch support available.

YOUR PERSONA & RESPONSE FORMAT:
- Professional, technical, helpful, and highly courteous industrial consultant.
- Answer the user's specific question directly, concisely, and accurately.
- Highlight key parameters (e.g. cutting speed, max diameter, wire gauge, power, dimensions) relevant to their query.
- Use clean formatting with markdown bold text and bullet points.
- Conclude by offering direct assistance or formal proforma quotation on WhatsApp (+91 98997 46674).
`;

      const contents = [
        { role: 'user', parts: [{ text: `User message: ${message}` }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: `System: ${systemInstruction}\nUser Question: ${message}`,
      });

      botReply = response.text || 'Thank you for contacting Shyam Machine House. How can we help you with our machinery lineup today?';
    }

    // Automatically generate WhatsApp link to forward this chat query to supplier (+91 98997 46674)
    const waText = encodeURIComponent(
      `Hello Shyam Machine House,\n\nI am inquiring from your website AI Assistant.\n\nInquiry Details:\n"${message}"\n\nAI Summary Answer:\n"${botReply.substring(0, 300)}..."\n\nPlease share quote and catalog on WhatsApp.`
    );
    const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waText}`;

    // Optionally record as an AI_CHAT lead automatically
    const newLead: LeadRecord = {
      id: `lead-${Date.now()}`,
      customerName: customerDetails?.name || 'Website AI Chat Visitor',
      phone: customerDetails?.phone || 'AI Chat Session',
      email: customerDetails?.email || 'chat@visitor.com',
      city: customerDetails?.city || 'Delhi NCR',
      productInterest: customerDetails?.product || 'Industrial Machinery Inquiry',
      message: message,
      source: 'AI_CHAT',
      status: 'NEW',
      createdAt: new Date().toISOString()
    };
    leadsDatabase.unshift(newLead);

    return res.json({
      reply: botReply,
      whatsappLink,
      leadId: newLead.id
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      reply: `Thank you for contacting Shyam Machine House. For instant support, please reach our sales team directly on WhatsApp: ${COMPANY_INFO.phone}`,
      whatsappLink: `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Shyam Machine House, I would like to inquire about your machinery catalog.')}`
    });
  }
});

// Submit Lead / Query Form
app.post('/api/lead', (req, res) => {
  const { customerName, phone, email, city, productInterest, message, source } = req.body;

  if (!customerName || !phone) {
    return res.status(400).json({ error: 'Name and Phone number are required.' });
  }

  const newLead: LeadRecord = {
    id: `lead-${Date.now()}`,
    customerName,
    phone,
    email: email || 'N/A',
    city: city || 'Delhi',
    productInterest: productInterest || 'General Machinery Inquiry',
    message: message || 'Customer submitted inquiry through website.',
    source: source || 'QUERY_FORM',
    status: 'NEW',
    createdAt: new Date().toISOString()
  };

  leadsDatabase.unshift(newLead);

  // Generate WhatsApp notification message text for supplier
  const waText = encodeURIComponent(
    `🚨 *NEW BUYER INQUIRY - SHYAM MACHINE HOUSE*\n\n` +
    `👤 *Name:* ${customerName}\n` +
    `📞 *Phone:* ${phone}\n` +
    `✉️ *Email:* ${email || 'N/A'}\n` +
    `📍 *City:* ${city || 'Delhi'}\n` +
    `⚙️ *Product:* ${productInterest || 'General Inquiry'}\n` +
    `💬 *Message:* ${message || 'N/A'}\n` +
    `📌 *Source:* ${source || 'Website Query Form'}\n\n` +
    `Sent from Shyam Machine House Live Portal.`
  );

  const supplierWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waText}`;

  res.json({
    success: true,
    lead: newLead,
    supplierWhatsappUrl,
    message: 'Your inquiry has been logged successfully! Connecting you to supplier on WhatsApp...'
  });
});

// Download Catalog Endpoint (Logs Lead + Sends to Supplier WhatsApp)
app.post('/api/catalog-download', (req, res) => {
  const { name, phone, email, city, product } = req.body;
  catalogDownloadCount++;

  const newLead: LeadRecord = {
    id: `lead-cat-${Date.now()}`,
    customerName: name || 'Catalog Download Buyer',
    phone: phone || 'N/A',
    email: email || 'N/A',
    city: city || 'Delhi NCR',
    productInterest: product || 'Full Company Product Catalog 2026',
    message: 'Customer requested & downloaded full technical catalog.',
    source: 'CATALOG_DOWNLOAD',
    status: 'NEW',
    createdAt: new Date().toISOString()
  };

  leadsDatabase.unshift(newLead);

  const waText = encodeURIComponent(
    `📥 *CATALOG DOWNLOAD ALERT - SHYAM MACHINE HOUSE*\n\n` +
    `Name: ${name || 'Interested Buyer'}\n` +
    `Phone: ${phone || 'N/A'}\n` +
    `Email: ${email || 'N/A'}\n` +
    `City: ${city || 'Delhi NCR'}\n` +
    `Downloaded Product: ${product || 'All Geared Lathes & Industrial Machinery Catalog'}\n\n` +
    `Please send updated 2026 price list and PDF brochure on WhatsApp.`
  );

  const supplierWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waText}`;

  res.json({
    success: true,
    downloadUrl: '/SMH_Industrial_Machinery_Full_Catalog_2026.pdf',
    supplierWhatsappUrl,
    lead: newLead
  });
});

// Fetch all leads for real-time tracking in Supplier Portal
app.get('/api/leads', (req, res) => {
  res.json({
    total: leadsDatabase.length,
    leads: leadsDatabase
  });
});

// Update lead status
app.put('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const leadIndex = leadsDatabase.findIndex((l) => l.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Lead not found' });
  }

  if (status) leadsDatabase[leadIndex].status = status;
  if (notes !== undefined) leadsDatabase[leadIndex].notes = notes;

  res.json({ success: true, lead: leadsDatabase[leadIndex] });
});

// Analytics Dashboard Endpoint
app.get('/api/analytics', (req, res) => {
  visitCount += Math.floor(Math.random() * 3) + 1;

  const totalLeads = leadsDatabase.length;
  const newLeads = leadsDatabase.filter(l => l.status === 'NEW').length;
  const closedLeads = leadsDatabase.filter(l => l.status === 'CLOSED' || l.status === 'QUOTATION_SENT').length;

  const cityMap: Record<string, number> = {};
  const productMap: Record<string, number> = {};

  leadsDatabase.forEach(lead => {
    cityMap[lead.city] = (cityMap[lead.city] || 0) + 1;
    productMap[lead.productInterest] = (productMap[lead.productInterest] || 0) + 1;
  });

  const topCities = Object.entries(cityMap)
    .map(([name, inquiries]) => ({ name, inquiries }))
    .sort((a, b) => b.inquiries - a.inquiries)
    .slice(0, 6);

  const topProducts = Object.entries(productMap)
    .map(([name, inquiries]) => ({ name, inquiries }))
    .sort((a, b) => b.inquiries - a.inquiries)
    .slice(0, 6);

  res.json({
    totalVisits: visitCount,
    totalLeads,
    newLeads,
    closedLeads,
    catalogDownloads: catalogDownloadCount,
    conversionRate: Number(((totalLeads / visitCount) * 100).toFixed(2)),
    topCities,
    topProducts
  });
});

// Vite Middleware for Dev & Static Serving for Prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Shyam Machine House server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
