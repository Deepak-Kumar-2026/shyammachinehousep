import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Download, 
  Bot, 
  LayoutDashboard, 
  Menu, 
  X, 
  MapPin, 
  Award, 
  Boxes, 
  ChevronDown,
  Youtube,
  BookOpen,
  Star,
  Sparkles,
  QrCode
} from 'lucide-react';
import { COMPANY_INFO, TARGET_CITIES } from '../data/companyData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedCityId: string | null;
  setSelectedCityId: (cityId: string | null) => void;
  onOpenQueryModal: (productName?: string) => void;
  onOpenCatalogModal: () => void;
  onOpenAIChat: () => void;
  onOpenQRModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  selectedCityId,
  setSelectedCityId,
  onOpenQueryModal,
  onOpenCatalogModal,
  onOpenAIChat,
  onOpenQRModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCityDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setSelectedCityId(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCitySelect = (cityId: string) => {
    setSelectedCityId(cityId);
    setCurrentTab('city');
    setCityDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200 w-full overflow-hidden" id="main-header">
      {/* Top Utility Bar - Compact Single Line Flex */}
      <div className="bg-slate-900 text-white border-b border-slate-800" id="header-top-bar">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-1 flex items-center justify-between text-[10px] sm:text-[11px] font-medium gap-2 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap">
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-orange-400 transition-colors flex items-center gap-1 font-bold">
              <Phone className="w-3 h-3 text-orange-400 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:inline-flex items-center gap-1 hover:text-orange-400 transition-colors">
              <Mail className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
              <span>Factory & Office: Shahdara, New Delhi - 110032</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenQRModal}
              className="bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 font-bold text-[10px]"
              title="Scan or Download Website QR Code"
              id="top-bar-qr-btn"
            >
              <QrCode className="w-3 h-3 text-orange-400 shrink-0" />
              <span>Scan QR</span>
            </button>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Shyam Machine House, I am inquiring from your website.')}`}
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-green-400 transition-colors flex items-center gap-1 font-bold text-green-400"
            >
              <MessageSquare className="w-3 h-3 fill-green-400 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button 
              onClick={onOpenAIChat}
              className="bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 font-bold text-[10px]"
            >
              <Bot className="w-3 h-3 text-orange-400 shrink-0" />
              <span>AI: <strong className="text-emerald-400">Online 🟢</strong></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding & Header Content Bar */}
      <div className="bg-white border-b border-slate-200 py-2" id="header-branding-center">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between gap-2 flex-nowrap">
          
          {/* Mobile/Tablet Menu Hamburger Button */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-orange-600 hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
              id="mobile-menu-hamburger"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-orange-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Brand Logo & Company Title */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group my-0.5 min-w-0"
            id="brand-logo-button"
          >
            {/* Logo Mark Container */}
            <div className="bg-white border border-slate-300 rounded-xl p-0.5 shadow-2xs group-hover:border-orange-500 transition-colors flex items-center justify-center shrink-0 h-9 w-11 sm:h-11 sm:w-14 overflow-hidden">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="SMH Logo" 
                className="h-full w-full object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-left min-w-0">
              <h1 className="text-sm sm:text-xl font-black leading-tight text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight uppercase truncate">
                Shyam Machine House
              </h1>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[11px] font-semibold text-slate-600 mt-0.5 whitespace-nowrap overflow-hidden">
                <span className="text-orange-600 font-bold">New Delhi, India</span>
                <span className="text-slate-300">•</span>
                <span className="bg-slate-100 text-slate-800 px-1 py-0.1 rounded font-mono font-bold border border-slate-200 text-[9px] sm:text-[10px]">
                  GST: {COMPANY_INFO.gstin}
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Right Quick Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0" id="desktop-header-right-actions">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-right hidden xl:block mr-1"
            >
              <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Direct Hotline</span>
              <span className="text-xs font-black text-slate-900 hover:text-orange-600 transition-colors">{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenCatalogModal}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1 shadow-2xs hover:border-slate-400 whitespace-nowrap"
              id="desktop-branding-catalog-btn"
            >
              <Download className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>Product Catalog</span>
            </button>

            <button
              onClick={() => onOpenQueryModal()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1 shadow-xs hover:shadow-md whitespace-nowrap"
              id="desktop-branding-quote-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 shrink-0" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Right Action Icons */}
          <div className="lg:hidden flex items-center gap-1 shrink-0">
            <button
              onClick={onOpenCatalogModal}
              className="p-1.5 text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg text-xs font-bold transition-colors border border-orange-200 flex items-center justify-center"
              title="Download Product Catalog"
              aria-label="Download Catalog"
            >
              <Download className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Shyam Machine House, I am inquiring about machinery specs and prices.')}`}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center shadow-xs"
              title="WhatsApp Inquiry"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Links Header Tabs Bar - Single Line Flex Layout for Mobile, Tablet & Desktop */}
      <div className="bg-slate-50 border-b border-slate-200 relative z-30" id="header-nav-bar">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-1 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar whitespace-nowrap" id="header-main-nav">
          
          {/* Horizontal Aligned Header Navigation Tabs - Single Line Flex */}
          <nav className="flex items-center gap-1 text-xs font-bold text-slate-700 flex-nowrap shrink-0 overflow-x-auto no-scrollbar py-0.5" id="desktop-nav">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'home' && !selectedCityId
                  ? 'bg-orange-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              id="nav-link-home"
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'products' && !selectedCityId
                  ? 'bg-orange-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              id="nav-link-products"
            >
              <Boxes className={`w-3.5 h-3.5 shrink-0 ${currentTab === 'products' && !selectedCityId ? 'text-white' : 'text-orange-600'}`} />
              <span>Products</span>
            </button>

            {/* Featured CNC Coil Winders Badge Tab */}
            

            <button
              onClick={() => handleNavClick('youtube')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'youtube' && !selectedCityId
                  ? 'bg-red-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-red-600 hover:bg-slate-200/60'
              }`}
              id="nav-link-youtube"
            >
              <Youtube className={`w-3.5 h-3.5 shrink-0 ${currentTab === 'youtube' && !selectedCityId ? 'text-white fill-white' : 'text-red-600 fill-red-600'}`} />
              <span>YouTube</span>
            </button>

            <button
              onClick={() => handleNavClick('blogs')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'blogs' && !selectedCityId
                  ? 'bg-orange-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              id="nav-link-blogs"
            >
              <BookOpen className={`w-3.5 h-3.5 shrink-0 ${currentTab === 'blogs' && !selectedCityId ? 'text-white' : 'text-orange-600'}`} />
              <span>Blogs</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'about' && !selectedCityId
                  ? 'bg-orange-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              id="nav-link-about"
            >
              <span>About Us</span>
            </button>

            <button
              onClick={() => handleNavClick('certificates')}
              className={`py-1 px-2.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap shrink-0 text-[11px] sm:text-xs ${
                currentTab === 'certificates' && !selectedCityId
                  ? 'bg-orange-600 text-white font-extrabold shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              id="nav-link-certificates"
            >
              <Award className={`w-3.5 h-3.5 shrink-0 ${currentTab === 'certificates' && !selectedCityId ? 'text-white' : 'text-orange-600'}`} />
              <span>Certificates</span>
            </button>

           
          </nav>

          {/* Right Secondary CTA */}
          <div className="hidden md:flex items-center gap-1.5 shrink-0 ml-auto" id="header-action-buttons">
            <button
              onClick={onOpenQRModal}
              className="bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1 rounded-md flex items-center gap-1 font-bold text-[11px] transition-colors shadow-2xs whitespace-nowrap border border-slate-700"
              id="header-qr-code-cta"
            >
              <QrCode className="w-3 h-3 text-orange-400 shrink-0" />
              <span>Scan QR</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello SHYAM MACHINE HOUSE, I am inquiring about machinery pricing and catalog.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-2.5 py-1 rounded-md flex items-center gap-1 font-bold text-[11px] transition-colors shadow-2xs whitespace-nowrap"
              id="header-whatsapp-cta"
            >
              <MessageSquare className="w-3 h-3 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto" id="mobile-menu-drawer">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Navigation Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-slate-500 font-bold hover:text-orange-600 flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors ${
                currentTab === 'home' && !selectedCityId ? 'bg-orange-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-home"
            >
              Home Page
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
                currentTab === 'products' && !selectedCityId ? 'bg-orange-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-products"
            >
              <Boxes className="w-3.5 h-3.5 text-orange-600" />
              <span>Products</span>
            </button>

            <button
              onClick={() => handleNavClick('youtube')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
                currentTab === 'youtube' && !selectedCityId ? 'bg-red-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-youtube"
            >
              <Youtube className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>YouTube & Social</span>
            </button>

            <button
              onClick={() => handleNavClick('blogs')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
                currentTab === 'blogs' && !selectedCityId ? 'bg-orange-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-blogs"
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Blogs & News</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors ${
                currentTab === 'about' && !selectedCityId ? 'bg-orange-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-about"
            >
              About Company
            </button>

            <button
              onClick={() => handleNavClick('certificates')}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors flex items-center gap-1.5 col-span-2 ${
                currentTab === 'certificates' && !selectedCityId ? 'bg-orange-600 text-white font-extrabold shadow-2xs' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
              id="mobile-nav-certificates"
            >
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span>Our Certificates</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQRModal();
              }}
              className="bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 shadow-xs"
              id="mobile-menu-qr-btn"
            >
              <QrCode className="w-4 h-4 text-white" />
              <span>Website QR</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogModal();
              }}
              className="bg-slate-900 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Catalog</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Shyam Machine House, I am inquiring about machinery specs.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-between">
              <span>Target Delivery Markets / Locations</span>
              <span className="text-[9px] bg-orange-100 text-orange-800 px-1.5 rounded font-mono font-bold">5 Key Locations</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {TARGET_CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city.id)}
                  className={`text-left px-3 py-2 text-xs rounded-lg border transition-all flex items-center justify-between ${
                    selectedCityId === city.id 
                      ? 'bg-orange-600 text-white border-orange-600 font-extrabold shadow-xs' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-orange-50 hover:text-orange-700'
                  }`}
                  id={`mobile-city-${city.id}`}
                >
                  <div>
                    <span className="block font-bold uppercase">{city.name}</span>
                    <span className="block text-[9px] opacity-75">{city.region}</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase bg-white/20 px-1.5 py-0.5 rounded">
                    Market Hub
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
