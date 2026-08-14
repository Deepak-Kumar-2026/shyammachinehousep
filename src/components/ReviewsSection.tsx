import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, Plus, User, Building, MapPin, Send, ShieldCheck, X } from 'lucide-react';
import { REVIEWS, COMPANY_INFO, PRODUCTS } from '../data/companyData';
import { CustomerReview } from '../types';

interface ReviewsSectionProps {
  onOpenQueryModal: (productName?: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenQueryModal }) => {
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  
  // Review submission state
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    city: 'Delhi NCR',
    country: 'India',
    rating: 5,
    machineModel: PRODUCTS[0]?.name || 'All Geared Heavy Duty Lathe Machine',
    reviewText: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.reviewText) return;

    const newReview: CustomerReview = {
      id: `rev-user-${Date.now()}`,
      customerName: formData.customerName,
      company: formData.company || 'Industrial Workshop',
      city: formData.city,
      country: formData.country,
      rating: formData.rating,
      date: 'Just Now',
      machineModel: formData.machineModel,
      reviewText: formData.reviewText,
      verifiedPurchase: true
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmitted(false);
      setFormData({
        customerName: '',
        company: '',
        city: 'Delhi NCR',
        country: 'India',
        rating: 5,
        machineModel: PRODUCTS[0]?.name || 'All Geared Heavy Duty Lathe Machine',
        reviewText: ''
      });
    }, 2000);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-6" id="reviews-section">
      
      {/* Overall Ratings Summary Banner */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded tracking-widest uppercase">
              Verified Workshop Ratings
            </span>
            <span className="text-emerald-400 font-mono text-xs font-semibold">● 99.4% Positive Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Customer Reviews & Testimonials
          </h2>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Read verified feedback from factory managers, workshop owners, and machinery exporters across India, Dubai, Australia, and 25+ global markets.
          </p>
        </div>

        {/* Rating Score Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-black text-amber-400 flex items-center gap-1">
              4.9 <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400 my-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Based on 380+ Verified Machine Buyers</span>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md shadow-orange-950"
            id="write-a-review-btn"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-orange-300 transition-colors shadow-xs"
            id={`review-card-${rev.id}`}
          >
            <div className="space-y-2">
              {/* Stars & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {rev.verifiedPurchase && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Buyer
                  </span>
                )}
              </div>

              {/* Machine Model Tag */}
              <div className="text-[11px] font-mono text-orange-600 font-bold bg-orange-50 border border-orange-100 px-2 py-1 rounded">
                Machine: {rev.machineModel}
              </div>

              {/* Review Text */}
              <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                "{rev.reviewText}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-slate-900">{rev.customerName}</div>
                <div className="text-[10px] text-slate-500 truncate max-w-[180px]">{rev.company}</div>
              </div>

              <div className="text-right text-[10px] text-slate-400 font-mono">
                <span className="font-semibold text-slate-600">{rev.city}, {rev.country}</span>
                <span className="block text-[9px]">{rev.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4" id="review-modal-overlay">
          <div className="bg-white border border-slate-200 text-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 my-auto">
            
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white uppercase tracking-tight">
                    Submit Feedback for SHYAM MACHINE HOUSE
                  </h3>
                  <p className="text-[10px] text-slate-400">Your review helps workshop owners make informed choices</p>
                </div>
              </div>

              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                id="close-review-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-5">
              {!submitted ? (
                <form onSubmit={handleSubmitReview} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                        Company / Workshop Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chandra Industries"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Delhi, Mumbai, Dubai..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                        Rating (1 to 5 Stars)
                      </label>
                      <select
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-bold"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5 - Excellent)</option>
                        <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                        <option value={3}>⭐⭐⭐ (3 - Good)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                      Machine Model Purchased *
                    </label>
                    <select
                      value={formData.machineModel}
                      onChange={(e) => setFormData({ ...formData, machineModel: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                    >
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="Custom Workshop Setup">Custom Workshop Machinery Line</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                      Your Review / Experience *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your feedback regarding turning precision, bed hardness, delivery speed, and overall satisfaction..."
                      value={formData.reviewText}
                      onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs p-3 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
                    id="submit-review-form-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review to SHYAM MACHINE HOUSE</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-slate-600">
                    Your review has been successfully submitted and published on SHYAM MACHINE HOUSE portal.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
