import React, { useState } from 'react';
import { X, Download, MessageSquare, CheckCircle, FileText } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';
// import { generateCatalogPDF } from '../utils/generateCatalogPDF';



interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    product: 'Full Industrial Machinery Catalog 2026'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    // try {
    //   // 1. Generate & download the catalogue PDF directly to user device
    //   generateCatalogPDF(formData);

    //   // 2. Submit lead details to backend & WhatsApp supplier notification
    //   const res = await fetch('/api/catalog-download', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });

    //   if (res.ok) {
    //     const data = await res.json();
    //     setSubmitted(true);
    //     setWhatsappUrl(data.supplierWhatsappUrl || '');
    //   } else {
    //     setSubmitted(true);
    //   }
    // } catch (err) {
    //   console.error('Catalog download lead submit error:', err);
    //   // Fallback pdf generation if network error
    //   generateCatalogPDF(formData);
    //   setSubmitted(true);
    // } finally {
    //   setLoading(false);
    // }


    try {
  // PDF DOWNLOAD
  const pdfUrl = '/catalog/Shyam-Machine-House-Catalog-2026.pdf';

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Shyam-Machine-House-Catalog-2026.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // WHATSAPP MESSAGE
  const message = `Hello Shyam Machine House,

I am interested in the 2026 Technical Catalog.

Name: ${formData.name}
Mobile / WhatsApp: ${formData.phone}
City / Target Market: ${formData.city}
Product Interest: ${formData.product}

Please share the latest price and quotation.`;

  const whatsappLink =
    `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  setWhatsappUrl(whatsappLink);
  setSubmitted(true);

  // Open WhatsApp
  window.open(whatsappLink, '_blank');

} catch (err) {
  console.error('Catalog download error:', err);
} finally {
  setLoading(false);
}
  };



  

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4" id="catalog-modal-overlay">
      <div className="bg-white border border-slate-200 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-tight">
                Download Official PDF Catalog
              </h3>
              <p className="text-[10px] text-slate-400">Shyam Machine Tools • 2026 Edition</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            id="close-catalog-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Please provide contact details to unlock the 2026 Technical Catalog PDF. Your details will be forwarded directly to supplier WhatsApp (+91 98997 46674).
              </p>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98112 34567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    City / Target Market
                  </label>
                  <input
                    type="text"
                    placeholder="Delhi, Dubai..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    Product Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-2 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                  >
                    <option value="Full Industrial Machinery Catalog 2026">Full Catalog 2026</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-md shadow-orange-100 transition-colors flex items-center justify-center gap-2 mt-2"
                id="submit-catalog-btn"
              >
                <Download className="w-4 h-4" />
                <span>{loading ? 'Processing...' : 'Download Catalog PDF & Send to WhatsApp'}</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Catalog Access Unlocked!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Thank you! Your inquiry has been sent to Shyam Machine Tools supplier team.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Inquiry to Supplier WhatsApp</span>
                  </a>
                )}

                {/* <button
                  type="button"
                  onClick={() => {
                    generateCatalogPDF(formData);
                    onClose();
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>Download PDF Document Directly</span>
                </button> */}


                <button 
  type="button"
  onClick={() => {
    const link = document.createElement('a');

    link.href = '/catalog/Shyam-Machine-House-Catalog-2026.pdf';
    link.download = 'Shyam-Machine-House-Catalog-2026.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose();
  }}
  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
>
  <FileText className="w-4 h-4 text-orange-400" />
  <span>Download PDF Document Directly</span>
</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
