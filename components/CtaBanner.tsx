export default function CtaBanner() {
  return (
    <section className="relative py-20 bg-[#5b6ef5] overflow-hidden">
      <div className="cta-grid-bg absolute inset-0" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          성공적인 오락실 창업,<br />스타게임파크와 함께 시작하세요!
        </h2>
        <p className="text-white/85 text-base leading-relaxed mb-8">
          20년 경력 · 전국 최저가 · 가맹비 없음 — 지금 바로 무료 상담을 신청하세요
        </p>
        <a
          href="tel:0222711213"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5b6ef5] font-black rounded-lg text-base hover:bg-blue-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          무료창업상담 02-2271-1213
        </a>
      </div>
    </section>
  );
}
