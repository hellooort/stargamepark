export default function Footer() {
  return (
    <footer className="bg-[#07070e] border-t border-[#1e1e38]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 mb-10">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#f59e0b] text-xl">★</span>
              <span className="font-black tracking-wider text-lg uppercase">
                STAR<span className="text-[#5b6ef5]">GAME</span>PARK
              </span>
            </div>
            <p className="text-sm text-[#6b6b8a]">성공적인 오락실 창업의 시작</p>
            <p className="text-sm text-[#6b6b8a] mt-1">오락실 창업전문 스타게임파크</p>
          </div>

          {/* 링크들 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-white tracking-wider uppercase mb-3">빠른 메뉴</h5>
              {["#about:창업성공 포인트","#benefits:창업혜택","#products:보유기기","#process:창업절차","#faq:자주하는 질문"].map(item => {
                const [href, label] = item.split(":");
                return <a key={href} href={href} className="block text-sm text-[#6b6b8a] hover:text-[#5b6ef5] transition-colors">{label}</a>;
              })}
            </div>
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-white tracking-wider uppercase mb-3">연락처</h5>
              <a href="tel:0222711213" className="block text-sm text-[#6b6b8a] hover:text-[#5b6ef5] transition-colors">TEL: 02-2271-1213</a>
              <a href="tel:0222655210" className="block text-sm text-[#6b6b8a]">FAX: 02-2265-5210</a>
              <a href="mailto:stargamepark@naver.com" className="block text-sm text-[#6b6b8a] hover:text-[#5b6ef5] transition-colors">stargamepark@naver.com</a>
            </div>
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-white tracking-wider uppercase mb-3">회사정보</h5>
              {["대표: 윤지훈","사업자: 104-06-23796","통신판매: 2011-서울중구-0388","서울 중구 을지로 157 대림상가 263~4호"].map((t, i) => (
                <p key={i} className="text-sm text-[#6b6b8a]">{t}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e1e38] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b6b8a]">
          <span>© 2024 STARGAMEPARK. All rights reserved.</span>
          <span>무료창업상담 <a href="tel:0222711213" className="text-[#5b6ef5] hover:underline">02-2271-1213</a></span>
        </div>
      </div>
    </footer>
  );
}
