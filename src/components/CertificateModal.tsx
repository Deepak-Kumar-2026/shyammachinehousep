import React from 'react';
import { X, ShieldCheck, Download, ExternalLink, Award, FileText, CheckCircle2, Building, User } from 'lucide-react';
import { Certificate } from '../types';
import { COMPANY_INFO } from '../data/companyData';
// import { generateCertificatePDF } from '../utils/generateCertificatePDF';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const isGST = certificate.id === 'gst-certificate';
  const isMSME = certificate.id === 'udyam-msme-certificate';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4" id="certificate-modal-overlay">
      <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-tight">
                Official Verification Certificate
              </h3>
              <p className="text-[10px] text-slate-400">{certificate.issuedBy}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            id="close-cert-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Canvas Container */}
        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto bg-slate-50">
          
          {/* Authentic Document Card Box */}
          <div className="bg-white rounded-xl border-2 border-slate-300 p-6 shadow-md space-y-4 relative">
            
            {/* Header Stamp */}
            <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Government of India Verification</span>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">
                  {certificate.title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-2 py-0.5 rounded border border-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>STATUS: ACTIVE & VERIFIED</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">Reg #: {certificate.number}</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="w-14 h-14 bg-slate-100 border border-slate-300 rounded-lg p-1 text-[8px] flex flex-col items-center justify-center text-slate-500 font-mono">
                  <span className="font-bold text-slate-800 text-[9px]">GOVT SEAL</span>
                  <span>{isGST ? 'GST REG-06' : isMSME ? 'UDYAM MSME' : 'ISO 9001'}</span>
                </div>
              </div>
            </div>

            {/* Document Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="font-bold text-slate-500 uppercase text-[10px] block">Legal Entity Name</span>
                <span className="font-black text-slate-900 text-sm">{COMPANY_INFO.name}</span>
              </div>

              <div>
                <span className="font-bold text-slate-500 uppercase text-[10px] block">Registration Number</span>
                <span className="font-mono font-black text-orange-600 text-sm">{certificate.number}</span>
              </div>

              {isGST && (
                <>
                  <div>
                    <span className="font-bold text-slate-500 uppercase text-[10px] block">Constitution of Business</span>
                    <span className="font-semibold text-slate-800">Partnership Firm</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 uppercase text-[10px] block">Authorized Partners</span>
                    <span className="font-semibold text-slate-800">Srishty Jain & Yash Sharma</span>
                  </div>
                </>
              )}

              {isMSME && (
                <>
                  <div>
                    <span className="font-bold text-slate-500 uppercase text-[10px] block">Enterprise Type</span>
                    <span className="font-semibold text-slate-800">Micro Enterprise (Manufacturing & Wholesale)</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 uppercase text-[10px] block">NIC Classification</span>
                    <span className="font-semibold text-slate-800">28170 (Office/Industrial Machine) & 46593</span>
                  </div>
                </>
              )}

              <div className="md:col-span-2">
                <span className="font-bold text-slate-500 uppercase text-[10px] block">Principal Place of Business</span>
                <span className="font-medium text-slate-800">{COMPANY_INFO.address.formatted}</span>
              </div>

              <div className="md:col-span-2 border-t border-slate-200 pt-2">
                <span className="font-bold text-slate-500 uppercase text-[10px] block">Issuing Authority & Validity</span>
                <span className="font-semibold text-slate-800">{certificate.issuedBy} • {certificate.validUntil}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic bg-amber-50/60 p-3 rounded-lg border border-amber-200/60">
              "{certificate.description}"
            </p>

            {/* Verification Footer */}
            <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 border-t border-slate-200">
              <span>Digitally verified for Shyam Machine House</span>
              <span className="font-mono text-emerald-700 font-bold">Pan-India GST Tax Compliant</span>
            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
           <a
  href={certificate.pdfUrl}
  download
  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
  id="download-cert-doc-btn"
>
  <Download className="w-4 h-4 text-orange-400" />
  <span>Download Original Certificate PDF</span>
</a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Shyam Machine House, I am verifying your certificate: ${certificate.title} (Ref: ${certificate.number}). Please share direct PDF copy.`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
              id="whatsapp-verify-cert-btn"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Request Original PDF on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
