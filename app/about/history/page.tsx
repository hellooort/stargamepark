import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import { history } from "@/lib/siteData";

const tabs = [
  { label: "대표자 인사말", href: "/about" },
  { label: "연혁", href: "/about/history" },
  { label: "찾아오시는 길", href: "/about/location" },
];

export default function HistoryPage() {
  return (
    <>
      <Header />
      <PageBanner label="ABOUT US" title="연혁" desc="1999년부터 이어온 스타게임파크의 발자취입니다." />
      <SubNav tabs={tabs} current="/about/history" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-2">StarGamePark only for the best games</p>
            <h2 className="text-3xl md:text-4xl font-black">FOUNDED IN 1999</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {history.map((h, i) => (
              <div key={i} className="flex gap-6 mb-6">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#5b6ef530] border-2 border-[#5b6ef5] flex items-center justify-center font-black text-[#5b6ef5] text-sm">
                    {h.year}
                  </div>
                  {i < history.length - 1 && <div className="w-px flex-1 bg-[#1e1e38] mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="font-black text-xl mb-3">{h.year}년</h3>
                  <div className="space-y-2">
                    {h.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 p-3 bg-[#12121f] border border-[#1e1e38] rounded-lg">
                        <span className="text-[#5b6ef5] font-bold mt-0.5">·</span>
                        <span className="text-sm text-[#b0b0cc]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
