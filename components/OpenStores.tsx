const brands = ["CGV", "메가박스", "롯데시네마", "이마트", "롯데마트", "홈플러스", "테마파크", "리조트"];

export default function OpenStores() {
  return (
    <section id="open" className="py-20 bg-[#111128]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">OPEN STORES</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">오픈 매장 보기</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">스타게임파크와 함께한 성공 매장들을 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 대표 성공 사례 */}
          <div className="relative bg-[#12121f] border border-[#22d3ee]/30 rounded-xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#22d3ee] rounded-t-xl" />
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#22d3ee] bg-[#22d3ee]/10 text-[#22d3ee] text-xs font-bold tracking-wide mb-4">
              대표 성공 사례
            </span>
            <h3 className="text-xl font-black mb-3">메가박스 극장 오락실</h3>
            <p className="text-sm text-[#b0b0cc] leading-relaxed mb-5">
              스타게임파크 메가박스 매장은 오락실 창업 시 가장 지속적인 매출을 보여주는 극장 오락실입니다.
              꾸준한 매출과 특히 방학·연휴 기간에는 뛰어난 성과를 냅니다.
            </p>
            <ul className="space-y-2">
              {["코인노래방 · 특수 게임기 · 인형뽑기 복합 구성", "가족단위 고객 집중 유치", "방학·연휴 피크 매출 극대화"].map((t, i) => (
                <li key={i} className="text-sm text-[#b0b0cc] flex items-center gap-2">
                  <span className="text-[#22d3ee] font-bold">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 납품처 */}
          <div className="bg-[#12121f] border border-[#1e1e38] rounded-xl p-8">
            <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-4">주요 납품 · 거래처</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {brands.map((b) => (
                <div
                  key={b}
                  className="bg-[#0d0d1a] border border-[#1e1e38] rounded-lg py-2 text-center text-xs font-medium text-[#b0b0cc] hover:border-[#5b6ef5] hover:text-[#5b6ef5] transition-colors"
                >
                  {b}
                </div>
              ))}
            </div>
            <a
              href="tel:0222711213"
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg text-sm transition-colors"
            >
              오픈 매장 상담 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
