const newProducts = [
  { name: "멀티컬러", type: "MULTI COLOR" },
  { name: "토이즈팝 미니", type: "TOYS POP MINI" },
  { name: "패스트트랙 에보2", type: "FAST TRACK EVO2" },
  { name: "펌프 LX XX", type: "펌프 20주년 버전" },
  { name: "오버테이크 DX", type: "3D 모션 자동차 게임" },
  { name: "스피드라이더3", type: "인기 오토바이 게임" },
  { name: "픽셀크래프트", type: "스포츠 게임" },
  { name: "이니셜D-제로", type: "레이싱 게임기" },
  { name: "아이스맨", type: "물총 게임" },
  { name: "비트앤덩크", type: "인기 농구 게임" },
  { name: "판타지반반", type: "코르크 사격 게임" },
  { name: "패스트트랙 에보", type: "신형 버전" },
];

const bestProducts = [
  { name: "렛츠고정글 DX", type: "추천 게임" },
  { name: "마리오카트2 SD", type: "레이싱 게임기" },
  { name: "타임크라이시스", type: "건 게임" },
  { name: "스위트랜드", type: "경품 게임" },
  { name: "라이징스통 DX", type: "건 게임" },
  { name: "더비시바시", type: "캐주얼 게임" },
  { name: "히든캐치5", type: "캐주얼 게임" },
  { name: "뷰릭스케이스", type: "비디오 게임기" },
  { name: "하우스어브데드", type: "건 게임" },
  { name: "펌프 NX", type: "뮤직 게임" },
  { name: "큰북의 달인", type: "뮤직 게임" },
  { name: "데드스톰파이어", type: "건 게임" },
];

function GameIcon({ accent }: { accent: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth={1.5}>
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <path d="M6 12h4M8 10v4M14 11h.01M17 13h.01"/>
    </svg>
  );
}

function ProductCard({ name, type, badge, badgeColor, iconColor }: {
  name: string; type: string; badge: string;
  badgeColor: string; iconColor: string;
}) {
  return (
    <div className="relative bg-[#12121f] border border-[#1e1e38] rounded-xl p-5 text-center hover:-translate-y-1 hover:border-[#5b6ef5] transition-all group">
      <span className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold ${badgeColor}`}>
        {badge}
      </span>
      <div className={`w-16 h-16 rounded-lg bg-[#0d0d1a] border border-[#1e1e38] flex items-center justify-center mx-auto mb-3`}>
        <GameIcon accent={iconColor} />
      </div>
      <h4 className="text-sm font-bold mb-1">{name}</h4>
      <p className="text-xs text-[#6b6b8a] mb-3">{type}</p>
      <a
        href="tel:0222711213"
        className="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-[#1e1e38] text-xs font-semibold text-[#b0b0cc] hover:bg-[#5b6ef5] hover:text-white transition-colors"
      >
        전화문의
      </a>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* 신제품 */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">NEW PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">스타게임파크 신제품</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">트렌디한 최신 게임기로 고객의 발길을 사로잡으세요</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {newProducts.map((p) => (
            <ProductCard
              key={p.name} name={p.name} type={p.type}
              badge="NEW" badgeColor="bg-[#5b6ef5] text-white"
              iconColor="#5b6ef5"
            />
          ))}
        </div>

        {/* 베스트 */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.15em] text-[#f59e0b] uppercase mb-3">BEST PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">베스트 상품</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">오랜 시간 검증된 스타게임파크 인기 기기</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {bestProducts.map((p) => (
            <ProductCard
              key={p.name} name={p.name} type={p.type}
              badge="BEST" badgeColor="bg-[#f59e0b] text-black"
              iconColor="#f59e0b"
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#6b6b8a] text-sm mb-4">더 많은 제품을 보고 싶으신가요?</p>
          <a href="tel:0222711213" className="inline-flex items-center px-8 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all hover:-translate-y-0.5">
            전체 제품 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
