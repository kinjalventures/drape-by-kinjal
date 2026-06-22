import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.webp";
import heroImg from "@/assets/hero-saree.webp";
import lehengaImg from "@/assets/lehenga.webp";
import anarkaliImg from "@/assets/anarkali.webp";
import festivalImg from "@/assets/festival.webp";
import bridalImg from "@/assets/bridal-party.webp";
import detailImg from "@/assets/saree-detail.webp";

const photos = [
  { src: heroImg, alt: "Magenta silk saree drape", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "Turquoise saree pallu" },
  { src: lehengaImg, alt: "Bridal red lehenga" },
  { src: g2, alt: "Mustard lehenga twirl", span: "md:row-span-2" },
  { src: festivalImg, alt: "Diwali purple saree" },
  { src: anarkaliImg, alt: "Pink anarkali" },
  { src: g3, alt: "Wine banarasi saree", span: "md:col-span-2" },
  { src: detailImg, alt: "Emerald saree detail" },
  { src: bridalImg, alt: "Bridal party group", span: "md:col-span-2" },
  { src: g4, alt: "Saree flat lay with jewelry" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Gallery</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Drapes &amp; moments</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A small selection of recent weddings, festivals and photoshoots.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
