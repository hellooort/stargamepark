const notices = [
  { tag: "창업안내", title: "인형뽑기방 창업에 관하여 알려 드립니다" },
  { tag: "안내", title: "게임기 수출에 관하여 알려 드립니다" },
  { tag: "중요", title: "스타게임파크 상호 임의 도용 관련 안내" },
  { tag: "일정", title: "도쿄 게임쇼 JAEPO 참관 및 본사 휴무 공지" },
];

export default function Notice() {
  return (
    <section id="notice" className="py-20 bg-[#111128]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">NOTICE</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">공지사항</h2>
        </div>

        <div className="max-w-2xl mx-auto border border-[#1e1e38] rounded-xl overflow-hidden">
          {notices.map((n, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-6 py-5 hover:bg-[#12121f] cursor-pointer transition-colors group ${
                i < notices.length - 1 ? "border-b border-[#1e1e38]" : ""
              }`}
            >
              <span className="shrink-0 px-2.5 py-0.5 border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold rounded">
                {n.tag}
              </span>
              <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors">{n.title}</span>
              <span className="shrink-0 text-sm text-[#6b6b8a] group-hover:text-[#5b6ef5] transition-colors">자세히 보기 →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
