"use client";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  );
}

const services = [
  { num: "01", title: "Lawn Mowing", desc: "Precision cuts with clean lines — every visit looks like a fresh barbershop fade." },
  { num: "02", title: "Edging & Trimming", desc: "Crisp borders along driveways, walkways, and beds. The detail work that separates good from excellent." },
  { num: "03", title: "Aeration", desc: "Core aeration to loosen compacted soil and let nutrients reach the roots. Scheduled for peak season impact." },
  { num: "04", title: "Sod Installation", desc: "New lawn from scratch or patching damaged areas — laid right for long-term establishment." },
  { num: "05", title: "Sprinkler Repair", desc: "Broken heads, controller issues, zone failures. Chase diagnoses and fixes — no unnecessary replacements." },
  { num: "06", title: "Weed Control", desc: "Pre- and post-emergent treatments that actually stick. Fewer weeds next visit, even fewer the visit after that." },
  { num: "07", title: "Fertilization", desc: "Seasonal feeding programs tailored to Fresno's climate and your lawn's specific grass type." },
  { num: "08", title: "Overseeding", desc: "Fill in thin or bare patches with the right seed blend for your soil and sun exposure." },
  { num: "09", title: "Leaf & Debris Removal", desc: "Full cleanup and haul-away — seasonal or as-needed. Left cleaner than when we arrived." },
  { num: "10", title: "Free Estimates", desc: "Chase visits the property before quoting. No guessing, no surprises — just an honest number." },
];

const areas = ["Fresno", "Lemoore", "Reedley", "Sanger", "Selma", "Dinuba"];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100dvh" }}>

      {/* Nav */}
      <nav
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-subtle)" }}
        className="sticky top-0 z-50 px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            className="w-9 h-9 rounded flex items-center justify-center font-bold text-xs tracking-wider"
            aria-hidden="true"
          >
            <span style={{ color: "oklch(0.14 0.018 200)" }}>TLB</span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.04em" }} className="leading-tight">
              The Lawn Barber
            </div>
            <div style={{ color: "var(--text-muted)" }} className="text-xs">Fresno, CA · Licensed</div>
          </div>
        </div>
        <a
          href="tel:5595784820"
          style={{
            background: "var(--accent)",
            color: "oklch(0.14 0.018 200)",
            transition: "background 160ms ease-out, transform 160ms ease-out",
          }}
          className="flex items-center gap-2 font-semibold px-4 py-2 rounded text-sm active:scale-97"
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          aria-label="Call The Lawn Barber at (559) 578-4820"
        >
          <PhoneIcon />
          (559) 578-4820
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <div
              className="animate-fade-in inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-8"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              <ShieldIcon />
              Licensed · Mon–Sat 7:30am–6:30pm
            </div>

            <h1
              className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Precision lawn care.<br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>From someone who</span><br />
              traveled to perfect it.
            </h1>

            <p className="animate-fade-up delay-2 text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              Chase Raffellini grew up refining his craft across Australia and Vermont before bringing
              world-class lawn care to Fresno. Licensed, detail-obsessed, and available six days a week.
            </p>

            <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
              <a
                href="tel:5595784820"
                style={{
                  background: "var(--accent)",
                  color: "oklch(0.14 0.018 200)",
                  transition: "background 160ms ease-out, transform 160ms ease-out",
                }}
                className="flex items-center gap-2 font-semibold px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                <PhoneIcon />
                Call (559) 578-4820
              </a>
              <a
                href="#services"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  transition: "border-color 160ms ease-out, color 160ms ease-out",
                }}
                className="font-medium px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                10 services
              </a>
            </div>
          </div>

          {/* Info panel */}
          <div
            className="animate-fade-up delay-2 rounded-2xl p-6 w-full md:w-72 shrink-0"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-2 mb-5" style={{ color: "var(--accent)" }}>
              <ScissorsIcon />
              <span className="text-xs font-semibold tracking-widest uppercase">Chase Raffellini</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Hours</div>
                <div className="font-semibold">Mon – Sat, 7:30am – 6:30pm</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>License</div>
                <div className="font-semibold">California Licensed</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Payment</div>
                <div className="font-semibold">Credit cards accepted</div>
              </div>
            </div>
            <div
              className="mt-5 pt-5"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>Service areas</div>
              <div className="flex flex-wrap gap-1.5">
                {areas.map(a => (
                  <span
                    key={a}
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              "California Licensed",
              "Credit cards accepted",
              "10 services offered",
              "Free estimates",
              "Fresno & 5 cities",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <div style={{ color: "var(--accent)" }}><CheckIcon /></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Chase */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not just a lawn guy.<br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>A barber for your yard.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Chase Raffellini refined his approach to lawn care working across two continents — Australia&apos;s
              precision turf culture and Vermont&apos;s demanding four-season landscape requirements. In Fresno,
              he applies that same rigor to every residential and commercial property he touches.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Licensed by the state of California. Yelp-listed. Credit cards welcome.
              Free estimates on every property — because Chase looks before he quotes.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <ShieldIcon />, label: "California Licensed", desc: "State-licensed lawn care — the credential that separates professionals from weekend operators" },
              { icon: <ScissorsIcon />, label: "The barber standard", desc: "Same precision a barber brings to every haircut — applied to every edge, line, and blade of grass" },
              { icon: <CreditCardIcon />, label: "Credit cards accepted", desc: "Pay how you prefer — no awkward cash-only conversations at the end of a job" },
              { icon: <MapPinIcon />, label: "6 cities served", desc: "Fresno, Lemoore, Reedley, Sanger, Selma, Dinuba — one crew covering the Central Valley" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 items-start p-4 rounded-xl animate-fade-up delay-${i + 1}`}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <div style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "var(--bg-surface)" }} className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              10 ways we can help.
            </h2>
            <p style={{ color: "var(--text-secondary)" }} className="text-lg max-w-xl">
              From a precision weekly cut to a full lawn renovation — one licensed crew handles it all.
            </p>
          </div>

          <div className="divide-y" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", borderColor: "var(--border-subtle)" }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`grid md:grid-cols-[80px_1fr] gap-4 py-5 animate-fade-up delay-${Math.min(i + 1, 6)}`}
              >
                <div
                  className="text-3xl font-bold leading-none pt-1 select-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)", opacity: 0.35 }}
                  aria-hidden="true"
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for a lawn that<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>turns heads?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            Free estimates. Monday through Saturday, 7:30am to 6:30pm.
            Chase visits in person before quoting — no guessing.
          </p>
          <a
            href="tel:5595784820"
            style={{
              background: "var(--accent)",
              color: "oklch(0.14 0.018 200)",
              transition: "background 160ms ease-out, transform 160ms ease-out",
            }}
            className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded text-lg active:scale-97"
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          >
            <PhoneIcon />
            Call (559) 578-4820
          </a>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Credit cards accepted · Licensed · Fresno &amp; Central Valley
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border-subtle)" }} className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.04em", fontSize: "1rem" }}>
            The Lawn Barber
          </div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            Fresno, CA · (559) 578-4820 · Mon–Sat 7:30am–6:30pm
          </div>
        </div>
      </footer>
    </main>
  );
}
