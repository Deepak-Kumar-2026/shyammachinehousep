import React, { useState } from 'react';
import { 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Factory, 
  Search, 
  ArrowUpRight, 
  FileText, 
  Tag, 
  ChevronRight,
  Globe,
  Sparkles,
  PhoneCall,
  Download
} from 'lucide-react';
import { TargetCity, Product } from '../types';
import { COMPANY_INFO, HOT_PRODUCTS } from '../data/companyData';

interface LocationHubViewProps {
  selectedCity: TargetCity;
  allCities: TargetCity[];
  onSelectCity: (cityId: string) => void;
  onOpenQueryModal: (productName: string) => void;
  onViewProductDetails: (product: Product, city?: TargetCity) => void;
}

export const LocationHubView: React.FC<LocationHubViewProps> = ({
  selectedCity,
  allCities,
  onSelectCity,
  onOpenQueryModal,
  onViewProductDetails
}) => {
  const [locationSearchQuery, setLocationSearchQuery] = useState<string>('');
  const [selectedMappedProductModal, setSelectedMappedProductModal] = useState<Product | null>(null);

  const filteredProducts = HOT_PRODUCTS.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(locationSearchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(locationSearchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(locationSearchQuery.toLowerCase());
    return matchesSearch;
  });

  const getCityGradient = (cityId: string) => {
    switch (cityId) {
      case 'delhi': return 'from-orange-600 via-amber-600 to-red-700';
      case 'noida': return 'from-blue-600 via-indigo-600 to-slate-900';
      case 'karnataka': return 'from-emerald-600 via-teal-700 to-cyan-900';
      case 'tamil-nadu': return 'from-amber-600 via-orange-600 to-red-800';
      case 'maharashtra': return 'from-purple-700 via-indigo-800 to-slate-900';
      default: return 'from-slate-900 to-orange-900';
    }
  };

  const currentGradient = getCityGradient(selectedCity.id);

  return (
    <div className="space-y-6" id="location-hub-view-container">
      
      {/* TOP LOCATION SELECTOR TABS (5 Target Locations) */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded tracking-widest uppercase">
              Target Location Hubs
            </span>
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-tight">
              Select Target Location Hub (5 Key Industrial Markets)
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">
            Pan-India Direct Supply & On-Site Setup
          </span>
        </div>

        {/* 5 Location Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {allCities.map((city) => {
            const isSelected = city.id === selectedCity.id;
            return (
              <button
                key={city.id}
                onClick={() => onSelectCity(city.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isSelected 
                    ? `bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-orange-500` 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-orange-50 hover:border-orange-300 hover:text-slate-900'
                }`}
                id={`location-tab-${city.id}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isSelected ? 'text-orange-400' : 'text-slate-400'}`}>
                    {city.region.split('/')[0]}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-slate-400'}`} />
                </div>
                <div className="font-black text-sm uppercase tracking-tight">
                  {city.name}
                </div>
                <div className={`text-[9px] mt-1 line-clamp-1 font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {city.deliveryEstimate.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SELECTED LOCATION HERO BANNER WITH SEO GRADIENTS */}
      <section className={`relative bg-gradient-to-r ${currentGradient} text-white rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden border border-white/10`} id="selected-location-hero">
        <div className="relative z-10 space-y-4 max-w-4xl">
          
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Target Market Hub • {selectedCity.region}</span>
            </span>

            <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider font-mono">
              GST 07AFHFS7121Q1ZE Active
            </span>

            <span className="bg-black/30 text-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider font-mono">
              #1 Ranked Supplier
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Industrial Machinery Supplier in <span className="text-amber-300 underline underline-offset-4 decoration-amber-400">{selectedCity.name}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-100 font-medium mt-2 leading-relaxed max-w-3xl">
              {selectedCity.description}
            </p>
          </div>

          {/* SEO Badges Row */}
          <div className="flex flex-wrap gap-2 pt-1">
            {selectedCity.seoBadges.map((badge, idx) => (
              <span key={idx} className="bg-slate-900/80 text-orange-200 border border-orange-500/30 text-[11px] font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Logistics & Compliance Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
            <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-orange-300 font-black uppercase text-[10px]">
                <Truck className="w-3.5 h-3.5" />
                <span>Dispatch & Logistics</span>
              </div>
              <p className="font-bold text-white mt-0.5">{selectedCity.deliveryEstimate}</p>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-orange-300 font-black uppercase text-[10px]">
                <Factory className="w-3.5 h-3.5" />
                <span>Major Industrial Hubs</span>
              </div>
              <p className="font-bold text-white mt-0.5 truncate">{selectedCity.industrialHubs.slice(0, 3).join(', ')}</p>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-orange-300 font-black uppercase text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Factory Warranty & Service</span>
              </div>
              <p className="font-bold text-white mt-0.5">1 Year Warranty + On-Site Setup</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Shyam Machine House, I am inquiring about machinery supply & pricing for delivery to ${selectedCity.name}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire for {selectedCity.name} Delivery</span>
            </a>

            <button
              onClick={() => onOpenQueryModal(`Machine Inquiry for ${selectedCity.name}`)}
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-orange-600" />
              <span>Get Instant GST Quote for {selectedCity.name}</span>
            </button>
          </div>

        </div>
      </section>

      {/* INDUSTRIAL HUBS & SEO KEYWORDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Industrial Hubs List */}
        <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Factory className="w-4 h-4 text-orange-600" />
              <span>Key Industrial Hubs Served in {selectedCity.name}</span>
            </h3>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-bold">
              {selectedCity.industrialHubs.length} Clusters
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {selectedCity.industrialHubs.map((hub, idx) => (
              <span key={idx} className="bg-slate-50 hover:bg-orange-50 text-slate-800 border border-slate-200 hover:border-orange-300 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0" />
                <span>{hub}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: Targeted Meta Keywords Cloud */}
        <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-orange-600" />
              <span>Key Search Terms & Keywords for {selectedCity.name}</span>
            </h3>
            <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-mono font-bold">
              Top Rank Signals
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px]">
            {selectedCity.keywords.map((kw, idx) => (
              <span key={idx} className="bg-slate-900 text-slate-200 px-2.5 py-1 rounded border border-slate-800 font-mono font-medium">
                #{kw}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* MAPPED PRODUCTS FOR SELECTED LOCATION */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-5" id="location-product-mapping-section">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-600 text-white font-black text-[10px] px-2 py-0.5 rounded tracking-widest uppercase">
                HOT Products Location Mapping
              </span>
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                5 HOT Products Mapped to {selectedCity.name}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Top 5 HOT machines mapped specifically for {selectedCity.name} industrial supply, GST invoicing, and express direct dispatch.
            </p>
          </div>

          {/* Search bar inside location catalog */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={`Search HOT products for ${selectedCity.name}...`}
              value={locationSearchQuery}
              onChange={(e) => setLocationSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs font-medium focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Product Cards Grid with Location Mapping Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => {
            const mappedTitle = `${product.name} in ${selectedCity.name}`;
            const whatsappLocationUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Shyam Machine Tools,\n\nI am inquiring about getting price quote for delivery to *${selectedCity.name}*:\n*${product.name}* (${product.model})`
            )}`;

            return (
              <div 
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                id={`location-product-card-${product.id}`}
              >
                <div>
                  {/* Top Location Badge Bar */}
                  <div className="bg-slate-900 text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider flex items-center justify-between border-b border-slate-800">
                    <span className="text-orange-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-orange-500" />
                      <span>Mapped for {selectedCity.name} Supply</span>
                    </span>
                    <span className="text-slate-400 font-mono">{product.model}</span>
                  </div>

                  {/* Image */}
                  <div 
                    className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer group"
                    onClick={() => onViewProductDetails(product, selectedCity)}
                  >
                    <img
                      src={product.mainImage}
                      alt={mappedTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-orange-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-wider uppercase">
                      {product.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <h3 
                      onClick={() => onViewProductDetails(product, selectedCity)}
                      className="text-sm font-black text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight cursor-pointer line-clamp-2"
                    >
                      {mappedTitle}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quick Location Logistics Bar */}
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] space-y-1">
                      <div className="flex items-center justify-between text-slate-600 font-semibold">
                        <span>Local Lead Time:</span>
                        <span className="text-slate-900 font-bold">{selectedCity.deliveryEstimate.split('(')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600 font-semibold">
                        <span>GST Billing:</span>
                        <span className="text-green-700 font-bold">18% Tax Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewProductDetails(product, selectedCity)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg text-xs transition-colors uppercase tracking-wider text-[11px] flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                    <span>View Specs</span>
                  </button>

                  <a
                    href={whatsappLocationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg text-xs transition-colors uppercase tracking-wider text-[11px] flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
