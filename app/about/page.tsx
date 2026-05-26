import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import CtaBanner from "@/components/CtaBanner";

const tabs = [
  { label: "대표자 인사말", href: "/about" },
  { label: "연혁", href: "/about/history" },
  { label: "찾아오시는 길", href: "/about/location" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner label="ABOUT US" title="회사소개" desc="오락실 성공 창업의 대명사, 스타게임파크입니다." />
      <SubNav tabs={tabs} current="/about" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
              오락실 성공 창업의 대명사!<br />
              언제나 고객과 함께 하는 스타게임파크입니다.
            </h2>
            <div className="space-y-4 text-[#b0b0cc] leading-relaxed">
              <p className="text-lg font-semibold text-white">
                스타게임파크는 언제나 고객의 입장에서 서서 아케이드 게임 문화를 선도해 왔습니다.
              </p>
              <p>
                20년간 한결 같이 고객과 동반자라는 마음으로 고객의 요구에 부응해 왔으며 언제나 고객과 함께 할 것을 약속 드립니다.
                스타게임파크만의 기술력과 자체 개발 노하우로 게임업계에서 항상 선두를 유지하고 노력 하고 있습니다.
              </p>
              <p>
                아케이드 게임 시장의 변화에 맞추어 오락실 창업과 코인 노래방 창업 시장에 획기적인 변화를 도모하였으며
                20년간의 스타게임파크의 노하우만으로 고객의 성공적인 오락실 창업을 도와 드리고 있습니다.
              </p>
              <p>
                특히 스타게임파크는 게임기 수출 및 수입을 현지 국가와 직접 진행함으로써 고객들에게 유통 거품을 빼고
                직접 거래를 하는 획기적인 오락실 창업 시스템을 만들었습니다.
              </p>
              <p>
                이와 같은 시스템 개발을 통하여 고객에게 더욱 많은 혜택을 돌려 드리고자 합니다.
                효율적이고 합리적인 시스템으로 성공적인 오락실 창업이 되도록 약속 드립니다.
              </p>
              <p>
                항상 스타게임파크의 임직원 일동은 고객의 동반자라는 마음으로 달려나가겠습니다.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 p-6 bg-[#12121f] border border-[#1e1e38] rounded-xl">
              <div className="w-16 h-16 rounded-full bg-[#5b6ef530] border border-[#5b6ef5] flex items-center justify-center text-[#5b6ef5] font-black text-xl">
                윤
              </div>
              <div>
                <p className="font-bold text-lg">대표 윤지훈</p>
                <p className="text-sm text-[#b0b0cc]">스타게임파크 대표이사</p>
              </div>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "상호명", value: "스타게임파크" },
              { label: "대표자", value: "윤지훈" },
              { label: "설립연도", value: "1999년" },
              { label: "사업자등록번호", value: "104-06-23796" },
              { label: "통신판매업번호", value: "2011-서울중구-0388" },
              { label: "전화", value: "02-2271-1213" },
              { label: "팩스", value: "02-2265-5210" },
              { label: "이메일", value: "stargamepark@naver.com" },
              { label: "주소", value: "서울특별시 중구 을지로 157 대림상가 라열 263~4호 (을지로4가)" },
              { label: "업태", value: "도매 및 소매업 / 게임용구, 인형 및 장난감 소매업" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-[#12121f] border border-[#1e1e38] rounded-xl">
                <span className="text-sm font-bold text-[#5b6ef5] shrink-0 w-28">{item.label}</span>
                <span className="text-sm text-[#b0b0cc]">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
