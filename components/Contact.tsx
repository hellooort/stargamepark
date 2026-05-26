"use client";

import { useState } from "react";

const regions = ["서울","경기","인천","부산","대구","광주","대전","울산","세종","강원","충남","충북","전남","전북","경남","경북","제주"];
const sizes = ["20평","30평","40평","50평","60평","70평","80평 이상"];

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "무료 창업상담 전화",
    value: <a href="tel:0222711213" className="text-[#5b6ef5] hover:underline font-semibold">02-2271-1213</a>,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "이메일",
    value: <a href="mailto:stargamepark@naver.com" className="text-[#5b6ef5] hover:underline">stargamepark@naver.com</a>,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "주소",
    value: <span>서울특별시 중구 을지로 157<br/>대림상가 라열 263~4호</span>,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "사업자등록번호",
    value: <span>104-06-23796</span>,
  },
];

const inputClass =
  "w-full bg-[#0d0d1a] border border-[#1e1e38] rounded-lg px-4 py-3 text-sm text-white placeholder-[#6b6b8a] focus:outline-none focus:border-[#5b6ef5] transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] text-[#5b6ef5] uppercase mb-3">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">창업 상담 문의</h2>
          <p className="text-[#b0b0cc] text-base max-w-lg mx-auto">희망 지역과 규모를 알려주시면 맞춤 창업 플랜을 제안해 드립니다</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            {infoItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-[#5b6ef530] border border-[#5b6ef5] flex items-center justify-center text-[#5b6ef5]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[#6b6b8a] font-medium mb-1">{item.label}</p>
                  <div className="text-sm leading-relaxed">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 폼 */}
          <div className="bg-[#12121f] border border-[#1e1e38] rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#5b6ef530] border border-[#5b6ef5] flex items-center justify-center text-[#5b6ef5] mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">상담 신청이 완료되었습니다!</h3>
                <p className="text-[#b0b0cc] text-sm">빠른 시일 내에 연락드리겠습니다.<br/>긴급 문의: <a href="tel:0222711213" className="text-[#5b6ef5]">02-2271-1213</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#b0b0cc] mb-1.5">이름 <span className="text-[#5b6ef5]">*</span></label>
                    <input type="text" placeholder="이름을 입력하세요" className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#b0b0cc] mb-1.5">연락처 <span className="text-[#5b6ef5]">*</span></label>
                    <input type="tel" placeholder="010-0000-0000" className={inputClass} required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#b0b0cc] mb-1.5">희망지역</label>
                    <select className={inputClass}>
                      <option value="">지역 선택</option>
                      {regions.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#b0b0cc] mb-1.5">평형 선택</label>
                    <select className={inputClass}>
                      <option value="">평형 선택</option>
                      {sizes.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#b0b0cc] mb-1.5">문의내용</label>
                  <textarea rows={4} placeholder="창업 관련 문의사항을 자유롭게 입력하세요" className={inputClass + " resize-none"} />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="privacy" required className="accent-[#5b6ef5] w-4 h-4" />
                  <label htmlFor="privacy" className="text-xs text-[#b0b0cc]">개인정보취급방침을 읽었으며 이에 동의합니다.</label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#5b6ef5] hover:bg-[#4a5de0] text-white font-bold rounded-lg text-base transition-colors"
                >
                  상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
