const points = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "가맹비 무료",
    desc: "창업 시 별도의 가맹비가 없습니다. 간판 시안 및 상호 무료 사용으로 초기 비용 부담을 최소화합니다.",
    featured: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    title: "철저한 상권분석",
    desc: "20년 이상 축적된 노하우로 최적의 입지를 선정합니다. 실패 없는 창업을 위한 데이터 기반 상권 분석.",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "국내 최저가 판매",
    desc: "제품 최다 보유·직거래 시스템으로 국내 최저가를 보장합니다. 동일 품질 최저 비용 창업 가능.",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "완벽한 AS 네트워크",
    desc: "전국 완벽한 AS 네트워크 구축. 신속한 사후 관리로 안정적인 매장 운영을 지원합니다.",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "창업 컨설팅 전담",
    desc: "전담 창업 컨설턴트가 처음부터 끝까지 함께합니다. 인테리어, 허가, 운영까지 원스톱 지원.",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "고수익 창업 보장",
    desc: "검증된 창업 모델과 트렌디한 제품 라인업으로 높은 수익률을 실현합니다.",
    featured: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">WHY STARGAMEPARK</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">창업 성공 포인트</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">스타게임파크만의 차별화된 창업 시스템으로 성공의 지름길을 열어드립니다</p>
        </div>

        {/* 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-xl p-7 border transition-all duration-200 group hover:-translate-y-1 ${
                p.featured
                  ? "bg-[#1a1a2e] border-[#5b6ef5]"
                  : "bg-[#12121f] border-[#1e1e38] hover:border-[#5b6ef5]"
              }`}
            >
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl bg-[#5b6ef5]" />
              )}
              <div className="w-14 h-14 rounded-lg bg-[#5b6ef530] border border-[#5b6ef5] flex items-center justify-center text-[#5b6ef5] mb-5">
                {p.icon}
              </div>
              <h3 className="text-base font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-[#b0b0cc] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
