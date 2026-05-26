import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const tabs = [
  { label: "창업안내", href: "/franchise" },
  { label: "창업비용 안내", href: "/franchise/cost" },
];

const steps = [
  {
    num: "01",
    title: "전화 또는 방문 상담",
    desc: "전화 또는 방문 상담을 요청하시면 현장 미팅과 실사를 합니다. 본사에서 현장 방문 후 최적의 제품으로 제품 선정을 도와 드립니다.",
    tag: "무료 상담",
  },
  {
    num: "02",
    title: "상권 분석 및 계약",
    desc: "상권 분석 및 견적 작성 후 계약서 작성을 하고 바로 인테리어 공사에 들어갑니다. 인테리어는 예비 창업 사장님께서 직접 하셔도 되고, 스타게임파크 협력업체에서 최저가로 도와 드립니다.",
    tag: "무료 상권분석",
  },
  {
    num: "03",
    title: "기존 매장 철거 및 전기 공사",
    desc: "기존 매장 철거 및 전기 공사를 합니다. 특히 2층 또는 지하의 경우 소방법에 따라 충실히 해야 인허가에 있어서 무난하게 진행이 될 수 있습니다.",
    tag: "전문 시공",
  },
  {
    num: "04",
    title: "게임기 설치 및 테스트",
    desc: "매장의 그랜드 오픈 예정일에 맞추어 게임기를 설치 및 테스트 합니다.",
    tag: "운영 교육",
  },
  {
    num: "05",
    title: "매장 오픈",
    desc: "제품 설치 및 테스트 이후 매장 오픈과 동시에 영업을 시작합니다. 오픈 이후에도 지속적인 사후관리를 드립니다.",
    tag: "그랜드 오픈",
  },
];

export default function FranchisePage() {
  return (
    <>
      <Header />
      <PageBanner label="Founding Guide" title="창업안내" desc="막상하려니 어려운 오락실 창업? 스타게임파크가 쉽게 도와드립니다!" />
      <SubNav tabs={tabs} current="/franchise" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              고민 많으시죠?<br />
              오락실 창업 이제 쉽게 할 수 있습니다!
            </h2>
            <p className="text-[#b0b0cc] leading-relaxed">
              스타게임파크가 오락실 창업을 쉽게 할 수 있도록 안내 해 드립니다!
              다년간의 노하우와 경험으로 누구나 쉽게 할 수 있는 창업 시스템을 구축하였습니다.
            </p>
          </div>

          {/* 창업 절차 */}
          <div className="max-w-2xl mx-auto space-y-3">
            {steps.map((s, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 text-center">
                    <span className="font-black text-5xl text-[#5b6ef5] leading-none">{s.num}</span>
                  </div>
                  <div className="flex-1 bg-[#12121f] border border-[#1e1e38] rounded-xl p-5 hover:border-[#5b6ef5] transition-colors">
                    <h3 className="font-bold text-base mb-2">{s.title}</h3>
                    <p className="text-sm text-[#b0b0cc] leading-relaxed mb-3">{s.desc}</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#5b6ef5] bg-[#5b6ef530] text-[#5b6ef5] text-xs font-bold">
                      {s.tag}
                    </span>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="ml-8 w-px h-3 bg-[#5b6ef5]/40" />}
              </div>
            ))}
          </div>

          {/* 오락실 예시 도면 */}
          <div className="mt-16">
            <h3 className="text-xl font-black mb-6 text-center">오락실 예시 도면</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#12121f] border border-[#1e1e38] rounded-xl p-6 text-center">
                <div className="w-full h-48 bg-[#1a1a2e] rounded-lg mb-3 flex items-center justify-center text-[#6b6b8a] text-sm">
                  오락실 예시 도면 전면부
                </div>
                <p className="text-sm text-[#b0b0cc]">전면부 배치도</p>
              </div>
              <div className="bg-[#12121f] border border-[#1e1e38] rounded-xl p-6 text-center">
                <div className="w-full h-48 bg-[#1a1a2e] rounded-lg mb-3 flex items-center justify-center text-[#6b6b8a] text-sm">
                  오락실 예시 도면 내부
                </div>
                <p className="text-sm text-[#b0b0cc]">내부 배치도</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-[#12121f] border border-[#1e1e38] rounded-xl">
            <h3 className="text-xl font-black mb-2">이상 스타게임파크와 함께하는</h3>
            <h3 className="text-xl font-black text-[#5b6ef5] mb-5">오락실 창업 쉽게 하기! 입니다.</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
                무료창업상담 02-2271-1213
              </a>
              <Link href="/franchise/cost" className="inline-flex items-center gap-2 px-8 py-4 border border-[#5b6ef5] text-[#5b6ef5] hover:bg-[#5b6ef530] font-bold rounded-lg transition-all">
                창업비용 확인하기
              </Link>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
