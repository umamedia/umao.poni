import type React from "react"
import type { Metadata } from "next"
import { M_PLUS_Rounded_1c } from "next/font/google"
import "./globals.css"

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ウマレビュー - 信頼できる競馬予想をみんなで見つけよう",
  description:
    "ウマオとぽに〜が、YouTube・note・Xで公開される無料予想の精度を毎日検証。競馬予想サイトやYouTuberの実力を客観的にレビューし、信頼できる情報源をご紹介します。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={mPlusRounded.className}>{children}</body>
    </html>
  )
}
