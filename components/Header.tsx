"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    label: "회사소개",
    href: "/about",
    sub: [
      { label: "대표자 인사말", href: "/about" },
      { label: "연혁", href: "/about/history" },
      { label: "찾아오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "창업안내",
    href: "/franchise",
    sub: [
      { label: "창업안내", href: "/franchise" },
      { label: "창업비용 안내", href: "/franchise/cost" },
    ],
  },
  {
    label: "오픈매장",
    href: "/open",
    sub: [{ label: "오픈 매장 보기", href: "/open" }],
  },
  {
    label: "게임기안내",
    href: "/products",
    sub: [
      { label: "레이싱 게임기", href: "/products?cat=레이싱" },
      { label: "건슈팅 게임기", href: "/products?cat=건슈팅" },
      { label: "리듬 게임기", href: "/products?cat=리듬" },
      { label: "경품 게임기", href: "/products?cat=경품" },
      { label: "스포츠 게임기", href: "/products?cat=스포츠" },
      { label: "어드벤처 게임기", href: "/products?cat=어드벤처" },
      { label: "인형뽑기 게임기", href: "/products?cat=인형뽑기" },
      { label: "캐주얼 게임기", href: "/products?cat=캐주얼" },
      { label: "수출 상담 문의", href: "/contact?type=export" },
    ],
  },
  {
    label: "커뮤니티",
    href: "/community",
    sub: [
      { label: "오락실 창업 사례", href: "/community" },
      { label: "창업 문의 사항", href: "/community/faq" },
      { label: "커뮤니티 게시판", href: "/community/board" },
    ],
  },
  {
    label: "고객상담",
    href: "/contact",
    sub: [
      { label: "고객상담", href: "/contact" },
      { label: "오락실 창업 사례", href: "/contact/cases" },
      { label: "인형뽑기 창업문의", href: "/contact?type=doll" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070e]/95 backdrop-blur-xl border-b border-[#1e1e38]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#f59e0b] text-xl leading-none">★</span>
          <span className="font-black tracking-wider text-[15px] uppercase">
            STAR<span className="text-[#5b6ef5]">GAME</span>PARK
          </span>
        </Link>

        {/* 데스크탑 네비 */}
        <nav className="hidden lg:flex items-center gap-0 h-full">
          {nav.map((item, i) => (
            <div
              key={i}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith(item.href)
                    ? "text-[#5b6ef5]"
                    : "text-[#b0b0cc] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
              {/* 드롭다운 */}
              {hovered === i && (
                <div className="absolute top-full left-0 w-44 bg-[#0d0d1a] border border-[#1e1e38] rounded-lg py-1 shadow-xl">
                  {item.sub.map((s, j) => (
                    <Link
                      key={j}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-[#b0b0cc] hover:text-white hover:bg-[#1e1e38] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:0222711213"
            className="ml-3 px-4 py-2 bg-[#5b6ef5] text-white text-sm font-bold rounded-lg hover:bg-[#4a5de0] transition-colors whitespace-nowrap"
          >
            무료상담 02-2271-1213
          </a>
        </nav>

        {/* 햄버거 */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-[22px] h-[2px] bg-white transition-all duration-300 origin-center ${
                menuOpen && i === 0 ? "translate-y-[7px] rotate-45" :
                menuOpen && i === 1 ? "opacity-0" :
                menuOpen && i === 2 ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-[#07070e]/98 backdrop-blur-xl transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-1">
          {nav.map((item, i) => (
            <div key={i}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 font-bold text-white border-b border-[#1e1e38]"
              >
                {item.label}
              </Link>
              {item.sub.map((s, j) => (
                <Link
                  key={j}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-7 py-2 text-sm text-[#b0b0cc] hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          ))}
          <a
            href="tel:0222711213"
            className="block mt-4 px-4 py-3 bg-[#5b6ef5] text-white text-center font-bold rounded-lg"
          >
            무료창업상담 02-2271-1213
          </a>
        </div>
      </div>
    </header>
  );
}
