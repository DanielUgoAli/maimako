"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const SUPPORT_KEY = "maimako_support_clicked";

type ApiResponse = {
  count: number;
};

export default function SupportPage() {
  const initialHasSupported =
    typeof window !== "undefined" &&
    localStorage.getItem(SUPPORT_KEY) === "true";

  const [count, setCount] = useState<number | null>(null);
  const [hasSupported, setHasSupported] = useState(initialHasSupported);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const confettiRef = useRef<ConfettiRef>(null);

  const triggerConfetti = () => {
    void confettiRef.current?.fire({
      particleCount: 130,
      spread: 95,
      startVelocity: 48,
      scalar: 1.1,
      ticks: 260,
      origin: { y: 0.55 },
    });

    window.setTimeout(() => {
      void confettiRef.current?.fire({
        particleCount: 90,
        spread: 72,
        startVelocity: 40,
        scalar: 1,
        ticks: 220,
        origin: { x: 0.25, y: 0.58 },
      });

      void confettiRef.current?.fire({
        particleCount: 90,
        spread: 72,
        startVelocity: 40,
        scalar: 1,
        ticks: 220,
        origin: { x: 0.75, y: 0.58 },
      });
    }, 180);
  };

  useEffect(() => {
    const loadCount = async () => {
      try {
        const response = await fetch("/api/support", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to load support count.");
        }
        const data: ApiResponse = await response.json();
        setCount(data.count);
      } catch {
        setError("Could not load support count right now.");
      }
    };

    void loadCount();
  }, []);

  const handleSupport = async () => {
    if (hasSupported || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to submit support.");
      }

      const data: ApiResponse = await response.json();
      setCount(data.count);
      setHasSupported(true);
      localStorage.setItem(SUPPORT_KEY, "true");
      triggerConfetti();
    } catch {
      setError("Something went wrong while recording your support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={cn(
        dmSans.className,
        "relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,#f8f3df_0%,#e7f2ea_35%,#deece2_70%,#d7e8dd_100%)] text-[#173022]",
      )}
    >
      <Header />
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none absolute inset-0 z-30 h-full w-full"
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/maimako.png"
          alt=""
          width={1100}
          height={1500}
          aria-hidden
          className="absolute -bottom-55 left-1/2 w-155 max-w-none -translate-x-1/2 opacity-10 sm:-bottom-65 sm:w-190 lg:-bottom-75 lg:w-245"
        />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-280 items-center justify-center px-4 pb-12 pt-26 sm:px-10 sm:pb-16 sm:pt-34 lg:pt-40">
        <div className="w-full max-w-190 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
          <p className="text-center text-[11px] tracking-[0.16em] text-[#24543a]/70 uppercase">
            Support
          </p>

          <h1
            className={cn(
              playfair.className,
              "mt-4 text-center text-[32px] leading-tight tracking-[-0.02em] text-[#173022] sm:text-[54px] lg:text-[68px]",
            )}
          >
            Show Your Support
            <br />
            <em className="text-[#b3882a]">For Maimako</em>
          </h1>

          <div className="mx-auto mt-8 h-px w-full max-w-120 bg-[#24543a]/20" />

          <div className="mx-auto mt-8 w-full max-w-155 rounded-[2rem] border border-[#24543a]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(241,248,243,0.86)_100%)] p-5 text-center shadow-2xl backdrop-blur-sm sm:mt-10 sm:p-10">
            <p className="text-[11px] tracking-[0.12em] text-[#24543a]/70 uppercase">
              Total Recorded Support
            </p>
            <p className="mt-3 text-[58px] leading-none tracking-[-0.02em] text-[#173022] sm:text-[92px]">
              {count ?? "..."}
            </p>

            {hasSupported ? (
              <p className="mt-3 inline-block rounded-full border border-[#b3882a]/30 bg-[#fff2cf]/80 px-4 py-1.5 text-[11px] tracking-[0.08em] text-[#7a5a1c] uppercase">
                Thank You For Supporting
              </p>
            ) : null}

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={handleSupport}
                disabled={hasSupported || isSubmitting || count === null}
                className="h-auto rounded-full border border-[#24543a]/30 bg-[#d8efde] px-6 py-3 text-[11px] tracking-[0.08em] text-[#173022] uppercase hover:bg-[#cde8d4]! disabled:cursor-not-allowed disabled:opacity-70 sm:px-7 sm:text-[12px]"
              >
                {hasSupported
                  ? "Support Recorded"
                  : isSubmitting
                    ? "Recording..."
                    : "Support Now"}
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border border-[#b3882a]/45 bg-[#fff7e5] px-6 py-3 text-[11px] tracking-[0.08em] text-[#7a5a1c] uppercase hover:bg-[#f6e9ca] sm:px-7 sm:text-[12px]"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>

            {error ? (
              <p className="mt-4 text-[13px] text-[#7a1c1c]">{error}</p>
            ) : null}

            {hasSupported ? (
              <p className="mt-4 text-[13px] text-[#24543a]/90 italic">
                It all starts with one person.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
