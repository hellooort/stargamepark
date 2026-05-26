"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import { newProducts, bestProducts, productCategories } from "@/lib/siteData";
import CtaBanner from "@/components/CtaBanner";

const allProducts = [
  ...newProducts.map((p) => ({ ...p, badge: "NEW" as const })),
  ...bestProducts.map((p) => ({ ...p, badge: "BEST" as const })),
];

export default function ProductsPage() {
  const [cat, setCat] = useState("전체");
  const filtered = cat === "전체" ? allProducts : allProducts.filter((p) => p.category === cat);

  return (
    <>
      <Header />
      <PageBanner label="게임기 안내" title="게임기 안내" desc="국내 최다 보유! 스타게임파크의 최신 게임기 라인업을 확인하세요." />
      <div className="bg-[#0d0d1a] border-b border-[#1e1e38] sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-2">
          {productCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                cat === c
                  ? "bg-[#5b6ef5] text-white"
                  : "bg-[#12121f] border border-[#1e1e38] text-[#b0b0cc] hover:border-[#5b6ef5] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-sm text-[#6b6b8a] mb-6">총 {filtered.length}개 제품</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((p) => (
              <div key={`${p.badge}-${p.idx}`} className="group bg-[#12121f] border border-[#1e1e38] rounded-xl overflow-hidden hover:border-[#5b6ef5] transition-all hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold rounded ${
                    p.badge === "NEW" ? "bg-[#5b6ef5] text-white" : "bg-[#f59e0b] text-black"
                  }`}>
                    {p.badge}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-[10px] text-white rounded">{p.category}</span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold mb-1">{p.name}</h4>
                  <p className="text-xs text-[#6b6b8a] mb-3">{p.type}</p>
                  <a
                    href="tel:0222711213"
                    className={`block text-center text-xs py-2 rounded-lg font-semibold transition-colors ${
                      p.badge === "NEW"
                        ? "bg-[#5b6ef530] border border-[#5b6ef5] text-[#5b6ef5] hover:bg-[#5b6ef5] hover:text-white"
                        : "bg-[#f59e0b30] border border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black"
                    }`}
                  >
                    전화문의
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#6b6b8a]">
              <p className="text-lg font-medium mb-2">해당 카테고리 제품이 없습니다</p>
              <p className="text-sm">다른 카테고리를 선택하거나 전화로 문의해 주세요.</p>
            </div>
          )}
          <div className="mt-10 p-6 bg-[#12121f] border border-[#1e1e38] rounded-xl text-center">
            <p className="text-[#b0b0cc] text-sm mb-3">더 많은 제품이 있습니다. 전화로 문의해 주세요.</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              전체 제품 문의 02-2271-1213
            </a>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
