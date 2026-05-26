import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "오락실 창업전문 스타게임파크 | 무료창업상담 02-2271-1213",
  description:
    "오락실 창업전문 스타게임파크. 가맹비 무료, 철저한 상권분석, 국내 최저가 창업. 완벽한 AS 네트워크. 무료창업상담 02-2271-1213",
  keywords: "오락실창업, 인형뽑기창업, 게임방창업, 무인창업, 스타게임파크",
  openGraph: {
    title: "오락실 창업전문 스타게임파크",
    description: "가맹비 무료, 국내 최저가, 20년 경력. 무료창업상담 02-2271-1213",
    url: "https://www.stargamepark.com",
    siteName: "스타게임파크",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={noto.variable}>
      <body>{children}</body>
    </html>
  );
}
