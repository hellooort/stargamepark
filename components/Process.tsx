const steps = [
  {
    num: "01",
    title: "유선상담 · 방문상담",
    desc: "전화 또는 방문을 통해 창업 목표, 예산, 희망 지역 등 상세 상담을 진행합니다.",
    tag: "무료 상담",
  },
  {
    num: "02",
    title: "상권분석 · 제품선정",
    desc: "20년 데이터 기반으로 최적 입지를 선정하고, 상권에 맞는 게임기를 선별합니다.",
    tag: "무료 제공",
  },
  {
    num: "03",
    title: "계약서 작성 · 계약금 결제",
    desc: "기기 종류 확정 후 계약을 체결합니다. 투명한 계약으로 신뢰를 드립니다.",
    tag: "최저가 보장",
  },
  {
    num: "04",
    title: "인테리어 · 전기 · 소방 공사",
    desc: "허가 사항 확인 후 전기, 소방, 간판 시공까지 원스톱으로 진행합니다.",
    tag: "전문 시공",
  },
  {
    num: "05",
    title: "제품 설치 · 테스트",
    desc: "게임기 설치 및 소프트웨어 세팅, 운영 교육을 완벽하게 진행합니다.",
    tag: "운영 교육",
  },
  {
    num: "06",
    title: "그랜드 오픈",
    desc: "정식 오픈 후에도 지속적인 AS 및 사후관리로 안정적인 운영을 지원합니다.",
    tag: "사후 관리",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">STARTUP PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">창업절차 안내</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">체계적인 6단계 프로세스로 빠르고 안정적인 창업을 지원합니다</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="flex gap-6 items-start group">
                {/* 번호 */}
                <div className="shrink-0 w-16 text-center">
                  <span className="font-black text-5xl text-[#5b6ef5] leading-none">{s.num}</span>
                </div>
                {/* 내용 */}
                <div className="flex-1 bg-[#12121f] border border-[#1e1e38] rounded-xl p-5 hover:border-[#5b6ef5] transition-colors">
                  <h3 className="font-bold text-base mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#b0b0cc] leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold">
                    {s.tag}
                  </span>
                </div>
              </div>
              {/* 연결선 */}
              {i < steps.length - 1 && (
                <div className="ml-8 w-px h-3 bg-[#5b6ef5]/40" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:0222711213"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg text-base transition-all hover:-translate-y-0.5"
          >
            지금 바로 창업상담 시작하기
          </a>
        </div>
      </div>
    </section>
  );
}
