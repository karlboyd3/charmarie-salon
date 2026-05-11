import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Salon Policies"
        title="Our Policies"
        subtitle="Please review our policies prior to booking your appointment."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Cancellation */}
          <div className="bg-white rounded-2xl p-8 border border-espresso/8">
            <h2 className="font-display font-semibold text-2xl text-espresso mb-4">Cancellation Policy</h2>
            <div className="space-y-4 font-sans text-muted text-sm leading-relaxed">
              <p>You will receive an email or text confirmation three days prior to your appointment.</p>
              <p>Appointments must be cancelled at least <strong className="text-espresso">48 hours in advance</strong> to avoid a No-Show rating.</p>
              <p>If a client fails to cancel within the 48-hour window, the card on file will be charged <strong className="text-espresso">50% of the total expected ticket</strong> for services booked that day.</p>
              <p>Habitual No-Shows (3 or more) will be responsible for paying <strong className="text-espresso">100% of the expected ticket price</strong> prior to future bookings.</p>
              <p>Failure to pay No-Show fees will result in being unable to schedule with our salon in the future.</p>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mt-4">
                <p className="text-espresso text-sm"><strong>Note:</strong> This policy also applies to cancelling a color appointment without 48 hours notice while keeping another service on the books.</p>
              </div>
            </div>
          </div>

          {/* Permanent Cosmetics Booking */}
          <div className="bg-white rounded-2xl p-8 border border-espresso/8">
            <h2 className="font-display font-semibold text-2xl text-espresso mb-4">Permanent Cosmetics Booking</h2>
            <div className="space-y-3 font-sans text-muted text-sm leading-relaxed">
              <p>By scheduling a permanent cosmetics appointment online, you agree that you have read and fully understand the information listed on our Permanent Cosmetics and FAQ pages.</p>
              <p>Failure to follow Pre-Care that results in cancellation without 48 hours notice will count as a No-Show and be subject to No-Show policies.</p>
              <p>Cancellation during the service due to failure to follow pre-care will result in a <strong className="text-espresso">$50 fee</strong> to cover the cost of disposable materials.</p>
            </div>
          </div>

          {/* Skin Care & Body Waxing */}
          <div className="bg-white rounded-2xl p-8 border border-espresso/8">
            <h2 className="font-display font-semibold text-2xl text-espresso mb-4">Skin Care & Body Waxing</h2>
            <p className="font-sans text-muted text-sm leading-relaxed">All skin care and body waxing appointments must be made by phone at <a href="tel:5402513350" className="text-gold hover:underline">(540) 251-3350</a>. Online booking is not available for these services.</p>
          </div>

          {/* Retail */}
          <div className="bg-white rounded-2xl p-8 border border-espresso/8">
            <h2 className="font-display font-semibold text-2xl text-espresso mb-4">Retail Returns</h2>
            <p className="font-sans text-muted text-sm leading-relaxed">Retail products may be exchanged or refunded up to <strong className="text-espresso">30 days</strong> after purchase.</p>
          </div>

          {/* Service Satisfaction */}
          <div className="bg-white rounded-2xl p-8 border border-espresso/8">
            <h2 className="font-display font-semibold text-2xl text-espresso mb-4">Service Satisfaction</h2>
            <p className="font-sans text-muted text-sm leading-relaxed">If you are unhappy with your service for any reason, please contact us within <strong className="text-espresso">seven days</strong> of your appointment. We want every guest to leave happy and will do everything we can to make it right.</p>
          </div>

          {/* Contact */}
          <div className="bg-espresso rounded-2xl p-8 text-center">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Questions?</p>
            <p className="font-display font-semibold text-2xl text-white mb-4">We&#39;re Here to Help</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:5402513350" className="font-sans text-sm text-cream/80 hover:text-gold transition-colors">(540) 251-3350</a>
              <span className="hidden sm:block text-white/20">·</span>
              <a href="mailto:charmariesalon@gmail.com" className="font-sans text-sm text-cream/80 hover:text-gold transition-colors">charmariesalon@gmail.com</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
