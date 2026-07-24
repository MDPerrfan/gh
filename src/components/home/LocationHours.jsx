import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SCHEDULE = [
  { days: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
  { days: "Sat – Sun", time: "10:00 AM – 9:00 PM" },
];

export default function LocationHours() {
  return (
    <section className="bg-[#1A0810] border-t border-[#B8893F]/20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border border-[#B8893F]/25 bg-[#14060C]">
          {/* Left Side: Info Panel (Takes 7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between text-[#F2EDE6]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B8893F] font-sans font-semibold mb-3 flex items-center gap-2">
                <span className="w-5 h-[1px] bg-[#B8893F]" />
                Glamour Hairstyles
              </p>
              <h2 className="font-serif italic text-3xl sm:text-4xl text-[#E8D5B0] mb-8">
                Visit Our Studio
              </h2>

              {/* Grid Layout for Location Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {/* Location & Contact */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} strokeWidth={1.5} className="text-[#B8893F] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B8893F] font-medium mb-1">Address</p>
                      <p className="font-sans font-light text-sm text-[#F2EDE6]/80 leading-relaxed">
                        Lot 9 Sheriff Street &amp; Third Avenue,<br />
                        Sunbryanville, Georgetown, Guyana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Phone size={18} strokeWidth={1.5} className="text-[#B8893F] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B8893F] font-medium mb-1">Appointments</p>
                      <a
                        href="tel:+5926816014"
                        className="font-sans font-light text-sm text-[#F2EDE6]/80 hover:text-[#B8893F] transition-colors block"
                      >
                        +592 681 6014
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Mail size={18} strokeWidth={1.5} className="text-[#B8893F] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B8893F] font-medium mb-1">Email Us</p>
                      <a
                        href="mailto:glamourhairstylesgy@gmail.com"
                        className="font-sans font-light text-sm text-[#F2EDE6]/80 hover:text-[#B8893F] transition-colors block break-all"
                      >
                        glamourhairstylesgy@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <Clock size={18} strokeWidth={1.5} className="text-[#B8893F] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B8893F] font-medium mb-2">Hours</p>
                    <ul className="space-y-2 text-sm font-sans font-light text-[#F2EDE6]/80">
                      {SCHEDULE.map((item, i) => (
                        <li key={i} className="flex flex-col">
                          <span className="text-xs text-[#E8D5B0]/60">{item.days}</span>
                          <span>{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <div className="pt-4 border-t border-[#B8893F]/20">
              <a
                href="https://maps.google.com/?q=Lot+9+Sheriff+Street+%26+Third+Avenue,+Sunbryanville,+Georgetown,+Guyana"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-[#B8893F] text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#E8D5B0] hover:text-[#B8893F] hover:border-[#B8893F] transition-colors pb-1"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Side: Visual Image Panel (Takes 5 Cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#B8893F]/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
              alt="Glamour Hairstyles Studio Interior"
              className="w-full h-full object-cover object-center filter brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14060C]/60 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}