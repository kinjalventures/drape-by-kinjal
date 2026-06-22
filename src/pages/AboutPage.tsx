import { Link } from "react-router-dom";
import kinjalImg from "@/assets/kinjal.webp";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-gold)] opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={kinjalImg}
              alt="Portrait of Kinjal in a maroon saree"
              width={900}
              height={1100}
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">About</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">
            Hi, I'm Kinjal.
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I help women in the Tampa Bay area feel confident and beautiful in their
              traditional Indian attire — sarees, lehengas, anarkalis and everything in between.
            </p>
            <p>
              What started as draping for friends and family at home in Wesley Chapel has
              grown into something I get to do for brides, mothers, daughters and friends
              across Florida. Every drape is a quiet little ritual — and I love being a
              small part of your big day.
            </p>
            <p>
              Whether it's your first time wearing a saree or your hundredth, I'll take the
              time to make sure the pleats sit right, the pallu falls perfectly, and you
              feel completely at ease.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Book a draping
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium text-primary hover:bg-primary/5"
            >
              See the gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
