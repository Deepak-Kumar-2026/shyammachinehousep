import React, { useState } from 'react';
import { MessageSquare, Bot, ChevronUp, ChevronDown, Sparkles, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingWhatsAppAIProps {
  onOpenAIChat: () => void;
  onOpenQueryModal: (productName?: string) => void;
}

export const FloatingWhatsAppAI: React.FC<FloatingWhatsAppAIProps> = ({
  onOpenAIChat,
  onOpenQueryModal
}) => {
  const [pillsExpanded, setPillsExpanded] = useState(false);

  const directWhatsappUrl = (msg?: string) => {
    const text = msg || 'Hello Shyam Machine House, I am visiting your website and want to request a price quotation for industrial machinery.';
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const quickBuyerQueries = [
    { label: '🌀 350mm CNC Coil Winder Price', text: 'Hello Shyam Machine House, please send quote and catalog for 350 mm Automatic CNC Coil Winding Machine.' },
    { label: '⚙️ All Geared Lathe Quotation', text: 'Hello Shyam Machine House, I need price and specifications for Heavy Duty All Geared Lathe Machine.' },
    { label: '🔩 50mm Radial Drill Specs', text: 'Hello Shyam Machine House, please share details for 50mm Heavy Duty Radial Drilling Machine.' },
    { label: '📄 Request Complete PDF Catalog', text: 'Hello Shyam Machine House, please send your complete machinery PDF catalog to my WhatsApp.' }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto max-w-[92vw]" id="floating-widget-group">
      
      {/* Quick Buyer Query Pills Container */}
      {pillsExpanded && (
        <div className="bg-slate-900/95 text-white backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-slate-700 w-72 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="text-[11px] font-extrabold uppercase text-orange-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quick Buyer Options:</span>
            </span>
            <button 
              onClick={() => setPillsExpanded(false)}
              className="text-slate-400 hover:text-white text-[10px] font-bold"
            >
              Close ✖
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            {quickBuyerQueries.map((item, idx) => (
              <a
                key={idx}
                href={directWhatsappUrl(item.text)}
                target="_blank"
                rel="noreferrer"
                className="block bg-slate-800 hover:bg-emerald-700 text-slate-100 hover:text-white p-2 rounded-xl transition-all font-semibold text-[11px] flex items-center justify-between group border border-slate-700/60"
              >
                <span className="truncate">{item.label}</span>
                <Send className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}

            <button
              onClick={() => {
                setPillsExpanded(false);
                onOpenAIChat();
              }}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors mt-2"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Open Interactive AI Chatbot</span>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Quick Pills Button */}
      <button
        onClick={() => setPillsExpanded(!pillsExpanded)}
        className="bg-slate-900/90 text-slate-200 hover:text-white text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-700 shadow-lg flex items-center gap-1 hover:border-orange-500 transition-colors"
      >
        <span>⚡ Quick WhatsApp Options</span>
        {pillsExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5 text-orange-400" />}
      </button>

      {/* Quick AI Assistant Trigger Pill */}
      <button
        onClick={onOpenAIChat}
        className="bg-slate-900 text-white hover:bg-slate-800 text-xs font-extrabold py-2 px-3.5 rounded-full shadow-2xl border-2 border-orange-500 flex items-center gap-2 group transition-all hover:scale-105"
        id="floating-ai-button"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <Bot className="w-4 h-4 text-orange-400" />
        <span>AI Sales Assistant</span>
      </button>

      {/* Main WhatsApp Direct Floating Button */}
      <a
        href={directWhatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 border-2 border-white/20"
        title="Chat on Supplier WhatsApp"
        id="floating-whatsapp-main"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="text-xs font-black tracking-wide">
          WhatsApp Supplier (+91 98997 46674)
        </span>
      </a>

    </div>
  );
};
