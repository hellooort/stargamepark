import Link from "next/link";
import { newProducts, bestProducts, openStores } from "@/lib/siteData";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import Header from "@/components/Header";

const BASE = "http://stargamepark.com";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="hero-grid-bg absolute inset-0" />
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#5b6ef5] opacity-20 blur-[100px] -top-48 -right-36 pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#8b5cf6] opacity-15 blur-[80px] bottom-0 -left-24 pointer-events-none" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold tracking-widest uppercase mb-6">
              오락실 창업전문 No.1 · SINCE 1999
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
              성공적인 오락실 창업,<br />
              <span className="text-[#5b6ef5]">스타게임파크</span>와 함께
            </h1>
            <p className="text-[#b0b0cc] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              20년 노하우 · 가맹비 무료 · 철저한 상권분석 · 완벽한 AS 네트워크<br />
              국내 최다 제품 보유 · 최저가 창업
            </p>
            <div className="flex flex-wrap gap-3 mb-14">
              <a href="tel:0222711213" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg text-base transition-all hover:-translate-y-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                무료창업상담 02-2271-1213
              </a>
              <Link href="/franchise" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-[#5b6ef5] hover:text-[#5b6ef5] text-white font-bold rounded-lg text-base transition-all">
                창업절차 보기
              </Link>
            </div>
            {/* 통계 */}
            <div className="inline-flex flex-wrap items-center bg-[#12121f] border border-[#1e1e38] rounded-xl px-6 py-4 gap-0">
              {[
                { num: "1999", unit: "년", label: "창업" },
                { num: "20", unit: "년+", label: "업계 경력" },
                { num: "0", unit: "원", label: "가맹비" },
                { num: "36", unit: "개+", label: "오픈 매장" },
              ].map((s, i) => (
                <div key={i} className="flex items-stretch">
                  {i > 0 && <div className="w-px h-10 bg-[#1e1e38] mx-4 my-auto" />}
                  <div className="flex flex-col items-center gap-0.5 px-2">
                    <span className="font-black text-2xl md:text-3xl leading-none text-white">
                      {s.num}<span className="text-base text-[#5b6ef5]">{s.unit}</span>
                    </span>
                    <span className="text-xs text-[#6b6b8a] font-medium">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b8a] text-xs tracking-widest z-10">
            <span>SCROLL</span>
            <div className="scroll-arrow" />
          </div>
        </section>

        {/* ── 카테고리 퀵메뉴 ── */}
        <section className="bg-[#0d0d1a] border-y border-[#1e1e38] py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {["레이싱게임기","건슈팅게임기","리듬게임기","경품게임기","스포츠게임기","어드벤처게임기","인형뽑기게임기","캐주얼게임기","수출상담문의"].map((c) => (
                <Link key={c} href={`/products?cat=${c.replace("게임기","").replace("상담문의","")}`}
                  className="px-4 py-2 bg-[#12121f] border border-[#1e1e38] rounded-lg text-sm text-[#b0b0cc] hover:border-[#5b6ef5] hover:text-[#5b6ef5] transition-colors">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 창업성공 포인트 ── */}
        <section className="py-20 bg-[#07070e]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">창업성공 포인트</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">스타게임파크를 선택해야 하는 이유</h2>
              <p className="text-[#b0b0cc] max-w-lg mx-auto">제품 최다 보유 · 국내 최저가 판매 · 완벽한 AS 네트워크 · 철저한 사후관리</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "가맹비 무료", desc: "별도 가맹비 없이 창업 가능. 간판 시안 및 상호 무료 사용 지원", accent: true },
                { title: "국내 최저가", desc: "제품 최다 보유·직거래 시스템으로 동일 품질 국내 최저가 보장" },
                { title: "철저한 상권분석", desc: "20년 데이터 기반 상권분석. 후보지 허가조건 사전 확인 서비스" },
                { title: "완벽한 AS", desc: "전국 AS 네트워크 구축. 신속한 기기 수리 및 유지보수 지원" },
                { title: "창업 컨설팅", desc: "전담 컨설턴트가 처음부터 끝까지. 인테리어·허가·운영 원스톱 지원" },
                { title: "게임기 수출입", desc: "일본 TAITO 등 현지 직거래로 유통 거품 없는 최저가 제품 공급" },
              ].map((p, i) => (
                <div key={i} className={`relative rounded-xl p-7 border hover:-translate-y-1 transition-all ${p.accent ? "bg-[#1a1a2e] border-[#5b6ef5]" : "bg-[#12121f] border-[#1e1e38] hover:border-[#5b6ef5]"}`}>
                  {p.accent && <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl bg-[#5b6ef5]" />}
                  <h3 className="font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-[#b0b0cc] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 오픈 매장 슬라이드 ── */}
        <section className="py-20 bg-[#111128]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-2">OPEN STORES</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">오픈 매장 · 총 36개점</h2>
              </div>
              <Link href="/open" className="text-sm text-[#5b6ef5] hover:underline">전체보기 →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {openStores.slice(0, 10).map((s) => (
                <Link key={s.idx} href="/open" className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#1e1e38] hover:border-[#5b6ef5] transition-colors">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-xs font-semibold text-white truncate">{s.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 창업절차 ── */}
        <section className="py-20 bg-[#07070e]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">STARTUP PROCESS</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">게임파크 창업절차 안내</h2>
              <p className="text-[#b0b0cc] max-w-lg mx-auto">최저가 창업절차로 빠르고 안정적인 오픈을 도와드립니다</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { num: "01", t: "유선상담\n방문상담" },
                { num: "02", t: "상권분석\n제품선정" },
                { num: "03", t: "계약서 작성\n계약금 결제" },
                { num: "04", t: "인테리어\n전기·소방공사" },
                { num: "05", t: "제품설치\n테스트" },
                { num: "06", t: "그랜드\n오픈" },
              ].map((s, i) => (
                <div key={i} className="relative bg-[#12121f] border border-[#1e1e38] rounded-xl p-5 text-center hover:border-[#5b6ef5] transition-colors group">
                  <div className="font-black text-4xl text-[#5b6ef5] mb-3 leading-none">{s.num}</div>
                  <p className="text-sm font-semibold whitespace-pre-line leading-snug">{s.t}</p>
                  {i < 5 && <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#5b6ef5]/40 text-lg z-10">→</div>}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/franchise" className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
                창업 가이드 자세히 보기
              </Link>
            </div>
          </div>
        </section>

        {/* ── 신제품 ── */}
        <section className="py-20 bg-[#0d0d1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-2">NEW PRODUCT</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">스타게임파크 신제품</h2>
              </div>
              <Link href="/products" className="text-sm text-[#5b6ef5] hover:underline">전체보기 →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {newProducts.slice(0, 12).map((p) => (
                <Link key={p.idx} href="/products" className="group bg-[#12121f] border border-[#1e1e38] rounded-xl overflow-hidden hover:border-[#5b6ef5] transition-all hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#5b6ef5] text-white text-[10px] font-bold rounded">NEW</span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold truncate mb-0.5">{p.name}</h4>
                    <p className="text-xs text-[#6b6b8a] truncate">{p.type}</p>
                    <a href="tel:0222711213" className="mt-2 block text-center text-xs py-1.5 bg-[#1e1e38] hover:bg-[#5b6ef5] text-[#b0b0cc] hover:text-white rounded transition-colors">
                      전화문의
                    </a>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── 베스트 ── */}
            <div className="flex items-end justify-between mt-16 mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-[#f59e0b] uppercase mb-2">BEST PRODUCT</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">스타게임파크 베스트상품</h2>
              </div>
              <Link href="/products" className="text-sm text-[#f59e0b] hover:underline">전체보기 →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bestProducts.slice(0, 12).map((p) => (
                <Link key={p.idx} href="/products" className="group bg-[#12121f] border border-[#1e1e38] rounded-xl overflow-hidden hover:border-[#f59e0b] transition-all hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#f59e0b] text-black text-[10px] font-bold rounded">BEST</span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold truncate mb-0.5">{p.name}</h4>
                    <p className="text-xs text-[#6b6b8a] truncate">{p.type}</p>
                    <a href="tel:0222711213" className="mt-2 block text-center text-xs py-1.5 bg-[#1e1e38] hover:bg-[#f59e0b] text-[#b0b0cc] hover:text-black rounded transition-colors">
                      전화문의
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ 미리보기 + 공지사항 ── */}
        <section className="py-20 bg-[#111128]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FAQ */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">Questions and answers</p>
              <h3 className="text-2xl font-black mb-5">자주하시는 질문</h3>
              <div className="space-y-2">
                {[
                  "오락실 창업 상담을 하고 싶습니다.",
                  "오락실 창업을 하려고 하는데 지하1층이나 지상 2층도 괜찮은가요?",
                  "직접 만나서 상담을 받고 싶습니다. 어떻게 해야 하나요?",
                  "오락실 창업은 아니지만 여유 공간에 제품을 몇 대 정도 설치하고 싶습니다.",
                  "개인적으로 구매를 하거나 AS를 받고 싶습니다.",
                ].map((q, i) => (
                  <Link key={i} href="/community/faq" className="flex items-center gap-3 p-4 bg-[#12121f] border border-[#1e1e38] rounded-lg hover:border-[#5b6ef5] transition-colors group">
                    <span className="text-[#5b6ef5] font-bold text-sm shrink-0">Q.</span>
                    <span className="text-sm text-[#b0b0cc] group-hover:text-white transition-colors">{q}</span>
                  </Link>
                ))}
              </div>
              <Link href="/community/faq" className="mt-4 block text-sm text-[#5b6ef5] hover:underline">더보기 →</Link>
            </div>
            {/* 공지사항 */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">Notice</p>
              <h3 className="text-2xl font-black mb-5">공지사항</h3>
              <div className="border border-[#1e1e38] rounded-lg overflow-hidden">
                {[
                  "인형뽑기방 창업에 관하여 알려 드립니다.",
                  "게임기 수출에 관하여 알려 드립니다.",
                  "스타게임파크 상호 임의 도용 관련 안내입니다.",
                  "2018년 도쿄 게임쇼 JAEPO 참관 및 본사 휴무 공지 안내",
                  "최고의 히트작! 스마트스메이커 신제품 출시 안내",
                ].map((n, i) => (
                  <Link key={i} href="/contact" className={`flex items-center gap-4 px-5 py-4 hover:bg-[#12121f] transition-colors group ${i < 4 ? "border-b border-[#1e1e38]" : ""}`}>
                    <span className="px-2 py-0.5 text-xs border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] rounded shrink-0">공지</span>
                    <span className="text-sm text-[#b0b0cc] group-hover:text-white transition-colors flex-1 truncate">{n}</span>
                    <span className="text-xs text-[#6b6b8a]">→</span>
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="mt-4 block text-sm text-[#5b6ef5] hover:underline">더보기 →</Link>
            </div>
          </div>
        </section>

        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
