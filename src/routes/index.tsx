
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anglo Irish Robotics - Stealth" },
      {
        name: "description",
        content:
          "Anglo Irish Robotics is a robotics lab operating in stealth.",
      },
      { property: "og:title", content: "Anglo Irish Robotics" },
      {
        property: "og:description",
        content: "A robotics lab operating in stealth.",
      },
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
      setT(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour12: false,
        })
      );

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
          <span className="pulse-dot" />
          Currently in Stealth
        </span>
      </header>

      <section className="fade-up">
        <h1>
          <img
            src="/favicon.png"
            alt="Anglo Irish Robotics"
            className="logo-muted h-28 w-auto md:h-40"
          />
        </h1>

        <p className="mt-8 max-w-sm normal-case tracking-normal text-sm leading-relaxed">
          Building machines for the physical world. More soon.
        </p>
      </section>

      <footer className="flex flex-wrap items-end justify-between gap-4">
        <span>
          51.5138° N / 0.0984° W - <Clock />
        </span>

        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
