import type { FC } from "react";

const PHONE = "(559) 578-4820";
const PHONE_HREF = "tel:+15595784820";

const services = [
  {
    title: "Lawn Mowing & Edging",
    desc: "Precision mowing and clean, sharp edging tailored to Fresno's local climate and soil conditions for a year-round healthy lawn.",
    icon: "✂️",
  },
  {
    title: "Aeration",
    desc: "Core aeration to break up compacted soil and allow water and nutrients to reach the root zone — essential for thick, green Fresno lawns.",
    icon: "🌱",
  },
  {
    title: "Fertilizer Application",
    desc: "Targeted fertilization to promote lush, dense growth. Professionally applied for maximum effect without over- or under-dosing.",
    icon: "💪",
  },
  {
    title: "Weed & Pest Control",
    desc: "Targeted weed removal and pest management to protect your lawn from damage and keep it looking its best.",
    icon: "🛡️",
  },
  {
    title: "Sod Installation & Grass Removal",
    desc: "Full sod laying for new lawns or replacing dead patches. Old grass and sod removal also available for a clean start.",
    icon: "🌿",
  },
  {
    title: "Sprinkler Repair",
    desc: "Broken sprinkler heads inspected and repaired for efficient water usage and even coverage — no dry spots, no waste.",
    icon: "💧",
  },
  {
    title: "Rock Garden Maintenance",
    desc: "Stabilizing and repositioning rocks to maintain aesthetic and structural integrity in your landscape.",
    icon: "🪨",
  },
  {
    title: "Full Service Area",
    desc: "Serving Fresno, Lemoore, Reedley, Sanger, Selma, and Dinuba. Call to confirm availability in your area.",
    icon: "🗺️",
  },
];

