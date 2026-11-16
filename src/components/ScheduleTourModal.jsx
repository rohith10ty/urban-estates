import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';

export default function ScheduleTourModal({ isOpen, onClose, property }) {
  const [tourType, setTourType] = useState('in-person');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `UE-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white border border-brand-border p-6 sm:p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-brand-muted hover:text-brand-dark p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[10px] tracking-ultra text-brand-accent uppercase font-medium">
                  Private Showing Request
                </span>
                <h3 className="text-2xl font-light text-brand-dark tracking-tight mt-1">
                  Schedule a Private Tour
                </h3>
                {property && (
                  <p className="text-xs text-brand-muted mt-1 font-light">
                    For <strong className="text-brand-dark font-medium">{property.title}</strong> — {property.location.city} ({property.priceFormatted})
                  </p>
                )}
              </div>

              {/* Tour Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tour Format Switcher */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-brand-surface border border-brand-border">
                  <button
                    type="button"
                    onClick={() => setTourType('in-person')}
                    className={`py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                      tourType === 'in-person'
                        ? 'bg-brand-dark text-white'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    In-Person Tour
                  </button>
                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                      tourType === 'virtual'
                        ? 'bg-brand-dark text-white'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    Virtual Walkthrough
                  </button>
                </div>

                {/* Date & Time selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                      Time of Day
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-brand-surface border border-brand-border px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    >
                      <option value="morning">Morning (10:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="twilight">Twilight Viewing (5:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                        Private Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-surface border border-brand-border px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted mb-1">
                      Special Access or Confidentiality Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Security clearance, NDA requirements, or private chauffeur arrival notes..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border px-3.5 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                    />
                  </div>
                </div>

                {/* Confidentiality Notice */}
                <div className="flex items-center gap-2 text-[10px] text-brand-muted pt-1">
                  <Shield className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>All private showings are governed by strict confidentiality and discreet protocol.</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <span>Confirm Showing Appointment</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="py-6 text-center">
              <div className="w-14 h-14 bg-brand-surface border border-brand-accent text-brand-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 stroke-[1.8]" />
              </div>

              <span className="text-[10px] uppercase tracking-ultra text-brand-accent font-medium">
                Appointment Registered
              </span>
              <h3 className="text-2xl font-light text-brand-dark tracking-tight mt-1 mb-2">
                Tour Confirmation Requested
              </h3>

              <div className="bg-brand-surface p-4 border border-brand-border my-5 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-brand-muted">Reference:</span>
                  <strong className="font-mono text-brand-dark">{bookingRef}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Type:</span>
                  <span className="text-brand-dark capitalize">{tourType} Tour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Preferred Time:</span>
                  <span className="text-brand-dark">{time}</span>
                </div>
                {property && (
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Property:</span>
                    <span className="text-brand-dark">{property.title}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-brand-muted font-light mb-6">
                Our Senior Private Advisory Desk has received your request. A senior partner will contact you directly within 2 hours to confirm security credentials.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
