"use client";

import { useState } from "react";

const faqs = [
  {
    q: "오락실 창업 상담은 어떻게 하나요?",
    a: "전화(02-2271-1213) 또는 홈페이지 문의 폼을 통해 무료 창업 상담을 신청하실 수 있습니다. 희망 지역, 예산, 평형대를 알려주시면 더욱 정확한 상담이 가능합니다. 방문 상담도 언제든지 환영합니다.",
  },
  {
    q: "지하 1층이나 지상 2층도 창업이 가능한가요?",
    a: "네, 가능합니다. 지하 1층, 지상 2층 이상의 매장도 상권과 입지에 따라 충분히 성공적인 창업이 가능합니다. 다만 청소년게임제공업 허가 조건(학교 200m 이내 불가 등)을 사전에 반드시 확인해야 합니다. 스타게임파크에서 허가 조건 확인을 무료로 지원해 드립니다.",
  },
  {
    q: "직접 방문 상담은 어떻게 받을 수 있나요?",
    a: "서울 중구 을지로 157 대림상가 263~4호(을지로4가)에 위치한 스타게임파크 본사로 방문하시면 됩니다. 방문 전 전화(02-2271-1213)로 미리 연락 주시면 전담 컨설턴트가 준비하여 더욱 알차게 상담해 드립니다.",
  },
  {
    q: "오락실 창업 없이 여유 공간에 기기만 몇 대 설치할 수 있나요?",
    a: "네, 가능합니다. 카페, 편의점, 쇼핑몰, 식당 등 여유 공간에 소수의 기기를 설치하는 부분 창업도 지원합니다. 상황에 맞는 최적의 기기 구성을 추천해 드리니 상담을 통해 알아보세요.",
  },
  {
    q: "개인적으로 기기를 구매하거나 AS를 받을 수 있나요?",
    a: "개인 구매 및 AS 모두 가능합니다. 전화(02-2271-1213)로 문의 주시면 안내해 드립니다. 전국 AS 네트워크를 통해 신속하게 처리해 드립니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">자주 하시는 질문</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">창업을 준비하시면서 가장 많이 물어보시는 질문들을 정리했습니다</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-[#12121f] border rounded-xl overflow-hidden transition-colors ${
                open === i ? "border-[#5b6ef5]" : "border-[#1e1e38]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-sm hover:bg-[#1a1a2e] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <svg
                  className={`shrink-0 w-5 h-5 transition-transform duration-300 text-[#6b6b8a] ${
                    open === i ? "rotate-180 text-[#5b6ef5]" : ""
                  }`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-[#b0b0cc] leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
