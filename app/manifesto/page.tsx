import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const MANIFESTO_POINTS = [
  {
    title: "Student-First Always",
    text: "Every decision is driven by what genuinely benefits Nile University Accounting students. No hidden agendas. No empty promises.",
  },
  {
    title: "Accountability You Can See",
    text: "Full transparency on NUASA dues and spending. If it is your money, you deserve to know how every kobo is used, with a public monthly ledger.",
  },
  {
    title: "Opportunities That Open Doors",
    text: "Drive internships, SIWES placements, and ACCA scholarship pathways that turn your degree into a real career launchpad.",
  },
  {
    title: "Unity Under The Revolution",
    text: "Every level. One association. One purpose. One unstoppable movement built on collective progress.",
  },
  {
    title: "Student Voice",
    text: "Monthly open feedback channels with NUASA executives so every student can reach leadership directly, with no gatekeeping.",
  },
];

export const metadata: Metadata = {
  title: "Manifesto | Maimako",
  description:
    "The student-first manifesto for NUASA: accountability, opportunity, unity, and a stronger student voice.",
};

export default function ManifestoPage() {
  return (
    <main
      className={cn(
        dmSans.className,
        "relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,#f8f3df_0%,#e7f2ea_35%,#deece2_70%,#d7e8dd_100%)] text-[#173022]",
      )}
    >
      <Header />

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/maimako.png"
          alt=""
          width={1100}
          height={1500}
          aria-hidden
          className="absolute bottom-[-220px] left-1/2 w-[620px] max-w-none -translate-x-1/2 opacity-10 sm:bottom-[-260px] sm:w-[760px] lg:bottom-[-300px] lg:w-[980px]"
        />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-280 flex-col px-5 pb-16 pt-38 sm:px-10 sm:pt-42 lg:pt-46">
        <p className="animate-in fade-in text-[11px] tracking-[0.16em] text-[#24543a]/70 uppercase duration-700 fill-mode-both">
          Manifesto
        </p>

        <h1
          className={cn(
            playfair.className,
            "mt-4 max-w-220 animate-in fade-in slide-in-from-bottom-6 text-[34px] leading-tight tracking-[-0.02em] text-[#173022] duration-700 delay-100 fill-mode-both sm:text-[54px] lg:text-[68px]",
          )}
        >
          The President NUASA
          <br />
          <em className="text-[#b3882a]">Has Been Waiting For</em>
        </h1>

        <div className="mt-8 h-px w-full max-w-170 origin-left animate-in zoom-in-0 bg-[#24543a]/20 duration-900 delay-300 fill-mode-both" />

        <p className="mt-8 max-w-130 text-[14px] leading-[1.8] text-[#24543a]/85 sm:text-[15px] sm:leading-[1.9]">
          This manifesto is a practical student agenda: transparent, measurable,
          and focused on outcomes that improve academic life and career
          readiness for every Nile University Accounting student.
        </p>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {MANIFESTO_POINTS.map((point, index) => (
            <article
              key={point.title}
              className="rounded-2xl border border-[#24543a]/18 bg-white/72 p-4 backdrop-blur-sm sm:p-5"
            >
              <p className="text-[10px] tracking-[0.14em] text-[#b3882a] uppercase">
                Point {index + 1}
              </p>
              <h2 className="mt-2 text-[17px] tracking-[-0.01em] text-[#173022]">
                {point.title}
              </h2>
              <p className="mt-2 text-[14px] leading-7 text-[#24543a]/85">
                {point.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="h-auto rounded-full border border-[#24543a]/30 bg-[#d8efde] px-6 py-3 text-[11px] tracking-[0.08em] text-[#173022] uppercase hover:bg-[#cde8d4]! sm:px-7 sm:text-[12px]"
          >
            <Link href="/about">Back to About</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full border border-[#b3882a]/45 bg-[#fff7e5] px-6 py-3 text-[11px] tracking-[0.08em] text-[#7a5a1c] uppercase hover:bg-[#f6e9ca] sm:px-7 sm:text-[12px]"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
