import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

const notices = [
  { tag: "창업안내", title: "인형뽑기방 창업에 관하여 알려 드립니다." },
  { tag: "안내", title: "게임기 수출에 관하여 알려 드립니다." },
  { tag: "중요", title: "스타게임파크 상호 임의 도용 관련 안내입니다." },
  { tag: "일정", title: "2018년 도쿄 게임쇼 JAEPO 참관 및 본사 휴무 공지 안내" },
  { tag: "신제품", title: "최고의 히트작! 스마트스메이커 신제품 출시 안내" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner label="고객상담" title="고객상담" desc="사장님들의 성공적인 창업을 위해 최선을 다하겠습니다." />
      <main className="bg-[#0d0d1a]">
        {/* 공지사항 */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-xl font-black mb-5">공지사항</h2>
          <div className="border border-[#1e1e38] rounded-xl overflow-hidden mb-16">
            {notices.map((n, i) => (
              <div key={i} className={`flex items-center gap-4 px-6 py-5 hover:bg-[#12121f] cursor-pointer transition-colors group ${i < notices.length - 1 ? "border-b border-[#1e1e38]" : ""}`}>
                <span className="shrink-0 px-2.5 py-0.5 border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold rounded">{n.tag}</span>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors">{n.title}</span>
                <span className="shrink-0 text-sm text-[#6b6b8a] group-hover:text-[#5b6ef5] transition-colors">자세히 보기 →</span>
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
