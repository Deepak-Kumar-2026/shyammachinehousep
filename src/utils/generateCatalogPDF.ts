import { jsPDF } from 'jspdf';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';

export const generateCatalogPDF = (customerInfo?: { name: string; phone: string; email?: string; city?: string }) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Helper for background header
  const drawPageHeader = (pageTitle: string) => {
    // Top banner
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, pageWidth, 22, 'F');

    doc.setFillColor(234, 88, 12); // orange-600
    doc.rect(0, 22, pageWidth, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(COMPANY_INFO.name, 12, 14);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(203, 213, 225); // slate-300
    doc.text(pageTitle, pageWidth - 12, 14, { align: 'right' });
  };

  const drawPageFooter = (pageNum: number, totalPages: number) => {
    doc.setFillColor(241, 245, 249); // slate-100
    doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');

    doc.setDrawColor(226, 232, 240);
    doc.line(0, pageHeight - 14, pageWidth, pageHeight - 14);

    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(
      `Phone: ${COMPANY_INFO.phone} | GSTIN: ${COMPANY_INFO.gstin} | Web: ${COMPANY_INFO.website}`,
      12,
      pageHeight - 6
    );
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - 12, pageHeight - 6, { align: 'right' });
  };

  // ================= PAGE 1: COVER PAGE =================
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border accent
  doc.setFillColor(234, 88, 12);
  doc.rect(10, 10, pageWidth - 20, 4, 'F');

  // Title block
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('SHYAM MACHINE HOUSE', pageWidth / 2, 45, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(249, 115, 22); // orange-500
  doc.text('PRODUCT CATALOGUE 2026', pageWidth / 2, 54, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(203, 213, 225);
  doc.setFont('helvetica', 'normal');
  doc.text('Grade-1 Industrial Machinery Manufacturer & Exporter', pageWidth / 2, 62, { align: 'center' });

  // White Card Container for Overview
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(15, 75, pageWidth - 30, 95, 4, 4, 'F');

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('BEST-IN-CLASS MACHINERY RANGE', 22, 88);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);

  const keyLines = [
    '• Single & Double Spindle CNC Coil Winding Machines',
    '• Coil & Core Taping Machines & Toroidal Winders',
    '• Automatic PVC & Heat Shrink Sleeve Cutting Machines',
    '• Automatic & Angular Dip Soldering Pots (Lead Free)',
    '• Transformer Testers, Digital LCR Meters & Fixtures',
    '• Heavy Duty All Geared Lathes, Radial Drills & Power Presses'
  ];

  let yPos = 100;
  keyLines.forEach((line) => {
    doc.text(line, 22, yPos);
    yPos += 10;
  });

  // Customer Personalization Box if provided
  if (customerInfo && customerInfo.name) {
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, 180, pageWidth - 30, 32, 3, 3, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(234, 88, 12);
    doc.text('PREPARED EXCLUSIVELY FOR:', 22, 188);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(`${customerInfo.name} (${customerInfo.city || 'Buyer'})`, 22, 196);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Contact: ${customerInfo.phone} | Date: ${new Date().toLocaleDateString()}`, 22, 204);
  }

  // Company Contact footer on cover
  doc.setFillColor(30, 41, 59);
  doc.rect(0, pageHeight - 50, pageWidth, 50, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('FACTORY & HEAD OFFICE', 15, pageHeight - 38);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225);
  doc.text(
    `Address: ${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.locality}, ${COMPANY_INFO.address.city} - 110032`,
    15,
    pageHeight - 30
  );
  doc.text(`Mobile / WhatsApp: ${COMPANY_INFO.phone} | GSTIN: ${COMPANY_INFO.gstin}`, 15, pageHeight - 22);
  doc.text(`Email: ${COMPANY_INFO.email} | Website: ${COMPANY_INFO.website}`, 15, pageHeight - 14);

  // ================= PAGE 2: DETAILED PRODUCT CATALOGUE =================
  doc.addPage();
  drawPageHeader('DETAILED MACHINERY CATALOGUE');

  let curY = 32;

  PRODUCTS.slice(0, 8).forEach((prod, index) => {
    if (curY + 28 > pageHeight - 20) {
      drawPageFooter(2, 3);
      doc.addPage();
      drawPageHeader('DETAILED MACHINERY CATALOGUE (CONTD.)');
      curY = 32;
    }

    doc.setFillColor(index % 2 === 0 ? 255 : 248, index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 255 : 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(12, curY, pageWidth - 24, 26, 2, 2, 'FD');

    // Accent line
    doc.setFillColor(234, 88, 12);
    doc.rect(12, curY, 3, 26, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(`${prod.name} (${prod.model})`, 18, curY + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const descCut = prod.description.length > 115 ? prod.description.substring(0, 115) + '...' : prod.description;
    doc.text(descCut, 18, curY + 13);

    // Key spec badge
    const keySpec = prod.specifications.slice(0, 3).map(s => `${s.parameter}: ${s.value}`).join(' | ');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(194, 65, 12); // orange-700
    doc.text(`Specs: ${keySpec}`, 18, curY + 20);

    curY += 30;
  });

  drawPageFooter(2, 3);

  // ================= PAGE 3: CERTIFICATES & SPARE PARTS =================
  doc.addPage();
  drawPageHeader('GOVERNMENT CERTIFICATES & QUALITY COMPLIANCE');

  // Certificate 1: GST Registration Certificate
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(12, 32, pageWidth - 24, 48, 3, 3, 'FD');

  doc.setFillColor(15, 23, 42);
  doc.rect(12, 32, pageWidth - 24, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('GOVERNMENT OF INDIA - FORM GST REG-06 REGISTRATION CERTIFICATE', 16, 37.5);

  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.text('Registration Number (GSTIN): 07AFHFS7121Q1ZE', 16, 46);
  doc.text('Legal & Trade Name: SHYAM MACHINE HOUSE', 16, 52);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Constitution of Business: Partnership (Partners: Srishty Jain & Yash Sharma)', 16, 58);
  doc.text('Address: Floor 1, 1/4717, Gali No 4 & 5, Balbir Nagar Extn, Near Durga Puri Chowk, New Delhi - 110032', 16, 64);
  doc.text('Date of Issue: 24/06/2024 | Jurisdiction: Sales Tax Officer Class II / AVATO, Delhi', 16, 70);

  // Certificate 2: MSME UDYAM REGISTRATION CERTIFICATE
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(12, 86, pageWidth - 24, 48, 3, 3, 'FD');

  doc.setFillColor(30, 41, 59);
  doc.rect(12, 86, pageWidth - 24, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES - UDYAM CERTIFICATE', 16, 91.5);

  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.text('Udyam Registration Number: UDYAM-DL-07-0015453', 16, 100);
  doc.text('Enterprise Name: SHYAM MACHINE HOUSE', 16, 106);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Enterprise Classification: Micro Enterprise (Manufacturing & Wholesale Trading)', 16, 112);
  doc.text('NIC Codes: 28170 (Office & Industrial Machinery) & 46593 (Electrical Machinery Wholesale)', 16, 118);
  doc.text('Date of Registration: 21/02/2025 | Date of Commencement: 01/05/2024', 16, 124);

  // Certificate 3: ISO 9001:2015 Certification
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(12, 140, pageWidth - 24, 44, 3, 3, 'FD');

  doc.setFillColor(234, 88, 12);
  doc.rect(12, 140, pageWidth - 24, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('ISO 9001:2015 CERTIFIED QUALITY MANAGEMENT SYSTEM', 16, 145.5);

  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.text('Certificate Standard: ISO 9001:2015 International Quality Standard', 16, 154);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Scope of Certification: Manufacturing, Export, Assembly & Service of Heavy Industrial Machinery', 16, 160);
  doc.text('Grade-1 Geometrical Accuracy Testing Guaranteed for All Lathes, Winders, Cutters & Drills', 16, 166);
  doc.text('100% Pre-dispatch testing at New Delhi Assembly Yard', 16, 172);

  // Guarantee Box
  doc.setFillColor(254, 243, 199); // amber-100
  doc.setDrawColor(245, 158, 11);
  doc.roundedRect(12, 192, pageWidth - 24, 22, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(180, 83, 9);
  doc.text('★ 12-MONTH WARRANTY & LIFETIME SPARE PARTS SUPPORT', 16, 200);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(120, 53, 15);
  doc.text('All machines are supplied with original test certificates, user operation manual, and tool kit.', 16, 207);

  drawPageFooter(3, 3);

  // Save and trigger download
  doc.save('Shyam_Machine_House_Catalogue_2026.pdf');
};
