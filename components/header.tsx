"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-24 items-center justify-between px-5 transition-all duration-300 sm:px-10",
        scrolled
          ? "border-b border-[#24543a]/20 bg-[rgba(234,246,236,0.92)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Link href="#about" className="flex items-center gap-2.5">
        <Image
          src="/favicon/ms-icon-310x310.png"
          alt="Maimako logo"
          width={60}
          height={60}
          className="rounded-full relative top-2"
          priority
        />
        <span className="text-[15px] font-medium tracking-[0.02em]">
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

      <Button
        asChild
        className="h-auto rounded-full border border-[#b3882a]/45 bg-[#fff7e5] px-5 py-2.5 text-[11px] font-medium tracking-widest text-[#7a5a1c] uppercase hover:bg-[#f6e9ca]!"
      >
        <Link href="#contact">Support</Link>
      </Button>
    </header>
  );
}
