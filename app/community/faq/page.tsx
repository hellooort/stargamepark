"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";

const tabs = [
  { label: "오락실 창업 사례", href: "/community" },
  { label: "창업 문의 사항 (FAQ)", href: "/community/faq" },
  { label: "커뮤니티 게시판", href: "/community/board" },
];

const faqs = [
  {
    q: "오락실 창업 상담을 하고 싶습니다.",
    a: "전화(02-2271-1213) 또는 홈페이지 문의 폼을 통해 무료 창업 상담을 신청하실 수 있습니다. 희망 지역, 예산, 평형대를 알려주시면 더욱 정확한 상담이 가능합니다. 방문 상담도 언제든지 환영합니다.",
  },
  {
    q: "오락실 창업을 하려고 하는데 지하1층이나 지상 2층도 괜찮은가요?",
    a: "네, 가능합니다. 지하 1층, 지상 2층 이상의 매장도 상권과 입지에 따라 충분히 성공적인 창업이 가능합니다. 다만 청소년게임제공업 허가 조건(학교 200m 이내 불가 등)을 사전에 반드시 확인해야 합니다. 스타게임파크에서 허가 조건 확인을 무료로 지원해 드립니다.",
  },
  {
    q: "직접 만나서 상담을 받고 싶습니다. 어떻게 해야 하나요?",
    a: "서울 중구 을지로 157 대림상가 263~4호(을지로4가)에 위치한 스타게임파크 본사로 방문하시면 됩니다. 방문 전 전화(02-2271-1213)로 미리 연락 주시면 전담 컨설턴트가 준비하여 더욱 알차게 상담해 드립니다.",
  },
  {
    q: "오락실 창업은 아니지만 여유 공간에 제품을 몇 대 정도 구매해서 설치하고 싶습니다.",
    a: "네, 가능합니다. 카페, 편의점, 쇼핑몰, 식당 등 여유 공간에 소수의 기기를 설치하는 부분 창업도 지원합니다. 상황에 맞는 최적의 기기 구성을 추천해 드리니 상담을 통해 알아보세요.",
  },
  {
    q: "개인적으로 구매를 하거나 AS를 받고 싶습니다.",
    a: "개인 구매 및 AS 모두 가능합니다. 전화(02-2271-1213)로 문의 주시면 안내해 드립니다. 전국 AS 네트워크를 통해 신속하게 처리해 드립니다.",
  },
  {
    q: "게임기 수출도 가능한가요?",
    a: "네, 가능합니다. 스타게임파크는 인도네시아 자카르타 등 해외 수출 경험이 있으며, 일본 TAITO 사와도 업무 제휴를 체결한 바 있습니다. 수출 관련 문의는 전화나 이메일(stargamepark@naver.com)로 연락 주시면 자세히 안내해 드립니다.",
  },
  {
    q: "창업 후 사후관리는 어떻게 되나요?",
    a: "전국 AS 네트워크를 구축하고 있으며, 오픈 이후에도 지속적인 운영 노하우 및 마케팅 지원을 제공합니다. 기기 고장 시 신속한 수리 및 부품 교체 서비스를 제공합니다.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <Header />
      <PageBanner label="커뮤니티" title="창업 문의 사항" desc="자주 물어보시는 질문들을 정리했습니다." />
      <SubNav tabs={tabs} current="/community/faq" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className={`bg-[#12121f] border rounded-xl overflow-hidden transition-colors ${open === i ? "border-[#5b6ef5]" : "border-[#1e1e38]"}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-sm hover:bg-[#1a1a2e] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="flex gap-3 items-start"><span className="text-[#5b6ef5] font-black shrink-0">Q.</span>{f.q}</span>
                  <svg className={`shrink-0 w-5 h-5 transition-transform duration-300 text-[#6b6b8a] ${open === i ? "rotate-180 text-[#5b6ef5]" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60" : "max-h-0"}`}>
                  <div className="flex gap-3 px-6 pb-5 pt-0">
                    <span className="text-[#22d3ee] font-black shrink-0">A.</span>
                    <p className="text-sm text-[#b0b0cc] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#b0b0cc] text-sm mb-4">더 궁금한 점이 있으시면 직접 문의해 주세요.</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              무료상담 02-2271-1213
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
