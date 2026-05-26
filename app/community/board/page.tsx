import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";

const tabs = [
  { label: "오락실 창업 사례", href: "/community" },
  { label: "창업 문의 사항 (FAQ)", href: "/community/faq" },
  { label: "커뮤니티 게시판", href: "/community/board" },
];

export default function BoardPage() {
  return (
    <>
      <Header />
      <PageBanner label="커뮤니티" title="커뮤니티 게시판" desc="스타게임파크 커뮤니티 게시판입니다." />
      <SubNav tabs={tabs} current="/community/board" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-20 h-20 rounded-full bg-[#12121f] border border-[#1e1e38] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#6b6b8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-black mb-3">커뮤니티 게시판</h3>
            <p className="text-[#b0b0cc] text-sm mb-6">창업 관련 자유로운 질문과 의견을 나눌 수 있는 게시판입니다.<br />창업 문의는 전화나 상담 폼을 이용해 주세요.</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-3 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              창업 문의 02-2271-1213
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
