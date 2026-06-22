import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-saree.jpg";
import lehengaImg from "@/assets/lehenga.jpg";
import anarkaliImg from "@/assets/anarkali.jpg";
import festivalImg from "@/assets/festival.jpg";
import bridalImg from "@/assets/bridal-party.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative z-10">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Wesley Chapel · Tampa Bay
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-primary md:text-7xl">
              Look Stunning in Your <em className="not-italic text-[color:var(--magenta-deep)]">Traditional Best</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Hi, I'm Kinjal. I drape sarees, lehengas, and Indian outfits with care
              so you walk into every wedding, festival, and photoshoot feeling radiant.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/5"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[image:var(--gradient-gold)] opacity-25 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Woman in magenta and gold silk saree, beautifully draped"
                width={1600}
                height={1100}
                fetchPriority="high"
                className="h-[520px] w-full object-cover md:h-[640px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-5 py-4 shadow-[var(--shadow-soft)] md:block">
              <p className="font-serif text-2xl text-primary">100+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Happy clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo showcase */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Recent work</span>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">Draped with love</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: lehengaImg, alt: "Bridal red lehenga", tall: true },
              { src: anarkaliImg, alt: "Pink anarkali suit" },
              { src: festivalImg, alt: "Diwali festival look", tall: true },
              { src: bridalImg, alt: "Bridal party in coordinated sarees" },
            ].map((p, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ${
                  p.tall ? "md:row-span-2 md:aspect-[3/5]" : "md:aspect-[3/4]"
                } aspect-[3/4]`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="font-serif text-4xl text-primary md:text-5xl">
          Every drape, a little ritual.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          From neat saree pleats to dupatta pinning that holds all evening — I bring an
          unhurried, gentle touch so you can focus on the moment.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Home-based studio", d: "Comfortable, private appointments in Wesley Chapel." },
            { t: "On-location service", d: "I travel across the Tampa Bay area for weddings & events." },
            { t: "All styles welcome", d: "Bengali, Gujarati, Nivi, lehenga drape, dupatta — your way." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-7 text-left shadow-[var(--shadow-soft)]">
              <h3 className="font-serif text-xl text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-[image:var(--gradient-hero)] px-8 py-14 text-center text-ivory md:px-16 md:py-20">
          <h2 className="font-serif text-4xl md:text-5xl">Have an event coming up?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/85">
            Tell me a little about your day and I'll get back with availability,
            pricing, and a few drape ideas.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-[color:var(--gold)] px-8 py-3.5 text-sm font-medium tracking-wide text-[color:var(--magenta-deep)] transition-transform hover:scale-[1.03]"
          >
            Send an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
