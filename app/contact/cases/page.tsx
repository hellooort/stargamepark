import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import SubNav from "@/components/SubNav";
import { openStores } from "@/lib/siteData";

const tabs = [
  { label: "고객상담", href: "/contact" },
  { label: "오락실 창업 사례", href: "/contact/cases" },
  { label: "인형뽑기 창업문의", href: "/contact?type=doll" },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <PageBanner label="고객상담" title="오락실 창업 사례" desc="스타게임파크와 함께 성공한 오락실 창업 사례입니다." />
      <SubNav tabs={tabs} current="/contact/cases" />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {openStores.map((s) => (
              <div key={s.idx} className="group rounded-xl overflow-hidden border border-[#1e1e38] hover:border-[#5b6ef5] transition-colors">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-[#12121f]">
                  <h3 className="font-bold text-base mb-2">{s.name}</h3>
                  <a href="tel:0222711213" className="text-xs text-[#5b6ef5] hover:underline">창업 문의 →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              나도 창업 문의하기 02-2271-1213
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
