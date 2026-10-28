import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import robot from "@/assets/robot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anglo Irish Robotics — Stealth" },
      { name: "description", content: "Anglo Irish Robotics is a robotics lab operating in stealth." },
      { property: "og:title", content: "Anglo Irish Robotics" },
      { property: "og:description", content: "A robotics lab operating in stealth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/Dublin", hour12: false }));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, []);
  return <span>{t || "--:--:--"}</span>;
}

function Index() {
  return (
    <main className="stealth-grid relative flex min-h-screen flex-col justify-between overflow-hidden bg-background p-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:p-10">
      <div className="scanline" aria-hidden />
      <header className="flex justify-between">
        <span>AIR / Lab 01</span>
        <span className="flex items-center gap-2">
          <span className="pulse-dot" /> Stealth
        </span>
      </header>

      <section className="grid items-center gap-10 py-12 md:grid-cols-[1.2fr_1fr]">
        <div className="fade-up">
          <p className="mb-6 text-signal">// Est. Dublin — London</p>
          <h1 className="font-display text-5xl font-medium normal-case tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Anglo Irish
            <br />
            <span className="text-muted-foreground">Robotics</span>
          </h1>
          <p className="mt-8 max-w-md normal-case tracking-normal text-sm leading-relaxed">
            A small team building general-purpose machines for the physical world. We're working
            quietly. We'll share more when it's ready.
          </p>
          <a
            href="mailto:hello@angloirishrobotics.com"
            className="mt-10 inline-flex items-center gap-3 border border-border px-5 py-3 text-foreground transition-colors hover:border-signal hover:text-signal"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>
        <div className="fade-up relative" style={{ animationDelay: "0.3s" }}>
          <img
            src={robot}
            alt="Silhouette of a robotic arm in the dark"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full border border-border object-cover"
          />
          <span className="absolute left-3 top-3">Unit_07</span>
          <span className="absolute bottom-3 right-3 text-signal">● Online</span>
        </div>
      </section>

      <section className="grid gap-px border border-border bg-border md:grid-cols-3">
        {[
          ["01", "Manipulation", "Dexterous hands and arms that learn by doing."],
          ["02", "Perception", "Seeing and understanding messy, real spaces."],
          ["03", "Autonomy", "Robots that decide what to do next on their own."],
        ].map(([n, t, d]) => (
          <div key={n} className="bg-background p-6">
            <span className="text-signal">{n}</span>
            <h2 className="mt-4 font-display text-lg normal-case tracking-tight text-foreground">{t}</h2>
            <p className="mt-2 normal-case tracking-normal text-sm">{d}</p>
          </div>
        ))}
      </section>

      <footer className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <span>
          53.3498° N / 6.2603° W — <Clock />
        </span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
