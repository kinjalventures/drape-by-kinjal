import { useState, type FormEvent } from "react";

// Replace YOUR_FORM_ID with your Formspree form ID (https://formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
        <aside>
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Book Now</span>
          <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">Let's plan your drape</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Share a few details about your event and I'll reply within 24 hours with
            availability and pricing.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a
              href="https://wa.me/18130000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] hover:border-primary"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</span>
                <span className="font-medium text-primary">(813) 000-0000</span>
              </span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://instagram.com/drapedbykinjal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] hover:border-primary"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Instagram</span>
                <span className="font-medium text-primary">@drapedbykinjal</span>
              </span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:hello@drapedbykinjal.com"
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] hover:border-primary"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</span>
                <span className="font-medium text-primary">hello@drapedbykinjal.com</span>
              </span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-10"
        >
          {status === "success" ? (
            <div className="rounded-2xl bg-[image:var(--gradient-hero)] px-6 py-10 text-center text-ivory">
              <h2 className="font-serif text-3xl">Thank you!</h2>
              <p className="mt-3 text-ivory/85">
                Your inquiry is in. I'll reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full bg-[color:var(--gold)] px-6 py-2 text-sm font-medium text-[color:var(--magenta-deep)]"
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required maxLength={100} />
                <Field label="Phone" name="phone" type="tel" required maxLength={30} />
              </div>
              <Field label="Email" name="email" type="email" required maxLength={255} />

              <div className="grid gap-5 md:grid-cols-2">
                <Select label="Event Type" name="event_type" required>
                  <option value="">Choose…</option>
                  <option>Wedding</option>
                  <option>Festival</option>
                  <option>Photoshoot</option>
                  <option>Other</option>
                </Select>
                <Select label="Outfit Type" name="outfit_type" required>
                  <option value="">Choose…</option>
                  <option>Saree</option>
                  <option>Lehenga</option>
                  <option>Anarkali / Suit</option>
                  <option>Bridal Party (multiple)</option>
                  <option>Not sure yet</option>
                </Select>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Preferred Date" name="preferred_date" type="date" required />
                <Field label="Preferred Time" name="preferred_time" type="time" required />
              </div>

              <Field
                label="Special Requests (optional)"
                name="notes"
                textarea
                maxLength={1000}
                placeholder="Drape style, location, anything else I should know…"
              />

              {status === "error" && (
                <p className="mt-3 text-sm text-destructive">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-7 w-full rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send inquiry"}
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your inquiry.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ─── Form helpers ─────────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={4}
          className={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {children}
      </select>
    </label>
  );
}
