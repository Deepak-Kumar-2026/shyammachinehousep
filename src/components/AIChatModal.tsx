import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, MessageSquare, ExternalLink, User, FileText, Video, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import { ChatMessage } from '../types';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQueryModal: (productName?: string) => void;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({
  isOpen,
  onClose,
  onOpenQueryModal
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Hello! Welcome to Shyam Machine House AI Sales & Support. I am configured with complete technical specifications for our 350mm Automatic CNC Coil Winding Machines, Geared Lathes, Radial Drills, Power Presses, and Milling Machines.\n\nHow can I help your workshop today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '🌀 350mm CNC Coil Winder Specs', action: 'query', payload: 'What are the specs and features of 350 mm Automatic CNC Coil Winding Machine?' },
        { label: '⚙️ All Geared Lathe Price', action: 'query', payload: 'What is the price range and bed size for All Geared Lathe Machines?' },
        { label: '🔩 Radial Drill 50mm Specs', action: 'query', payload: 'Tell me about 50mm Radial Drilling Machine specifications.' },
        { label: '📦 Export to Dubai / International', action: 'query', payload: 'What is your delivery time and shipping process for export orders to Dubai & Gulf countries?' }
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('350 mm Automatic CNC Coil Winding Machine');
  const [selectedCategory, setSelectedCategory] = useState<string>('CNC Coil Winding Machine');
  const [selectedWireSpec, setSelectedWireSpec] = useState<string>('0.3 mm Wire / 350 mm OD');
  const [selectedApplication, setSelectedApplication] = useState<string>('Transformer Coils & Electrical Winding');
  const [selectedBuyerAction, setSelectedBuyerAction] = useState<string>('Formal Price Quotation');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Machine models list for quick option selection
  const machineOptions = [
    { name: '350 mm Automatic CNC Coil Winding Machine', category: 'Coil Winding Machine', spec: '0.02 - 1.2 mm Wire / 350 mm Max OD', app: 'Transformer Coils & Electrical Winding' },
    { name: 'Automatic PVC & Heat Shrink Sleeve Cutting Machine', category: 'Sleeve Cutting Machine', spec: '120 Cuts/Min / 0.1-99999mm Length', app: 'Transformer Winding & Harness Wire Insulation' },
    { name: 'Heavy Duty Round Dip Soldering Pot', category: 'Soldering Pot', spec: '0 - 450°C Digital Control / Lead-Free Alloy', app: 'Winding Lead Wire Tinning & Component Soldering' },
    { name: '500 mm Heavy Duty Transformer CNC Winding Machine', category: 'Transformer Coil Winding Machine', spec: 'Up to 3.0 mm Wire / 500 mm Max OD', app: 'Heavy Power & Distribution Transformers' },
    { name: 'Automatic Toroidal Core CNC Coil Winding Machine', category: 'Coil Winding Machine', spec: '0.15 - 1.2 mm Wire / 360° Ring Drive', app: 'Toroidal Coils & Ring Transformers' },
    { name: 'Automatic CNC Multi-Spindle Coil Winding Machine', category: 'Coil Winding Machine', spec: '4-Spindle Simultaneous High Speed', app: 'Mass Production Relay & Bobbin Coils' },
    { name: 'All Geared Heavy Duty Lathe Machine', category: 'Lathe Machine', spec: '4.5 ft to 12 ft Bed / Induction Hardened', app: 'Precision Workshop Metal Shaft Turning' },
    { name: '50mm Heavy Duty Radial Drilling Machine', category: 'Drilling Machine', spec: '50 mm Solid Steel Drilling Capacity', app: 'Heavy Structural Fabrication & Boring' },
    { name: 'Hydraulic C-Frame Power Press', category: 'Power Press', spec: '10 Ton to 200 Ton Tonnage Range', app: 'Sheet Metal Stamping, Blanking & Punching' }
  ];

  const quickPills = [
    { label: '🌀 350mm CNC Coil Winder', product: '350 mm Automatic CNC Coil Winding Machine', query: 'Show me full technical specs and price for 350 mm Automatic CNC Coil Winding Machine' },
    { label: '✂️ Sleeve Cutting Machine', product: 'Automatic PVC & Heat Shrink Sleeve Cutting Machine', query: 'Tell me cutting speed, accuracy and blade specs for Automatic PVC & Heat Shrink Sleeve Cutting Machine' },
    { label: '🔥 Digital Soldering Pot', product: 'Heavy Duty Round Dip Soldering Pot', query: 'What is the temperature range and crucible capacity of Heavy Duty Round Dip Soldering Pot?' },
    { label: '🏭 500mm Transformer Winder', product: '500 mm Heavy Duty Transformer CNC Winding Machine', query: 'Tell me details for 500mm Heavy Duty Transformer Winder for copper strip' },
    { label: '📄 Request Formal Quote', product: selectedProduct, query: `I want a formal written quotation for ${selectedProduct}` }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, selectedProduct]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok) {
        const data = await res.json();
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          whatsappLink: data.whatsappLink,
          suggestedActions: [
            { label: '💰 Request Formal Price Quote', action: 'query', payload: `Request quotation for: ${query}` },
            { label: '📹 Request Video Demo', action: 'query', payload: `Send video demo link for: ${query}` },
            { label: '💬 Talk on WhatsApp (+91 98997 46674)', action: 'query', payload: `Connect me on WhatsApp regarding: ${query}` }
          ]
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        throw new Error('Chat API returned error');
      }
    } catch (err) {
      console.error('Error sending chat message:', err);
      const fallbackMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: `Thank you for your question! You can connect with Shyam Machine House technical team directly on WhatsApp (+91 98997 46674) for immediate pricing and machine catalogues.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        whatsappLink: `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Shyam Machine House, I want to inquire: "${query}"`)}`
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSubmit = () => {
    const queryText = `I am interested in ${selectedProduct} (${selectedWireSpec}) for ${selectedApplication}. Requirement: ${selectedBuyerAction}. Please share formal quote and catalog.`;
    handleSendMessage(queryText);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-2 sm:p-4" id="ai-chat-modal-overlay">
      <div className="bg-white border border-slate-300 w-full max-w-lg sm:max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[540px] max-h-[85vh] relative animate-in fade-in zoom-in-95 duration-200 my-auto">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-3 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold shadow-xs shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-xs sm:text-sm text-white">Shyam Machine AI Assistant</h3>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Online
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Official Machine Sales Assistant • WhatsApp (+91 98997 46674)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            id="close-ai-chat-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Name Banner on top */}
        <div className="bg-slate-900 text-amber-300 px-3 py-1.5 flex items-center justify-between gap-2 text-xs border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-1.5 font-extrabold truncate">
            <span className="text-orange-500 shrink-0">🎯 Product:</span>
            <span className="truncate text-white font-extrabold">{selectedProduct}</span>
          </div>
          <span className="bg-orange-600/30 text-orange-300 border border-orange-500/40 text-[9px] font-mono font-bold px-2 py-0.5 rounded shrink-0">
            Selected
          </span>
        </div>

        {/* Select Option Section Under Product Name */}
        <div className="bg-slate-100 border-b border-slate-200 p-2.5 space-y-2 shrink-0">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span>Select Machine & Buyer Requirement:</span>
            <span className="text-[10px] text-orange-600 font-extrabold">{machineOptions.length} Machinery Options</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
            <div>
              <label className="block text-[9px] font-extrabold uppercase text-slate-500 mb-0.5">1. Machine Model:</label>
              <select
                value={selectedProduct}
                onChange={(e) => {
                  const found = machineOptions.find(m => m.name === e.target.value);
                  setSelectedProduct(e.target.value);
                  if (found) {
                    setSelectedCategory(found.category);
                    setSelectedWireSpec(found.spec);
                    setSelectedApplication(found.app);
                  }
                }}
                className="w-full bg-white border border-slate-300 rounded-lg p-1.5 font-bold text-slate-800 text-[11px] focus:outline-none focus:border-orange-500 shadow-2xs"
              >
                {machineOptions.map((m, idx) => (
                  <option key={idx} value={m.name}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[9px] font-extrabold uppercase text-slate-500 mb-0.5">2. Buyer Requirement Choice:</label>
              <select
                value={selectedBuyerAction}
                onChange={(e) => setSelectedBuyerAction(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg p-1.5 font-bold text-slate-800 text-[11px] focus:outline-none focus:border-orange-500 shadow-2xs"
              >
                <option value="Formal Price Quotation">Formal Price Quotation</option>
                <option value="Technical Specification PDF Catalog">Technical PDF Catalog</option>
                <option value="Live Video Demo Request">Live Video Demo Request</option>
                <option value="Export & Shipping Delivery Lead Time">Export & Delivery Lead Time</option>
              </select>
            </div>
          </div>

          {/* Quick Trigger Button for selected options */}
          <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-600">
            <span className="font-semibold text-slate-700 truncate pr-2">
              <strong className="text-slate-900">Spec:</strong> {selectedWireSpec}
            </span>
            <button
              onClick={() => {
                const promptText = `I am interested in ${selectedProduct} (${selectedWireSpec}) for ${selectedApplication}. Please provide ${selectedBuyerAction}.`;
                handleSendMessage(promptText);
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-3 py-1 rounded-md text-[10px] transition-colors flex items-center gap-1 shrink-0 shadow-2xs"
            >
              <span>Ask AI Now</span>
              <Send className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* Quick Pills Bar */}
        <div className="bg-slate-50 border-b border-slate-200 p-1.5 overflow-x-auto flex items-center gap-1.5 shrink-0 scrollbar-none" id="quick-pills-container">
          {quickPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (pill.product) {
                  const found = machineOptions.find(m => m.name === pill.product);
                  setSelectedProduct(pill.product);
                  if (found) {
                    setSelectedCategory(found.category);
                    setSelectedWireSpec(found.spec);
                    setSelectedApplication(found.app);
                  }
                }
                handleSendMessage(pill.query);
              }}
              className="bg-white hover:bg-orange-50 text-slate-800 border border-slate-300 hover:border-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 transition-colors shadow-2xs"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Chat Stream Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] space-y-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-orange-600 text-white rounded-tr-none font-medium'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none font-normal'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* WhatsApp forwarding button if provided */}
                {msg.whatsappLink && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={msg.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Chat directly on WhatsApp (+91 98997 46674)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenQueryModal('350 mm Automatic CNC Coil Winding Machine');
                      }}
                      className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-orange-400" />
                      <span>Request Formal Quotation PDF</span>
                    </button>
                  </div>
                )}

                {/* Suggested Interactive Choice Pills for Buyer */}
                {msg.suggestedActions && (
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200 space-y-1.5 mt-2">
                    <span className="text-[10px] font-black uppercase text-slate-500 block">
                      Select Next Option for Buyer:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (sug.payload.startsWith('Request quotation')) {
                              onClose();
                              onOpenQueryModal();
                            } else {
                              handleSendMessage(sug.payload);
                            }
                          }}
                          className="bg-white hover:bg-orange-600 hover:text-white border border-slate-300 hover:border-orange-600 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all text-left shadow-2xs flex items-center gap-1"
                        >
                          <span>{sug.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <span className="text-[10px] text-slate-400 block px-1">
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                  <User className="w-4 h-4 text-orange-400" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-600 text-xs py-2 px-1 font-semibold">
              <Bot className="w-4 h-4 text-orange-600 animate-spin" />
              <span>Shyam Machine AI is analyzing specs & pricing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask any question about CNC Coil Winding, Lathes, Prices, Delivery..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-orange-500 font-medium"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold p-2.5 sm:px-4 rounded-xl text-xs transition-colors shadow-xs flex items-center gap-1 shrink-0"
              id="send-chat-message-btn"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 font-semibold">
            <span>Powered by Shyam Machine AI</span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-slate-700 hover:text-orange-600 flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3 text-orange-600" />
                <span>Call Sales: {COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQueryModal();
                }}
                className="text-orange-600 hover:underline font-extrabold"
              >
                Request Custom Quote →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
