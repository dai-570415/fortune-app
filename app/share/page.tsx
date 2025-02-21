"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// 運勢の型を定義
type Fortune = {
    title: string
    rank: string
    description: string
}

export default function ShareScreen() {
    const [fortune, setFortune] = useState<Fortune | null>(null)

    useEffect(() => {
        const lastDiagnosis = localStorage.getItem("lastDiagnosis")
        if (lastDiagnosis) {
            try {
                const parsedData = JSON.parse(lastDiagnosis)
                if (parsedData && parsedData.fortune) {
                    setFortune(parsedData.fortune as Fortune)
                }
            } catch (error) {
                console.error("Error parsing stored fortune:", error)
            }
        }
    }, [])

    const shareText = fortune
        ? `私の今年の運勢は「${fortune.title}」です！\n${fortune.rank}\n${fortune.description}\n#運命の診断`
        : ""

    const shareUrl = "https://your-app-url.com" // アプリのURLに置き換えてください

    const shareToTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            "_blank",
        )
    }

    const shareToInstagram = () => {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
            alert("テキストをコピーしました。Instagramアプリに貼り付けてシェアしてください。")
        })
    }

    if (!fortune) return null

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-8 text-center max-w-md w-full"
            >
                <h2 className="text-2xl font-bold mb-4 text-purple-600">結果をシェア</h2>
                <p className="text-black mb-6">{shareText}</p>
                <div className="flex justify-center space-x-4 mb-6">
                    <button onClick={shareToTwitter} className="bg-blue-400 text-white px-4 py-2 rounded-full">
                        X（Twitter）
                    </button>
                    <button onClick={shareToInstagram} className="bg-pink-500 text-white px-4 py-2 rounded-full">
                        Instagram
                    </button>
                </div>
                <Link href="/" className="text-black mb-6 text-purple-600">また来年引くことができます</Link>
            </motion.div>
        </div>
    )
}
