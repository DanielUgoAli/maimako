"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const STATS = [
  { value: "2026", label: "Election Year" },
  { value: "1st", label: "Priority: Students" },
  { value: "Nile", label: "University" },
  { value: "N/A", label: "Unmatched Vision" },
];

const SPONSORS = [
  {
    name: "Maimako Foundation",
    src: "/foundation.png",
    width: 38,
    height: 38,
  },
  {
    name: "APC Nigeria",
    src: "/apc.jpg",
    width: 38,
    height: 38,
  },
  {
    name: "Revolution Party",
    src: "/revolution.png",
    width: 38,
    height: 38,
  },
];

function SponsorRow({
  name,
  src,
  width,
  height,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3">
      <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black/5">
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
        />
      </div>
      <span className="text-xs font-medium text-black/80">{name}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      className={cn(
        dmSans.className,
        "relative isolate min-h-screen overflow-x-hidden text-[#173022]",
      )}
    >
      <Header />

      <section
        id="about"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-280 flex-col justify-center px-4 pb-52 pt-30 sm:px-10 sm:pb-52 sm:pt-36 lg:h-dvh lg:min-h-0 lg:pb-24 lg:pl-68 xl:pl-84"
      >
        <div className="relative z-10 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end lg:gap-20">
          <div className="max-w-155">
            <h1
              className={cn(
                playfair.className,
                "animate-in fade-in slide-in-from-bottom-7 duration-700 delay-200 fill-mode-both text-[42px] leading-none tracking-[-0.02em] text-[#173022] sm:text-[74px] md:text-[88px]",
              )}
            >
              Maimako
              <br />
              <em className="text-[#b3882a]">for</em>
              <br />
              NUASA
            </h1>

            <div className="my-8 h-px origin-left animate-in zoom-in-0 duration-1000 delay-700 fill-mode-both bg-[#b3882a]" />

            <p
              id="vision"
              className={cn(
                "max-w-100 animate-in fade-in slide-in-from-bottom-6 text-[15px] leading-[1.75] font-light text-[#24543a]/75 duration-700 delay-[800ms] fill-mode-both",
              )}
            >
              A campaign rooted in service, driven by community, and built for
              the generation that will define tomorrow&apos;s Nigeria.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-1000 fill-mode-both">
              <Button
                asChild
                className="h-auto rounded-full border border-[#24543a]/30 bg-[#d8efde] px-6 py-3 text-[11px] tracking-[0.08em] text-[#173022] uppercase hover:bg-[#cde8d4]! sm:px-8 sm:py-3.5 sm:text-[12px]"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border border-[#b3882a]/45 bg-[#fff7e5] px-6 py-3 text-[11px] tracking-[0.08em] text-[#7a5a1c] uppercase hover:bg-[#f6e9ca] sm:px-8 sm:py-3.5 sm:text-[12px]"
              >
                <Link href="/manifesto">Manifesto</Link>
              </Button>
            </div>
          </div>

          <aside
            id="platform"
            className="flex w-full max-w-95 flex-col gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-[600ms] fill-mode-both lg:max-w-70 lg:items-end"
          >
            <div className="grid w-full grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-[#24543a]/25 pt-4.5"
                >
                  {stat.value !== "Nile" ? (
                    <>
                      <p className="mb-1 text-[22px] font-medium tracking-[-0.02em] text-[#173022]">
                        {stat.value}
                      </p>
                      <p className="text-[11px] tracking-[0.06em] text-[#24543a]/60 uppercase">
                        {stat.label}
                      </p>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded">
                        <Image
                          src={"/nilelogo.png"}
                          width={50}
                          height={50}
                          alt="Nile University Logo"
                        />
                      </div>
                      <div>
                        <p className="mb-1 text-[22px] font-medium tracking-[-0.02em] text-[#173022]">
                          {stat.value}
                        </p>
                        <p className="text-[11px] tracking-[0.06em] text-[#24543a]/60 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full">
              <p className="mb-3 text-[10px] tracking-[0.12em] text-[#24543a]/65 uppercase">
                Proudly sponsored by
              </p>
              <div className="flex flex-col gap-2">
                {SPONSORS.map((sponsor) => (
                  <SponsorRow key={sponsor.name} {...sponsor} />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="pointer-events-none absolute top-20 right-4 z-0 opacity-80 sm:top-24 sm:right-8 sm:w-auto lg:-left-12 lg:top-auto lg:right-auto lg:bottom-0 lg:translate-y-5 lg:opacity-100 xl:-left-14">
          <Image
            src="/maimako.png"
            alt="Maimako campaign character"
            width={700}
            height={1100}
            priority
            className="h-auto w-44 -scale-x-100 object-contain sm:w-64 lg:scale-x-100 lg:w-72 xl:w-84 2xl:w-96"
          />
          <div className="absolute inset-x-0 -bottom-1 h-12 bg-gradient-to-b from-transparent to-white sm:h-14 lg:hidden" />
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 overflow-hidden border-y border-[#24543a]/30 bg-[#173022] py-3.5 whitespace-nowrap"
      >
        <div className="flex min-w-max gap-12">
          {Array.from({ length: 6 }).map((_, idx) => (
            <span
              key={idx}
              className="text-[11px] tracking-[0.14em] text-[#d4b15f]/70 uppercase"
            >
              <strong className="font-medium text-[#f0ddad]">
                Maimako 2026
              </strong>
              &nbsp;&middot;&nbsp; NUASA Campaign &nbsp;&middot;&nbsp;
              <strong className="font-medium text-[#f0ddad]">
                Nile University
              </strong>
              &nbsp;&middot;&nbsp; Student Governance &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
