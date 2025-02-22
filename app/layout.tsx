import type React from "react"
import type { Metadata } from "next"
import { Zen_Old_Mincho } from "next/font/google"
import "./globals.css"

const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-zen-old-mincho',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "1年に1回しか引けない運命の診断!",
  description: "神秘的な運勢診断アプリ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={zenOldMincho.className}>{children}</body>
    </html>
  )
}