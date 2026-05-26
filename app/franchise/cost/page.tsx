import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import CtaBanner from "@/components/CtaBanner";

const tabs = [
  { label: "창업안내", href: "/franchise" },
  { label: "창업비용 안내", href: "/franchise/cost" },
];

const costItems = [
  { item: "가맹비", amount: "없음 (무료)", note: "스타게임파크는 별도 가맹비 없음" },
  { item: "간판 시안 및 상호", amount: "무료", note: "간판 디자인 및 상호 사용 무료 제공" },
  { item: "게임기 구입 비용", amount: "협의", note: "기종 및 수량에 따라 별도 협의 (국내 최저가 보장)" },
  { item: "인테리어 공사비", amount: "협의", note: "매장 규모 및 상황에 따라 협의 (협력업체 최저가 제공)" },
  { item: "전기 공사비", amount: "협의", note: "매장 전력 용량에 따라 달라질 수 있음" },
  { item: "소방 공사비", amount: "협의", note: "건물 유형 및 층에 따라 달라질 수 있음" },
  { item: "허가 비용", amount: "실비", note: "청소년게임제공업 등록 등 법적 허가 비용" },
];

export default function FranchiseCostPage() {
  return (
    <>
      <Header />
      <PageBanner label="Founding Guide" title="창업비용 안내" desc="투명한 비용으로 성공적인 창업을 도와드립니다." />
      <SubNav tabs={tabs} current="/franchise/cost" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* 핵심 혜택 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { num: "0원", label: "가맹비", desc: "별도 가맹비 없음" },
              { num: "무료", label: "간판/상호", desc: "간판 시안 및 상호 무료" },
              { num: "최저가", label: "기기 공급", desc: "국내 최저가 직거래 보장" },
            ].map((b, i) => (
              <div key={i} className="bg-[#1a1a2e] border border-[#5b6ef5] rounded-xl p-7 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#5b6ef5]" />
                <div className="font-black text-4xl text-[#5b6ef5] mb-2">{b.num}</div>
                <div className="font-bold text-lg mb-1">{b.label}</div>
                <div className="text-sm text-[#b0b0cc]">{b.desc}</div>
              </div>
            ))}
          </div>

          {/* 비용 상세 테이블 */}
          <h2 className="text-2xl font-black mb-6">창업 비용 항목별 안내</h2>
          <div className="border border-[#1e1e38] rounded-xl overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-[#5b6ef5] px-6 py-3">
              <span className="text-sm font-bold text-white">항목</span>
              <span className="text-sm font-bold text-white">비용</span>
              <span className="text-sm font-bold text-white">비고</span>
            </div>
            {costItems.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-[#12121f]" : "bg-[#0d0d1a]"} ${i < costItems.length - 1 ? "border-b border-[#1e1e38]" : ""}`}>
                <span className="text-sm font-semibold">{row.item}</span>
                <span className="text-sm font-bold text-[#5b6ef5]">{row.amount}</span>
                <span className="text-sm text-[#b0b0cc]">{row.note}</span>
              </div>
            ))}
          </div>

          {/* 평형별 예상 비용 */}
          <h2 className="text-2xl font-black mb-6">평형별 예상 창업 비용</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { size: "20~30평", items: ["게임기 10~15대", "총 예상 비용 약 3,000~5,000만원"], note: "소규모 창업 적합" },
              { size: "40~60평", items: ["게임기 20~30대", "총 예상 비용 약 6,000~1억원"], note: "중규모 창업 적합" },
              { size: "70평 이상", items: ["게임기 30대 이상", "총 예상 비용 약 1억원 이상"], note: "대형 오락실 적합" },
            ].map((row, i) => (
              <div key={i} className="bg-[#12121f] border border-[#1e1e38] rounded-xl p-6 hover:border-[#5b6ef5] transition-colors">
                <div className="font-black text-xl text-[#5b6ef5] mb-3">{row.size}</div>
                {row.items.map((item, j) => (
                  <p key={j} className="text-sm text-[#b0b0cc] mb-1">· {item}</p>
                ))}
                <div className="mt-3 inline-block px-3 py-1 bg-[#5b6ef530] border border-[#5b6ef5] text-[#5b6ef5] text-xs font-bold rounded-full">
                  {row.note}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#12121f] border border-[#1e1e38] rounded-xl text-center">
            <p className="text-[#b0b0cc] mb-4">정확한 창업 비용은 매장 위치, 규모, 기기 선택에 따라 달라집니다.<br />무료 상담을 통해 맞춤 견적을 받아보세요.</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              무료 견적 상담 02-2271-1213
            </a>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
