import React, { useState } from 'react';
import { X, MessageSquare, Download, CheckCircle2, Shield, Zap, FileText, ZoomIn } from 'lucide-react';
import { Product, TargetCity } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ProductDetailModalProps {
  product: Product | null;
  selectedCity?: TargetCity;
  onClose: () => void;
  onOpenQueryModal: (productName: string) => void;
  onOpenCatalogModal: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  selectedCity,
  onClose,
  onOpenQueryModal,
  onOpenCatalogModal
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return null;

  const currentImage = product.images[selectedImageIndex] || product.mainImage;

  const modalTitle = selectedCity 
    ? `${product.name} in ${selectedCity.name}` 
    : product.name;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    selectedCity 
      ? `Hello Shyam Machine Tools,\n\nI need price quotation and technical specs sheet for delivery to *${selectedCity.name}*:\n*${product.name}* (Model: ${product.model})\n\nPlease share price list, local freight timeline, and GST invoice terms.`
      : `Hello Shyam Machine Tools,\n\nI need price quotation and technical specs sheet for:\n*${product.name}* (Model: ${product.model})\n\nPlease share price list, motor power requirements, and delivery timeline to my city.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4" id="product-detail-modal-overlay">
      <div className="bg-white border border-slate-200 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-6 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-orange-600 text-white font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-widest">
                {product.category}
              </span>
              <span className="text-slate-400 font-mono text-xs">MODEL: {product.model}</span>
              {selectedCity && (
                <span className="bg-green-600 text-white font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-widest">
                  {selectedCity.name} LOCATION PAGE
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mt-1">
              {modalTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            id="close-product-detail-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Image Gallery Stage & Zoom */}
            <div className="lg:col-span-5 space-y-3">
              <div 
                className="relative aspect-4/3 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={currentImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150 cursor-zoom-out' : 'group-hover:scale-105'
                  }`}
                />
                <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-md">
                  <ZoomIn className="w-3.5 h-3.5 text-orange-400" />
                  <span>{isZoomed ? 'Click to Reset' : 'Click to Zoom'}</span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedImageIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImageIndex === idx 
                          ? 'border-orange-600 ring-2 ring-orange-200' 
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Instant WhatsApp Action Bar */}
              <div className="pt-2 space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 uppercase text-xs tracking-widest shadow-md transition-colors"
                  id="modal-whatsapp-price-btn"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Get WhatsApp Price Quote</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenQueryModal(product.name);
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 uppercase text-xs tracking-widest shadow-md shadow-orange-100 transition-colors"
                  id="modal-query-form-btn"
                >
                  <Zap className="w-4 h-4" />
                  <span>Submit Price Inquiry Form</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Specifications & Features */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Highlights Summary Grid */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-3 gap-3">
                {product.highlights.map((h, i) => (
                  <div key={i} className="space-y-0.5">
                    <span className="block text-[10px] font-black uppercase text-slate-400 tracking-wider">{h.label}</span>
                    <span className="text-xs font-black text-slate-900">{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Machine Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications Table - High Density Spec */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h3 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-600" />
                  <span>Technical Specification Matrix</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="py-2 px-3">Parameter Name</th>
                        <th className="py-2 px-3">Unit</th>
                        <th className="py-2 px-3 text-right">Technical Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/60 font-medium">
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white/60' : 'bg-transparent'}>
                          <td className="py-2 px-3 font-semibold text-slate-800">{spec.parameter}</td>
                          <td className="py-2 px-3 text-slate-500 font-mono text-[11px]">{spec.unit || '—'}</td>
                          <td className="py-2 px-3 font-bold text-slate-900 text-right">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Design Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Key Features & Engineering Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty & Catalog */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span>{product.warranty}</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCatalogModal();
                  }}
                  className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Product PDF Brochure</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