const serviceArea = [
  "Fresno, CA",
  "Lemoore, CA",
  "Reedley, CA",
  "Sanger, CA",
  "Selma, CA",
  "Dinuba, CA",
];

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✂️</span>
            <div>
              <span className="font-bold text-gray-900 text-sm sm:text-base leading-tight block">
                The Lawn Barber
              </span>
              <span className="text-xs text-gray-500 block leading-tight">
                Licensed · Fresno, CA
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-lime-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-lime-700 transition-colors">About</a>
            <a href="#area" className="hover:text-lime-700 transition-colors">Service Area</a>
            <a href="#contact" className="hover:text-lime-700 transition-colors">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="bg-lime-600 hover:bg-lime-700 text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            Call Now
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-white py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-300/30 rounded-full px-4 py-1.5 text-lime-200 text-sm font-medium mb-6">
              ✅ Licensed · Accepts Credit Cards
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Fresno&apos;s{" "}
              <span className="text-lime-400">Licensed</span>{" "}
              Lawn Barber
            </h1>
            <p className="text-xl text-stone-200 max-w-2xl mx-auto mb-8">
              World-class care, local roots. Chase Raffellini brings a lifetime of
              passion for outdoor spaces — shaped by years in Australia and Vermont
              — to your Fresno lawn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="bg-lime-500 hover:bg-lime-400 text-stone-900 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                📞 Call {PHONE}
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
              >
                All Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-stone-300">
              <span className="flex items-center gap-1">✓ Licensed</span>
              <span className="flex items-center gap-1">✓ Accepts Credit Cards</span>
              <span className="flex items-center gap-1">✓ Mon–Sat 7:30am–6:30pm</span>
              <span className="flex items-center gap-1">✓ 6 Cities Served</span>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-lime-50 border-b border-lime-100 py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-lime-700">Licensed</div>
              <div className="text-sm text-gray-600">Certified Professional</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-700">10</div>
              <div className="text-sm text-gray-600">Services Offered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-700">6</div>
              <div className="text-sm text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-700">2 Yrs</div>
              <div className="text-sm text-gray-600">Serving Fresno</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Full-Service Lawn Care
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Far beyond a basic mow-and-go — The Lawn Barber offers a complete
                range of lawn care services for Fresno&apos;s climate and soil.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-lime-200 hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={PHONE_HREF}
                className="bg-lime-600 hover:bg-lime-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors inline-block shadow-md"
              >
                Call for a Free Estimate: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* About / Story */}
        <section id="about" className="py-20 px-4 bg-stone-900 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-300/30 rounded-full px-4 py-1.5 text-lime-300 text-sm font-medium mb-5">
                Meet Your Lawn Barber
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                World-Class Care, Local Roots
              </h2>
              <p className="text-stone-200 text-lg leading-relaxed mb-5">
                Chase Raffellini isn&apos;t your average lawn guy. He grew up in
                Australia — where outdoor living is central to family life — and
                developed a deep respect for well-kept outdoor spaces from an
                early age.
              </p>
              <p className="text-stone-300 leading-relaxed mb-5">
                Before bringing his skills to Fresno, Chase spent time in Vermont
                maintaining neighborhood church gardens and helping locals with
                their yard care. He learned that every lawn tells a story — and
                every homeowner deserves someone who takes that seriously.
              </p>
              <p className="text-stone-300 leading-relaxed mb-8">
                Now based in Fresno and fully licensed, Chase brings that same
                world-traveled dedication to every lawn he touches. Whether it&apos;s
                a precision edge, a full aeration job, or repairing your sprinklers
                for Fresno&apos;s dry summers — The Lawn Barber delivers.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  🇦🇺 Australia Background
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  ✅ Licensed Professional
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  💳 Accepts Credit Cards
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  🌱 Fresno Climate Expert
                </span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">✂️</div>
                <div className="text-2xl font-bold">Chase Raffellini</div>
                <div className="text-stone-400 text-sm mt-1">Owner &amp; Licensed Lawn Care Specialist</div>
              </div>
              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Licensed lawn care professional — not just anyone with a mower</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Expertise in Fresno&apos;s unique climate, soil, and drought conditions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Comprehensive services far beyond basic mowing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Accepts credit cards — easy, convenient payments</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Available Mon–Sat, 7:30 AM – 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="area" className="py-16 px-4 bg-lime-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Service Area</h2>
            <p className="text-gray-600 mb-8">
              The Lawn Barber serves the greater Fresno area and surrounding communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceArea.map((city) => (
                <span
                  key={city}
                  className="bg-white border border-lime-200 text-gray-800 font-medium px-5 py-2 rounded-full text-sm shadow-sm"
                >
                  📍 {city}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Not sure if we cover your area?{" "}
              <a href={PHONE_HREF} className="text-lime-700 font-semibold hover:underline">
                Give us a call
              </a>{" "}
              — we&apos;ll let you know.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Book Your Service
              </h2>
              <p className="text-gray-600 text-lg">
                Call Chase directly for a free estimate. Easy scheduling, fair pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-lime-50 rounded-2xl p-8 border border-lime-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Phone</div>
                      <a href={PHONE_HREF} className="text-lime-700 font-semibold hover:text-lime-800 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Based in</div>
                      <div className="text-gray-800">Fresno, CA 93722</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💳</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Payment</div>
                      <div className="text-gray-800">Credit Cards Accepted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">License</div>
                      <div className="text-gray-800">Licensed Lawn Care Professional</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={PHONE_HREF}
                    className="block w-full text-center bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 rounded-full transition-colors"
                  >
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { day: "Monday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Tuesday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Wednesday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Thursday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Friday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Saturday", hours: "7:30 AM – 6:30 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium text-gray-700">{day}</span>
                      <span className={hours === "Closed" ? "text-gray-400" : "text-gray-800"}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3 bg-lime-50 rounded-lg text-sm text-lime-700 border border-lime-100">
                  🌿 Free estimates available. No obligation — just honest advice about your lawn.
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="The Lawn Barber Fresno Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.0!2d-119.8704!3d36.7978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ3JzUyLjEiTiAxMTnCsDUyJzEzLjQiVw!5e0!3m2!1sen!2sus!4v1617000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-lime-600 py-14 px-4 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">
              Your Lawn Deserves a Barber-Level Cut
            </h2>
            <p className="text-lime-100 text-lg mb-8">
              Licensed. Experienced. Passionate about lawns. Call Chase for a free
              estimate and see the difference a real professional makes.
            </p>
            <a
              href={PHONE_HREF}
              className="bg-white text-lime-700 hover:bg-lime-50 font-bold text-xl px-10 py-4 rounded-full transition-colors shadow-lg inline-block"
            >
              📞 {PHONE}
            </a>
            <div className="mt-4 text-lime-200 text-sm">
              Mon–Sat · 7:30 AM – 6:30 PM · Fresno, Lemoore, Reedley &amp; more
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✂️</span>
                <span className="text-white font-bold text-lg">The Lawn Barber</span>
              </div>
              <p className="text-sm leading-relaxed">
                Fresno&apos;s licensed lawn care specialist. World-class care, local
                roots — by Chase Raffellini.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Services</h4>
              <ul className="text-sm space-y-1">
                <li>Lawn Mowing &amp; Edging</li>
                <li>Aeration &amp; Fertilization</li>
                <li>Weed &amp; Pest Control</li>
                <li>Sod Installation</li>
                <li>Sprinkler Repair</li>
                <li>Rock Garden Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="text-sm space-y-1">
                <div>
                  <a href={PHONE_HREF} className="text-lime-400 hover:text-lime-300">
                    {PHONE}
                  </a>
                </div>
                <div>Fresno, CA 93722</div>
                <div>Mon–Sat: 7:30 AM – 6:30 PM</div>
                <div>
                  <a
                    href="https://www.yelp.com/biz/the-lawn-barber-fresno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-300 text-xs underline"
                  >
                    View on Yelp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} The Lawn Barber · Licensed Lawn Care · Fresno, CA · Serving 6 Cities
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
