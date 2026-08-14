import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, MessageSquare, ArrowUpRight, Youtube,Facebook, Instagram, BookOpen, Star, QrCode, Download } from 'lucide-react';
import { COMPANY_INFO, TARGET_CITIES } from '../data/companyData';
import { WebsiteQRWidget } from './WebsiteQRWidget';

interface FooterProps {
  onSelectCity: (cityId: string) => void;
  onNavigate: (tab: string) => void;
  onOpenQueryModal: () => void;
  onOpenQRModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCity, onNavigate, onOpenQueryModal, onOpenQRModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-10 pb-6 border-t-4 border-orange-600" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Company Info Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg border border-slate-700 h-10 w-12 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt="SMH Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-white tracking-tight">
                  Shyam Machine House
                </h3>
                <span className="block text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                  Established 1998 • New Delhi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              SHYAM MACHINE HOUSE is a premier Indian manufacturer, stocking supplier, and global exporter of high-precision all geared lathe machines, heavy radial drills, universal milling machines, and hydraulic power presses.
            </p>

            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono text-[11px]">GSTIN: {COMPANY_INFO.gstin}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://youtube.com/@yashsharma-r3p?si=TGzZvdcwIHsa0XnU"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>YouTube Channel</span>
              </a>

              <a
                href="https://www.instagram.com/shyammachinehouse"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Profile</span>
              </a>


              <a
  href="https://www.facebook.com/people/Yash-Sharma/pfbid0HwjAKwMxXEKEuzCjzr2FqKSqf4YwMVKsvRb4ahTBZprAmjLgAh38aGDRMyFnzUZNl/?rdid=jJPlPpLRVfiBhTvK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19DWpooEKJ%2F"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-1.5 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-xs"
>
  <Facebook className="w-4 h-4" />
  <span>Facebook Profile</span>
</a>
            </div>
          </div>

          {/* Direct Contact & WhatsApp */}
          <div className="space-y-2.5 text-xs">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-l-2 border-orange-600 pl-2">
              Factory Contact Hotline
            </h4>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.formatted}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-orange-400 font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-orange-400">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="hover:text-orange-400">
                  www.shyammachine.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello SHYAM MACHINE HOUSE, I am inquiring from website footer.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-xs"
                id="footer-whatsapp-btn"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Direct Supplier</span>
              </a>

              <WebsiteQRWidget compact onExpandModal={onOpenQRModal} />
            </div>
          </div>

          {/* Quick Navigation Directory */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-l-2 border-orange-600 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-orange-400 transition-colors text-left flex items-center gap-1">
                  • All Machinery Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('youtube')} className="hover:text-red-400 transition-colors text-left flex items-center gap-1">
                  <Youtube className="w-3 h-3 text-red-500" />
                  YouTube Channel & Videos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blogs')} className="hover:text-orange-400 transition-colors text-left flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-orange-500" />
                  Technical Blogs & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-orange-400 transition-colors text-left flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  Customer Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orange-400 transition-colors text-left">
                  • About SHYAM MACHINE HOUSE
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('certificates')} className="hover:text-orange-400 transition-colors text-left">
                  • Our Certificates
                </button>
              </li>
            </ul>
          </div>

          {/* 5 Target Market Hubs */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-l-2 border-orange-600 pl-2">
              Target Markets & Location Hubs (5 Key Locations)
            </h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-[10px] text-slate-400 font-medium">
              {TARGET_CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => onSelectCity(city.id)}
                  className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-orange-950 hover:to-amber-950 hover:text-orange-300 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider"
                  id={`footer-city-${city.id}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  <span>{city.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-orange-400" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">SHYAM MACHINE HOUSE</strong>. All Rights Reserved. ISO 9001:2015 Certified Manufacturing Facility.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('privacy')} className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-orange-400 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={onOpenQueryModal} className="text-orange-400 font-bold hover:underline">
              Request Price Quotation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
