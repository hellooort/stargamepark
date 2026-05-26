import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";
import PageBanner from "@/components/PageBanner";
import { openStores, allOpenStores } from "@/lib/siteData";
import CtaBanner from "@/components/CtaBanner";

export default function OpenPage() {
  return (
    <>
      <Header />
      <PageBanner
        label="OPEN SHOP"
        title="오픈 매장 보기"
        desc="언제나 고객과 함께하는 스타게임파크가 될 것을 다시 한번 약속 드립니다."
      />
      <main className="bg-[#0d0d1a]">
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* 소개 */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4">오락실 창업 전문 스타게임파크</h2>
            <p className="text-[#b0b0cc] leading-relaxed">
              오락실 창업이 어려우시다고요? 더 이상 고민하지 마세요!
              스타게임파크로 오시면 성공의 지름길이 보입니다. 언제나 고객과 함께하는 스타게임파크!!
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#5b6ef530] border border-[#5b6ef5] rounded-lg">
              <span className="text-[#5b6ef5] font-bold text-sm">총 {allOpenStores.length}개점 오픈 완료</span>
            </div>
          </div>

          {/* 이미지 갤러리 (실제 사진 있는 매장) */}
          <h3 className="text-xl font-black mb-5">매장 사진</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {openStores.map((s) => (
              <div key={s.idx} className="group relative rounded-xl overflow-hidden border border-[#1e1e38] hover:border-[#5b6ef5] transition-colors aspect-[16/10]">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-bold text-white text-sm">{s.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 전체 매장 리스트 */}
          <h3 className="text-xl font-black mb-5">전체 오픈 매장 리스트</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {allOpenStores.map((name, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#12121f] border border-[#1e1e38] rounded-lg hover:border-[#5b6ef5] transition-colors group">
                <span className="font-black text-[#5b6ef5] text-sm shrink-0">#{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-[#b0b0cc] group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 bg-[#12121f] border border-[#1e1e38] rounded-xl">
            <h3 className="text-2xl font-black mb-3">나도 스타게임파크와 함께 창업하고 싶다면?</h3>
            <p className="text-[#b0b0cc] mb-6">무료 창업 상담부터 시작하세요. 오락실 창업의 모든 것을 도와드립니다.</p>
            <a href="tel:0222711213" className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg transition-all">
              무료창업상담 02-2271-1213
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
