import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const GoogleMapSection: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl border border-slate-800 shadow-xl" id="google-map-factory-section">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-600 text-white font-black text-[10px] px-2 py-0.5 rounded tracking-widest uppercase">
                Factory & Showroom Location
              </span>
              <span className="text-slate-400 font-mono text-xs">GSTIN: {COMPANY_INFO.gstin}</span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
              Map Location & Delhi Headquarters
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Visit our manufacturing unit and machine stockyard in New Delhi for live demonstrations and testing.
            </p>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address.formatted)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors w-fit"
            id="google-maps-directions-btn"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Location Map</span>
          </a>
        </div>

        {/* Split Grid: Maps Embed + Factory Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Map Frame */}
          <div className="lg:col-span-7 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 min-h-[300px] lg:min-h-[380px] relative">
            <iframe
              title="Shyam Machine Tools Factory Location"
              src={COMPANY_INFO.googleMapsEmbedUrl}
              className="w-full h-full border-0 min-h-[320px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Info Box */}
          <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase text-orange-400 tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Delhi Industrial Unit Address</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                  <span className="block text-[10px] text-orange-400 font-bold uppercase">Official Address (Shahdara, New Delhi)</span>
                  <p className="font-medium leading-relaxed">{COMPANY_INFO.address.formatted}</p>
                </div>

                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                  <span className="block text-[10px] text-amber-400 font-bold uppercase">Company Director</span>
                  <p className="font-bold text-white text-sm">{COMPANY_INFO.directorName} • <span className="text-slate-400 font-normal text-xs">Director, SHYAM MACHINE HOUSE</span></p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Phone / Sales Hotline</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-orange-400 block font-mono">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Official Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-white hover:text-orange-400 block truncate">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center gap-2 text-xs">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Working Hours</span>
                    <span className="font-semibold text-slate-200">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-emerald-300">Verified Govt. Taxpayer Business</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-900/80 px-2 py-0.5 rounded">
                GSTIN OK
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
