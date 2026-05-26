"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "소개" },
    { href: "#benefits", label: "창업혜택" },
    { href: "#products", label: "보유기기" },
    { href: "#process", label: "창업절차" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070e]/92 backdrop-blur-xl border-b border-[#1e1e38]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[70px] gap-8">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-[#f59e0b] text-xl">★</span>
          <span className="font-black tracking-wider text-lg uppercase">
            STAR<span className="text-[#5b6ef5]">GAME</span>PARK
          </span>
        </a>

        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-end">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-[#b0b0cc] hover:text-white hover:bg-[#1e1e38] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0222711213"
            className="ml-2 px-4 py-2 bg-[#5b6ef5] text-white rounded-md text-sm font-semibold hover:bg-[#4a5de0] transition-colors"
          >
            무료 창업상담
          </a>
        </nav>

        {/* 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-250 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-opacity duration-250 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-250 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden fixed inset-0 top-[70px] bg-[#07070e]/98 backdrop-blur-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              className="px-4 py-3 rounded-md text-base font-medium text-[#b0b0cc] hover:text-white hover:bg-[#1e1e38] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0222711213"
            onClick={handleNavClick}
            className="mt-2 px-4 py-3 bg-[#5b6ef5] text-white rounded-md text-base font-semibold text-center"
          >
            무료 창업상담 02-2271-1213
          </a>
        </div>
      </div>
    </header>
  );
}
