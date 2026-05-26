import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";

const tabs = [
  { label: "대표자 인사말", href: "/about" },
  { label: "연혁", href: "/about/history" },
  { label: "찾아오시는 길", href: "/about/location" },
];

export default function LocationPage() {
  return (
    <>
      <Header />
      <PageBanner label="ABOUT US" title="찾아오시는 길" desc="스타게임파크 본사 위치 안내입니다." />
      <SubNav tabs={tabs} current="/about/location" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 지도 (카카오맵 임베드) */}
            <div className="rounded-xl overflow-hidden border border-[#1e1e38] aspect-video bg-[#12121f] flex items-center justify-center">
              <iframe
                src="https://map.kakao.com/link/map/스타게임파크,37.5675,126.9956"
                width="100%" height="100%"
                title="스타게임파크 위치"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            {/* 주소 정보 */}
            <div className="space-y-5">
              <h2 className="text-2xl font-black mb-4">본사 위치 안내</h2>
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: "주소",
                  value: "서울특별시 중구 을지로 157 대림상가 라열 263~4호 (을지로4가)",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  label: "전화",
                  value: "02-2271-1213",
                  href: "tel:0222711213",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07"/><path d="M22 16.92v3"/>
                    </svg>
                  ),
                  label: "팩스",
                  value: "02-2265-5210",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "이메일",
                  value: "stargamepark@naver.com",
                  href: "mailto:stargamepark@naver.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-5 bg-[#12121f] border border-[#1e1e38] rounded-xl">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-[#5b6ef530] border border-[#5b6ef5] flex items-center justify-center text-[#5b6ef5]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#6b6b8a] font-medium mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-[#5b6ef5] hover:underline">{item.value}</a>
                    ) : (
                      <p className="text-sm text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              {/* 오시는 방법 */}
              <div className="p-5 bg-[#12121f] border border-[#1e1e38] rounded-xl">
                <h4 className="font-bold mb-3">지하철로 오시는 방법</h4>
                <ul className="space-y-2 text-sm text-[#b0b0cc]">
                  <li className="flex gap-2"><span className="text-[#5b6ef5] font-bold shrink-0">2호선</span> 을지로4가역 하차 → 도보 5분</li>
                  <li className="flex gap-2"><span className="text-[#5b6ef5] font-bold shrink-0">5호선</span> 을지로4가역 하차 → 도보 5분</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
