import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-saree.webp";
import lehengaImg from "@/assets/lehenga.webp";
import anarkaliImg from "@/assets/anarkali.webp";
import bridalImg from "@/assets/bridal-party.webp";
import festivalImg from "@/assets/festival.webp";

const services = [
  {
    title: "Saree Draping",
    image: heroImg,
    description:
      "Classic Nivi, Bengali, Gujarati and modern drapes — neat pleats and a pallu that stays put all evening.",
    price: "From $55",
    duration: "30–45 min",
  },
  {
    title: "Lehenga Choli Styling",
    image: lehengaImg,
    description:
      "Dupatta pinning in your preferred style, blouse fit checks, and lehenga adjustments for the perfect silhouette.",
    price: "From $65",
    duration: "30–45 min",
  },
  {
    title: "Anarkali / Suit Draping",
    image: anarkaliImg,
    description:
      "Dupatta drapes, churidar adjustments, and finishing touches for anarkalis, salwar suits and Indo-western looks.",
    price: "From $45",
    duration: "20–30 min",
  },
  {
    title: "Bridal Party Packages",
    image: bridalImg,
    description:
      "Group draping for the bride and her party — mothers, sisters and bridesmaids — all coordinated and on time.",
    price: "From $250",
    duration: "2–3 hrs (up to 5 outfits)",
  },
  {
    title: "Festival Special Bookings",
    image: festivalImg,
    description:
      "Diwali, Navratri, Karwa Chauth, Raksha Bandhan — festival-day draping at your home, often booked in advance.",
    price: "From $50",
    duration: "30 min per outfit",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Services &amp; Pricing</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Draping, done right</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Choose the service that fits your day. Every booking includes a quick
            style chat so we get the look exactly right.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-6 flex items-end justify-between border-t border-border/60 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Starting</p>
                    <p className="font-serif text-2xl text-[color:var(--magenta-deep)]">{s.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Time</p>
                    <p className="text-sm font-medium">{s.duration}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[image:var(--gradient-hero)] px-8 py-12 text-center text-ivory md:px-16">
          <h2 className="font-serif text-3xl md:text-4xl">Not sure which one you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/85">
            Send a quick note with your event and outfit — I'll suggest the right package.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-[color:var(--gold)] px-7 py-3 text-sm font-medium text-[color:var(--magenta-deep)]"
          >
            Ask a question
          </Link>
        </div>
      </section>
    </>
  );
}
