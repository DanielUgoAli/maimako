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

const EXPERTISE = [
  "Ethical Hacking",
  "Cybersecurity",
  "Financial Investment Analysis",
  "Forensic Psychology",
  "Criminal Profiling",
  "Accounting & Governance",
];

const IMPACT = [
  {
    title: "Maimako Foundation",
    text: "As CEO, he leads projects focused on education, health, and environmental sustainability.",
  },
  {
    title: "Cowrywise Ambassador",
    text: "He champions financial literacy and practical investment culture among young Nigerians.",
  },
  {
    title: "APC Youth Wing",
    text: "He contributes to political development and youth representation in public leadership spaces.",
  },
];

export const metadata: Metadata = {
  title: "About | Maimako",
  description:
    "About Maimako-Yitman Shitna'an Sallah and his vision for service, innovation, and collective growth.",
};

export default function AboutPage() {
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
          className="absolute bottom-[-220px] left-1/2 w-[620px] max-w-none -translate-x-1/2 opacity-12 sm:bottom-[-260px] sm:w-[760px] lg:bottom-[-300px] lg:w-[980px]"
        />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-280 flex-col px-5 pb-16 pt-38 sm:px-10 sm:pt-42 lg:pt-46">
        <p className="animate-in fade-in text-[11px] tracking-[0.16em] text-[#24543a]/70 uppercase duration-700 fill-mode-both">
          About
        </p>

        <h1
          className={cn(
            playfair.className,
            "mt-4 max-w-220 animate-in fade-in slide-in-from-bottom-6 text-[34px] leading-tight tracking-[-0.02em] text-[#173022] duration-700 delay-100 fill-mode-both sm:text-[54px] lg:text-[68px]",
          )}
        >
          About Maimako-Yitman
          <br />
          <em className="text-[#b3882a]">Shitna&apos;an Sallah</em>
        </h1>

        <div className="mt-8 h-px w-full max-w-170 origin-left animate-in zoom-in-0 bg-[#24543a]/20 duration-900 delay-300 fill-mode-both" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <article className="animate-in fade-in slide-in-from-bottom-5 space-y-5 text-[14px] leading-[1.85] text-[#24543a]/88 duration-700 delay-500 fill-mode-both sm:text-[15px] sm:leading-[1.9]">
            <p>
              Maimako-Yitman Shitna&apos;an Sallah is a forward-thinking leader
              driven by a passion for service, innovation, and impact. With a
              multidisciplinary background spanning ethical hacking,
              cybersecurity, financial investment analysis, forensic psychology,
              and criminal profiling, he brings a unique and strategic
              perspective to leadership in today&apos;s complex world.
            </p>

            <p>
              Currently pursuing a career in accounting, Maimako possesses
              strong foundational knowledge in financial systems, governance,
              and economic analysis, skills that are essential for transparency,
              accountability, and sustainable growth.
            </p>

            <p>
              Beyond academics and professional development, he is the CEO of
              the Maimako Foundation, a non-profit organization committed to
              advancing education, health, and environmental sustainability.
              Through this platform, he has led initiatives that directly impact
              communities and empower young people to build better futures.
            </p>

            <p>
              Maimako is also a Cowrywise Ambassador, promoting financial
              literacy and smart investment habits among young Nigerians, and an
              active member of the APC Youth Wing, where he engages in political
              development and youth representation.
            </p>

            <p>
              His vision is rooted in progress, integrity, and collective
              growth. With the campaign slogan{" "}
              <strong>&quot;Together, We Rise&quot;</strong>, Maimako-Yitman
              Shitna&apos;an Sallah is committed to building a future where
              innovation meets leadership, and where every voice matters.
            </p>
          </article>

          <aside className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-700 fill-mode-both sm:gap-5">
            <div className="rounded-3xl border border-[#24543a]/20 bg-white/60 p-6 backdrop-blur-sm">
              <p className="mb-4 text-[11px] tracking-[0.12em] text-[#24543a]/70 uppercase">
                Multidisciplinary Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#24543a]/20 bg-[#eef6ef] px-3 py-1.5 text-[11px] tracking-[0.06em] text-[#1d3f2c] uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#24543a]/20 bg-white/60 p-6 backdrop-blur-sm">
              <p className="mb-4 text-[11px] tracking-[0.12em] text-[#24543a]/70 uppercase">
                Leadership & Public Impact
              </p>
              <div className="space-y-4">
                {IMPACT.map((entry) => (
                  <div
                    key={entry.title}
                    className="border-l border-[#b3882a]/40 pl-4"
                  >
                    <p className="text-[13px] tracking-[0.06em] text-[#173022] uppercase">
                      {entry.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-6 text-[#24543a]/85">
                      {entry.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#24543a]/20 bg-[#173022] px-6 py-5 text-[#eef6ef]">
              <p className="text-[11px] tracking-[0.14em] text-[#d4b15f]/80 uppercase">
                Campaign Motto
              </p>
              <p
                className={cn(
                  playfair.className,
                  "mt-2 text-[30px] leading-tight tracking-[-0.01em]",
                )}
              >
                Together,
                <br />
                We Rise.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-5 h-auto rounded-full border-[#d4b15f]/60 bg-transparent px-5 py-2.5 text-[11px] tracking-widest text-[#f2dfae] uppercase hover:bg-[#f2dfae]/10"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </aside>
        </div>

        <section className="mt-14 rounded-[2rem] border border-[#24543a]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(241,248,243,0.8)_100%)] p-5 sm:mt-18 sm:p-8 lg:p-10">
          <div className="max-w-170">
            <p className="text-[11px] tracking-[0.14em] text-[#24543a]/70 uppercase">
              Manifesto
            </p>
            <h2
              className={cn(
                playfair.className,
                "mt-3 text-[30px] leading-tight tracking-[-0.02em] text-[#173022] sm:text-[42px]",
              )}
            >
              The vision.
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-[#24543a]/80">
              Explore the full student-first manifesto, from transparency and
              accountability to internships, scholarships, and stronger student
              voice.
            </p>
            <Button
              asChild
              className="mt-6 h-auto rounded-full border border-[#24543a]/30 bg-[#d8efde] px-7 py-3 text-[12px] tracking-[0.08em] text-[#173022] uppercase hover:bg-[#cde8d4]!"
            >
              <Link href="/manifesto">Read Full Manifesto</Link>
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
