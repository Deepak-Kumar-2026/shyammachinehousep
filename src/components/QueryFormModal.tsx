import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle, Zap } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';

interface QueryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
}

export const QueryFormModal: React.FC<QueryFormModalProps> = ({
  isOpen,
  onClose,
  initialProductName = ''
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    productInterest: initialProductName || 'All Geared Heavy Duty Lathe Machine',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [supplierWaUrl, setSupplierWaUrl] = useState('');

  useEffect(() => {
    if (initialProductName) {
      setFormData(prev => ({ ...prev, productInterest: initialProductName }));
    }
  }, [initialProductName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone) return;

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'QUERY_FORM'
        })
      });

      if (res.ok) {
        const data = await res.json();
        setSubmitted(true);
        setSupplierWaUrl(data.supplierWhatsappUrl || '');
      }
    } catch (err) {
      console.error('Query form submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4" id="query-modal-overlay">
      <div className="bg-white border border-slate-200 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-tight">
                Request Instant Price Quotation
              </h3>
              <p className="text-[10px] text-slate-400">Directly routed to Shyam Machine Tools Sales</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            id="close-query-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Patel"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    Phone / WhatsApp *
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
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    placeholder="Delhi, Ghaziabad, Dubai..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Machine Requirement *
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.name}>{p.name} ({p.model})</option>
                  ))}
                  <option value="Custom Workshop Setup / Turnkey Line">Custom Workshop Setup / Turnkey Line</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Specific Requirements / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need 2 meter length lathe with 3-axis DRO and quick delivery to Noida factory."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs p-3 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-md shadow-orange-100 transition-colors flex items-center justify-center gap-2 mt-2"
                id="submit-query-btn"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Submitting Quote Request...' : 'Send Inquiry to Supplier Team'}</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Inquiry Logged Successfully!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Our engineering sales team has received your query for <strong className="text-slate-900">{formData.productInterest}</strong>.
                </p>
              </div>

              {supplierWaUrl && (
                <div className="pt-2">
                  <a
                    href={supplierWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open Supplier WhatsApp Directly</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
