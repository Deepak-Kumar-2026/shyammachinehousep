import React from 'react';
import { MessageSquare, FileText, ChevronRight, Eye } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onOpenQueryModal: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onOpenQueryModal
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shyam Machine Tools,\n\nI am interested in getting quotation for:\n*${product.name}* (${product.model})\n\nPlease share updated price list, video, and delivery terms.`
  )}`;

  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Container */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.mainImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase border border-slate-700">
          {product.category}
        </div>

        {/* Hover Quick Zoom Overlay */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-orange-600" />
            <span>Click for High-Res Specs</span>
          </span>
        </div>

        {/* WhatsApp Overlay Trigger */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2.5 right-2.5 bg-green-600 hover:bg-green-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 transition-transform hover:scale-105"
          title={`Inquire about ${product.name} on WhatsApp`}
          id={`card-whatsapp-img-${product.id}`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="text-[10px] text-slate-400 font-mono font-semibold uppercase tracking-wider mb-1">
            MODEL: {product.model}
          </div>
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-base font-black text-slate-900 hover:text-orange-600 transition-colors line-clamp-1 cursor-pointer uppercase tracking-tight"
            id={`product-title-${product.id}`}
          >
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Technical Parameter Table Preview */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            {product.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-2 rounded border border-slate-100">
                <span className="block text-[9px] text-slate-400 font-black uppercase tracking-wider">{item.label}</span>
                <span className="font-bold text-slate-800 truncate block text-[11px]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-1 grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1 uppercase tracking-wider text-[11px]"
            id={`btn-view-spec-${product.id}`}
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>Specs</span>
          </button>

          <button
            onClick={() => onOpenQueryModal(product.name)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg text-xs transition-colors shadow-xs flex items-center justify-center gap-1 uppercase tracking-wider text-[11px]"
            id={`btn-request-quote-${product.id}`}
          >
            <span>Get Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
