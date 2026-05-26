const benefits = [
  { num: "01", title: "가맹비 없음", desc: "별도 가맹비 없이 창업 가능. 간판 시안 및 상호 무료 사용 지원" },
  { num: "02", title: "최저가 창업", desc: "국내 최다 제품 보유로 동일 품질 최저가 공급. 직거래 시스템 운영" },
  { num: "03", title: "철저한 상권분석", desc: "20년 데이터 기반 상권 분석. 후보지 허가 조건 사전 확인 서비스" },
  { num: "04", title: "인테리어 지원", desc: "간판 디자인부터 매장 레이아웃까지 인테리어 전반 지원 및 컨설팅" },
  { num: "05", title: "완벽한 AS", desc: "전국 AS 네트워크 구축. 신속한 기기 수리 및 유지보수 지원" },
  { num: "06", title: "창업 후 사후관리", desc: "오픈 이후에도 지속적인 운영 노하우 및 마케팅 지원 제공" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-[#07070e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">창업혜택</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">스타게임파크와 함께하면 이런 혜택을 받으실 수 있습니다</p>
        </div>

        <div className="border border-[#1e1e38] rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`flex gap-4 p-7 hover:bg-[#1a1a2e] transition-colors group
                  ${i % 3 !== 2 ? "lg:border-r border-[#1e1e38]" : ""}
                  ${i % 2 !== 1 ? "md:border-r lg:border-r-0 border-[#1e1e38]" : ""}
                  ${Math.floor(i / 3) < 1 ? "lg:border-b border-[#1e1e38]" : ""}
                  ${Math.floor(i / 2) < 2 ? "md:border-b lg:border-b-0 border-[#1e1e38]" : ""}
                  border-b lg:border-b-0 [&:nth-child(6)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(4)]:border-b-0
                `}
              >
                <span className="font-black text-4xl text-[#1e1e38] group-hover:text-[#5b6ef5] transition-colors shrink-0 leading-none pt-1">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-bold text-base mb-1.5">{b.title}</h3>
                  <p className="text-sm text-[#b0b0cc] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
