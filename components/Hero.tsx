export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0">
        <div className="hero-grid-bg absolute inset-0" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#5b6ef5] opacity-20 blur-[100px] -top-48 -right-36 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#8b5cf6] opacity-15 blur-[80px] bottom-0 -left-24 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* 배지 */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold tracking-widest uppercase mb-6">
          오락실 창업전문 No.1
        </div>

        {/* 타이틀 */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
          성공적인 오락실 창업,<br />
          <span className="text-[#5b6ef5]">스타게임파크</span>와 함께
        </h1>

        {/* 설명 */}
        <p className="text-[#b0b0cc] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          20년 노하우 · 가맹비 무료 · 철저한 상권분석 · 완벽한 AS 네트워크<br />
          국내 최다 제품 보유 · 최저가 창업
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap gap-3 mb-14">
          <a
            href="tel:0222711213"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg text-base transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            무료창업상담 02-2271-1213
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-[#5b6ef5] hover:text-[#5b6ef5] text-white font-bold rounded-lg text-base transition-all"
          >
            창업절차 보기
          </a>
        </div>

        {/* 통계 */}
        <div className="inline-flex flex-wrap items-center bg-[#12121f] border border-[#1e1e38] rounded-xl px-6 py-4 gap-0">
          {[
            { num: "20", unit: "년+", label: "업계 경력" },
            { num: "0", unit: "원", label: "가맹비" },
            { num: "전국", unit: "", label: "AS 네트워크" },
            { num: "최저가", unit: "", label: "창업 비용" },
          ].map((s, i) => (
            <div key={i} className="flex items-stretch">
              {i > 0 && <div className="w-px h-10 bg-[#1e1e38] mx-4 my-auto" />}
              <div className="flex flex-col items-center gap-0.5 px-2">
                <span className="font-black text-3xl leading-none text-white">
                  {s.num}
                  <span className="text-base text-[#5b6ef5]">{s.unit}</span>
                </span>
                <span className="text-xs text-[#6b6b8a] font-medium">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b8a] text-xs tracking-widest z-10">
        <span>SCROLL</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
