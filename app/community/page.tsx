import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import Link from "next/link";

const tabs = [
  { label: "오락실 창업 사례", href: "/community" },
  { label: "창업 문의 사항 (FAQ)", href: "/community/faq" },
  { label: "커뮤니티 게시판", href: "/community/board" },
];

const cases = [
  { title: "오락실 창업 상담을 하고 싶습니다.", date: "" },
  { title: "오락실 창업을 하려고 하는데 지하1층이나 지상 2층도 괜찮은가요?", date: "" },
  { title: "직접 만나서 상담을 받고 싶습니다. 어떻게 해야 하나요?", date: "" },
  { title: "오락실 창업은 아니지만 여유 공간에 제품을 몇 대 정도 구매해서 설치하고 싶습니다.", date: "" },
  { title: "개인적으로 구매를 하거나 AS를 받고 싶습니다.", date: "" },
];

export default function CommunityPage() {
  return (
    <>
      <Header />
      <PageBanner label="커뮤니티" title="오락실 창업 사례" desc="스타게임파크와 함께한 창업 사례를 확인하세요." />
      <SubNav tabs={tabs} current="/community" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black">오락실 창업 사례</h2>
          </div>
          <div className="border border-[#1e1e38] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] bg-[#12121f] border-b border-[#1e1e38] px-6 py-3 text-xs font-bold text-[#6b6b8a] uppercase tracking-wider">
              <span>제목</span>
              <span>날짜</span>
            </div>
            {cases.map((c, i) => (
              <div key={i} className={`grid grid-cols-[1fr_auto] px-6 py-5 hover:bg-[#12121f] cursor-pointer transition-colors group ${i < cases.length - 1 ? "border-b border-[#1e1e38]" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-6 h-6 rounded bg-[#5b6ef530] border border-[#5b6ef5] text-[#5b6ef5] text-xs font-bold flex items-center justify-center">{i+1}</span>
                  <span className="text-sm group-hover:text-white transition-colors">{c.title}</span>
                </div>
                <span className="text-xs text-[#6b6b8a] self-center">-</span>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-[#12121f] border border-[#1e1e38] rounded-xl text-center">
            <p className="text-[#b0b0cc] mb-4">오락실 창업에 대해 궁금한 점이 있으신가요?</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              무료창업상담 02-2271-1213
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
