"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Manifesto", href: "/manifesto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[#24543a]/20 bg-[rgba(234,246,236,0.92)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-280 items-center justify-between px-4 sm:h-24 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/favicon/ms-icon-310x310.png"
            alt="Maimako logo"
            width={56}
            height={56}
            className="relative top-1 rounded-full sm:top-2"
            priority
          />
          <span className="text-[14px] font-medium tracking-[0.02em] sm:text-[15px]">
            Maimako
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] tracking-[0.08em] text-[#24543a]/80 uppercase transition-colors hover:text-[#173022]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-auto rounded-full border border-[#b3882a]/45 bg-[#fff7e5] px-5 py-2.5 text-[11px] font-medium tracking-widest text-[#7a5a1c] uppercase hover:bg-[#f6e9ca]! sm:inline-flex"
          >
            <Link href="/support">Support</Link>
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#24543a]/25 bg-white/80 text-[#173022] transition-all duration-300 hover:bg-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <List
              size={18}
              weight="bold"
              className={cn(
                "absolute transition-all duration-250",
                menuOpen
                  ? "scale-70 opacity-0 rotate-45"
                  : "scale-100 opacity-100 rotate-0",
              )}
            />
            <X
              size={18}
              weight="bold"
              className={cn(
                "absolute transition-all duration-250",
                menuOpen
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-70 opacity-0 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-[#24543a]/15 bg-[rgba(234,246,236,0.98)] transition-all duration-300 ease-out md:hidden",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-4 pb-4 pt-3">
          <nav className="mx-auto flex w-full max-w-280 flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-[#24543a]/12 bg-white/70 px-4 py-3 text-[12px] tracking-[0.08em] text-[#24543a]/90 uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/support"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-[#b3882a]/35 bg-[#fff3d4] px-4 py-3 text-[12px] tracking-[0.08em] text-[#7a5a1c] uppercase"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
