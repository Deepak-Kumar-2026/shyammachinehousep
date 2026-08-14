import React, { useState } from 'react';
import { 
  Boxes, 
  Award, 
  Building2, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  Phone, 
  MapPin, 
  FileText, 
  Bot, 
  Zap, 
  ShieldCheck, 
  Search, 
  ChevronRight,
  ArrowRight,
  ExternalLink,
  ZoomIn,
  Users,
  Activity,
  QrCode,
  Factory
} from 'lucide-react';

import { COMPANY_INFO, PRODUCTS, HOT_PRODUCTS, CERTIFICATES, TARGET_CITIES } from './data/companyData';
import { Product, TargetCity, Certificate } from './types';

import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AIChatModal } from './components/AIChatModal';
import { CatalogModal } from './components/CatalogModal';
import { QueryFormModal } from './components/QueryFormModal';
import { WebsiteQRModal } from './components/WebsiteQRModal';
import { WebsiteQRWidget } from './components/WebsiteQRWidget';
import { CertificateModal } from './components/CertificateModal';
import { FloatingWhatsAppAI } from './components/FloatingWhatsAppAI';
import { GoogleMapSection } from './components/GoogleMapSection';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { YouTubeGallery } from './components/YouTubeGallery';
import { BlogsSection } from './components/BlogsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ScrollToTop } from './components/ScrollToTop';
import { LocationHubView } from './components/LocationHubView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  
  const [showQueryModal, setShowQueryModal] = useState<boolean>(false);
  const [queryModalProduct, setQueryModalProduct] = useState<string>('');
  
  const [showCatalogModal, setShowCatalogModal] = useState<boolean>(false);
  const [showAIChatModal, setShowAIChatModal] = useState<boolean>(false);
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [selectedCertificateModal, setSelectedCertificateModal] = useState<Certificate | null>(null);

  // Showcase state for High Density hero section
  const [showcaseProductIndex, setShowcaseProductIndex] = useState<number>(0);
  const [showcaseImageIndex, setShowcaseImageIndex] = useState<number>(0);
  
  // Catalog filters
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredProduct = PRODUCTS[showcaseProductIndex] || PRODUCTS[0];
  const currentShowcaseImage = featuredProduct.images[showcaseImageIndex] || featuredProduct.mainImage;

  const categories = ['ALL', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedCity: TargetCity | undefined = TARGET_CITIES.find(c => c.id === selectedCityId);

  const handleOpenQuery = (productName?: string) => {
    setQueryModalProduct(productName || featuredProduct.name);
    setShowQueryModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans antialiased selection:bg-orange-500 selection:text-white w-full max-w-full overflow-x-hidden" id="app-root">
      
      {/* SEO Engine */}
      <SEOHead 
        cityName={selectedCity?.name}
        productName={selectedProductModal?.name}
      />

      {/* Header & Sticky Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedCityId={selectedCityId}
        setSelectedCityId={setSelectedCityId}
        onOpenQueryModal={handleOpenQuery}
        onOpenCatalogModal={() => setShowCatalogModal(true)}
        onOpenAIChat={() => setShowAIChatModal(true)}
        onOpenQRModal={() => setShowQRModal(true)}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6" id="main-content">
        
        {/* View Switching Logic */}

            {/* CITY LANDING VIEW (Target Market 5 Key Locations) */}
            {currentTab === 'city' && selectedCity ? (
              <LocationHubView
                selectedCity={selectedCity}
                allCities={TARGET_CITIES}
                onSelectCity={(cityId) => {
                  setSelectedCityId(cityId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenQueryModal={handleOpenQuery}
                onViewProductDetails={(product, city) => {
                  if (city) setSelectedCityId(city.id);
                  setSelectedProductModal(product);
                }}
              />
            ) : null}

            {/* HOME VIEW */}
            {currentTab === 'home' && !selectedCityId && (
              <>
                {/* HIGH DENSITY HERO PRODUCT SHOWCASE WORKSPACE */}
                <section className="space-y-4" id="high-density-workspace">
                  
                 

                  {/* Main Split Grid: Left Showcase Stage | Right Real-time AI & Lead Pipeline Sync */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* LEFT WORKSPACE: Image Stage + High Density Technical Specs Matrix */}
                    <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
                      
                      {/* High-Res Image Stage */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-7 space-y-3">
                          <div 
                            className="relative aspect-4/3 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group cursor-pointer"
                            onClick={() => setSelectedProductModal(featuredProduct)}
                          >
                            <img
                              src={currentShowcaseImage}
                              alt={featuredProduct.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-slate-700">
                              {featuredProduct.category}
                            </div>
                            <div className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                              <ZoomIn className="w-3.5 h-3.5 text-orange-400" />
                              <span>Click for Full Specs Modal</span>
                            </div>
                          </div>

                          {/* Image Thumbnails */}
                          {featuredProduct.images.length > 1 && (
                            <div className="flex items-center gap-2 overflow-x-auto">
                              {featuredProduct.images.map((img, i) => (
                                <button
                                  key={i}
                                  onClick={() => setShowcaseImageIndex(i)}
                                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                                    showcaseImageIndex === i ? 'border-orange-600 ring-2 ring-orange-100' : 'border-slate-200 opacity-60'
                                  }`}
                                >
                                  <img src={img} alt="thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Quick Highlights + Actions */}
                        <div className="md:col-span-5 space-y-3">
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                              MODEL: {featuredProduct.model}
                            </span>
                            <h2 className="text-base font-black text-slate-900 uppercase tracking-tight mt-0.5">
                              {featuredProduct.name}
                            </h2>
                            <p className="text-xs text-slate-600 line-clamp-3 mt-1 leading-relaxed">
                              {featuredProduct.description}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1 text-xs">
                            {featuredProduct.highlights.map((hl, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <span className="text-[10px] text-slate-400 font-black uppercase">{hl.label}:</span>
                                <span className="font-bold text-slate-800 text-[11px]">{hl.value}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Buttons - High Density Theme Requirements */}
                          <div className="space-y-2 pt-1">
                            <button
                              onClick={() => handleOpenQuery(featuredProduct.name)}
                              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg uppercase text-xs tracking-widest shadow-md shadow-orange-100 transition-colors flex items-center justify-center gap-2"
                              id="hero-quick-query-btn"
                            >
                              <Zap className="w-4 h-4" />
                              <span>Request Instant Quote</span>
                            </button>

                            <a
                              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Shyam Machine Tools, I want to inquire about price and video of ${featuredProduct.name} (${featuredProduct.model}).`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg uppercase text-xs tracking-widest shadow-md flex items-center justify-center gap-2 transition-colors"
                              id="hero-whatsapp-price-btn"
                            >
                              <MessageSquare className="w-4 h-4 fill-white" />
                              <span>Get WhatsApp Price</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Technical Specifications Table - High Density Spec */}
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <h3 className="text-xs font-black uppercase text-slate-400 mb-2.5 tracking-widest flex items-center gap-2">
                          <FileText className="w-4 h-4 text-orange-600" />
                          <span>Technical Specifications Matrix</span>
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                <th className="py-1.5 px-3">Parameter Name</th>
                                <th className="py-1.5 px-3">Unit</th>
                                <th className="py-1.5 px-3 text-right">Technical Value</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200/60 font-medium text-slate-800">
                              {featuredProduct.specifications.slice(0, 5).map((spec, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-white/60' : 'bg-transparent'}>
                                  <td className="py-1.5 px-3 font-semibold text-slate-800">{spec.parameter}</td>
                                  <td className="py-1.5 px-3 text-slate-500 font-mono text-[11px]">{spec.unit || '—'}</td>
                                  <td className="py-1.5 px-3 font-bold text-slate-900 text-right">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT WORKSPACE: Real-Time Dashboard with AI Auto-Reply Sync and Live Lead Pipeline */}
                    <div className="lg:col-span-4 space-y-4">
                      
                      {/* AI Chat Support Box */}
                      <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-4 space-y-3 shadow-lg">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <Bot className="w-5 h-5 text-orange-400" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-white">
                              AI WhatsApp Auto-Reply
                            </h3>
                          </div>
                          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            ● Live Sync
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          Our Gemini AI Assistant automatically answers buyer questions 24/7 regarding machine speeds, power ratings, prices, and shipping timelines to all 20 cities.
                        </p>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">Automated Forwarding:</div>
                          <div className="text-slate-200 italic font-medium">
                            "Sends all chat records directly to Supplier WhatsApp (+91 98997 46674)"
                          </div>
                        </div>

                        <button
                          onClick={() => setShowAIChatModal(true)}
                          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-950"
                          id="launch-ai-chat-btn"
                        >
                          <Bot className="w-4 h-4" />
                          <span>Open AI Assistant Window</span>
                        </button>
                      </div>

                      {/* SHYAM MACHINE HOUSE FACTORY & MANUFACTURING FACILITY SHOWCASE */}
                      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl border border-slate-800 p-4 space-y-3.5 shadow-xl">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                              <Factory className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                                New Delhi Factory Yard
                              </h3>
                              <p className="text-[10px] text-slate-400">25,000+ sq.ft. Assembly & Testing Unit</p>
                            </div>
                          </div>
                          <span className="bg-orange-500/20 text-orange-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-orange-500/30 uppercase tracking-widest">
                            ISO Certified
                          </span>
                        </div>

                        {/* Factory Image with Overlay */}
                        <div className="relative rounded-xl overflow-hidden border border-slate-800 group">
                          <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                            alt="SHYAM MACHINE HOUSE Factory Manufacturing Floor"
                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-3">
                            <div className="flex items-center gap-1.5 text-orange-400 text-[10px] font-bold uppercase">
                              <MapPin className="w-3 h-3 shrink-0" />
                              <span>Mayapuri / Wazirpur Ind. Area, New Delhi</span>
                            </div>
                            <p className="text-xs font-black text-white leading-snug">
                              Heavy Industrial Assembly & High-Precision Machine Testing
                            </p>
                          </div>
                        </div>

                        {/* Factory Specs & Features */}
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800/80 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="text-slate-300 font-medium">Ready Stock Yard</span>
                          </div>
                          <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800/80 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="text-slate-300 font-medium">100% Pre-tested</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleOpenQuery('Factory Visit & Machine Live Inspection')}
                          className="w-full bg-slate-800 hover:bg-slate-700 text-orange-400 font-extrabold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-slate-700 shadow-xs"
                          id="book-factory-visit-btn"
                        >
                          <Building2 className="w-4 h-4 text-orange-400" />
                          <span>Book Live Factory Visit</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </section>

                {/* HOT PRODUCTS SECTION (HOME PAGE ONLY) */}
                <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-5" id="hot-products-section">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white font-black text-[10px] px-2 py-0.5 rounded tracking-widest uppercase">
                          Featured Heavy Machinery
                        </span>
                        <h2 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                          HOT Products
                        </h2>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        High-demand automatic transformer winders, coil winders, soldering pots, sleeve cutting, and CNC machines.
                      </p>
                    </div>

                    <button
                      onClick={() => setCurrentTab('products')}
                      className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors uppercase tracking-wider self-start md:self-auto shadow-xs"
                      id="view-all-products-btn"
                    >
                      <span>Explore All Products Section ({PRODUCTS.length})</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    </button>
                  </div>

                  {/* HOT Products Grid - 5 Featured Products */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {HOT_PRODUCTS.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={(p) => setSelectedProductModal(p)}
                        onOpenQueryModal={handleOpenQuery}
                      />
                    ))}
                  </div>
                </section>

                {/* COMPANY PROFILE & CERTIFICATES */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="company-profile-certificates">
                  
                  {/* About Us Card */}
                  <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-orange-600" />
                      <h2 className="text-lg font-black uppercase text-slate-900 tracking-tight">
                        Company Profile • Shyam Machine House
                      </h2>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      Established in 1998 in New Delhi under the leadership of Director <strong>{COMPANY_INFO.directorName}</strong>, SHYAM MACHINE HOUSE has earned a global reputation as India&apos;s leading manufacturer, stocking supplier, and exporter of high precision workshop machinery. Operating from Shahdara, New Delhi ({COMPANY_INFO.address.formatted}) with government registration (GSTIN: {COMPANY_INFO.gstin}), our company supplies Grade-1 All Geared Lathes, Heavy Radial Drills, Milling Machines, Power Presses, and Surface Grinders across pan-India and 25+ international countries.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {COMPANY_INFO.stats.map((s, i) => (
                        <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                          <span className="block text-xl font-black text-orange-600">{s.value}</span>
                          <span className="text-[10px] font-black uppercase text-slate-500">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Our Certificates Section */}
                  <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-orange-400" />
                        <h2 className="text-base font-black uppercase tracking-tight text-white">
                          Our Certificates
                        </h2>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        GOVT VERIFIED
                      </span>
                    </div>

                    <div className="space-y-3">
                      {CERTIFICATES.map((cert) => (
                        <div
                          key={cert.id}
                          onClick={() => setSelectedCertificateModal(cert)}
                          className="bg-slate-950 hover:bg-slate-800/80 p-3 rounded-xl border border-slate-800 space-y-1 cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-white uppercase group-hover:text-orange-400 transition-colors">{cert.title}</span>
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          </div>
                          <div className="text-[11px] font-mono text-orange-400 font-bold">Ref #: {cert.number}</div>
                          <p className="text-[11px] text-slate-400 line-clamp-2">{cert.description}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentTab('certificates')}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2 rounded-lg transition-colors uppercase tracking-wider flex items-center justify-center gap-1"
                    >
                      <span>View & Download Our Certificates</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    </button>
                  </div>

                </section>

                {/* YOUTUBE CHANNEL & MACHINERY VIDEOS SECTION */}
                <YouTubeGallery onOpenQueryModal={handleOpenQuery} />

                {/* TECHNICAL BLOGS & GUIDES SECTION */}
                <BlogsSection onOpenQueryModal={handleOpenQuery} />

                {/* VERIFIED CUSTOMER REVIEWS & TESTIMONIALS */}
                <ReviewsSection onOpenQueryModal={handleOpenQuery} />

                {/* 20 TARGET MARKETS (CITIES) SEO SECTION */}
                <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4" id="target-markets-20-cities">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">
                        Industrial Target Market Coverage
                      </span>
                      <h2 className="text-lg font-black uppercase text-slate-900 tracking-tight">
                        Pan-India & International Export Destinations (20 Target Cities)
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Click any city to view local dispatch details</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                    {TARGET_CITIES.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => {
                          setSelectedCityId(city.id);
                          setCurrentTab('city');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 p-3 rounded-xl text-left transition-colors group"
                        id={`target-city-card-${city.id}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900 group-hover:text-orange-700">
                            {city.name}
                          </span>
                          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        </div>
                        <span className="text-[10px] text-slate-500 block mt-0.5 truncate">{city.region}</span>
                        <span className="text-[9px] text-emerald-600 font-bold block mt-1">
                          ⚡ {city.deliveryEstimate.split(' ')[0]} {city.deliveryEstimate.split(' ')[1]} Dispatch
                        </span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* FACTORY MAP SECTION */}
                <GoogleMapSection />
              </>
            )}

            {/* YOUTUBE DEDICATED TAB */}
            {currentTab === 'youtube' && (
              <YouTubeGallery onOpenQueryModal={handleOpenQuery} />
            )}

            {/* BLOGS DEDICATED TAB */}
            {currentTab === 'blogs' && (
              <BlogsSection onOpenQueryModal={handleOpenQuery} />
            )}

            {/* REVIEWS DEDICATED TAB */}
            {currentTab === 'reviews' && (
              <ReviewsSection onOpenQueryModal={handleOpenQuery} />
            )}

            {/* ALL PRODUCTS VIEW */}
            {currentTab === 'products' && (
              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Product Catalog</span>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                    Industrial Machine Tools & Workshop Equipment
                  </h1>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-2 rounded-lg font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                        activeCategory === cat 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={(p) => setSelectedProductModal(p)}
                      onOpenQueryModal={handleOpenQuery}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT US PAGE */}
            {currentTab === 'about' && (
              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
                  <span className="bg-orange-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded tracking-widest uppercase">
                    Since 1998 • New Delhi
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                    About Shyam Machine House (Shyam Machine Tools)
                  </h1>
                  <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    With over 25 years of engineering excellence, Shyam Machine House is recognized among India&apos;s top manufacturers and exporters of heavy workshop machinery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 uppercase">Grade-1 Manufacturing</h3>
                    <p className="text-xs text-slate-600 mt-1">Built with induction-hardened bedways, dynamically balanced spindles, and alloy castings.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 uppercase">Government Tax Registered</h3>
                    <p className="text-xs text-slate-600 mt-1">GSTIN: {COMPANY_INFO.gstin}. Compliant for Pan-India industrial billing.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 uppercase">Global Export Network</h3>
                    <p className="text-xs text-slate-600 mt-1">Exporting heavy machinery to Dubai, South Africa, Nepal, Australia, UK, Saudi Arabia, and SAARC countries.</p>
                  </div>
                </div>

                <GoogleMapSection />
              </section>
            )}

            {/* CERTIFICATES PAGE */}
            {currentTab === 'certificates' && (
              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Government Verification</span>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                    Our Certificates
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CERTIFICATES.map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedCertificateModal(cert)}
                      className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-5 space-y-3 cursor-pointer hover:border-orange-500 hover:shadow-lg transition-all group"
                    >
                      <div className="aspect-16/9 bg-slate-900 rounded-xl overflow-hidden border border-slate-300 relative">
                        <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[10px] font-mono text-orange-400 font-bold uppercase">Reg #: {cert.number}</span>
                          <span className="text-xs font-bold text-white uppercase">{cert.issuedBy}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-orange-600 font-black uppercase">{cert.number}</span>
                          <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-black border border-orange-200">{cert.category}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 uppercase mt-1 group-hover:text-orange-600 transition-colors">{cert.title}</h3>
                        <p className="text-xs text-slate-600 mt-1">{cert.description}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCertificateModal(cert);
                        }}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2 rounded-lg transition-colors uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Inspect & Download Govt Record</span>
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onSelectCity={(cityId) => {
          setSelectedCityId(cityId);
          setCurrentTab('city');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          setSelectedCityId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQueryModal={handleOpenQuery}
        onOpenQRModal={() => setShowQRModal(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsAppAI
        onOpenAIChat={() => setShowAIChatModal(true)}
        onOpenQueryModal={handleOpenQuery}
      />

      <ScrollToTop />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProductModal}
        selectedCity={selectedCity}
        onClose={() => setSelectedProductModal(null)}
        onOpenQueryModal={handleOpenQuery}
        onOpenCatalogModal={() => setShowCatalogModal(true)}
      />

      <AIChatModal
        isOpen={showAIChatModal}
        onClose={() => setShowAIChatModal(false)}
        onOpenQueryModal={handleOpenQuery}
      />

      <CatalogModal
        isOpen={showCatalogModal}
        onClose={() => setShowCatalogModal(false)}
      />

      <QueryFormModal
        isOpen={showQueryModal}
        onClose={() => setShowQueryModal(false)}
        initialProductName={queryModalProduct}
      />

      <WebsiteQRModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
      />

      <CertificateModal
        certificate={selectedCertificateModal}
        onClose={() => setSelectedCertificateModal(null)}
      />

    </div>
  );
}
