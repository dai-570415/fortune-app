"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// 運勢の型を定義
type Fortune = {
    rank: string
    title: string
    description: string
}

const fortunes: Fortune[] = [
    { rank: "🌟🌟🌟🌟🌟", title: "伝説級の幸運", description: "今年、奇跡が起こる" },
    { rank: "🌟🌟🌟🌟", title: "神に選ばれし者", description: "すべての物事が追い風になる" },
    { rank: "🌟🌟🌟", title: "謎の強運", description: "理由は分からないが、運が良い" },
    { rank: "🌟🌟", title: "普通の幸運", description: "そこそこいいことがある" },
    { rank: "🌟", title: "微妙な運勢", description: "まあまあ普通" },
    { rank: "💥", title: "運が爆散", description: "今年の運がどこかに消えた…" },
    { rank: "🔥🔥🔥", title: "地獄のような1年", description: "何かが大変なことになる予感" },
    { rank: "👁‍🗨", title: "宇宙の意思", description: "理解不能な運命が待っている" },
]

export default function ResultScreen() {
    const [fortune, setFortune] = useState<Fortune | null>(null)

    useEffect(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
        setFortune(randomFortune)
        localStorage.setItem("lastDiagnosis", JSON.stringify({ year: new Date().getFullYear(), fortune: randomFortune }))
    }, [])

    if (!fortune) return null

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-16 text-center max-w-md w-full"
            >
                <h2 className="text-3xl font-bold mb-4 text-purple-600">{fortune.title}</h2>
                <p className="text-5xl mb-4">{fortune.rank}</p>
                <p className="text-black text-xl mb-8">{fortune.description}</p>
                <Link
                    href="/share"
                    className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
                >
                    結果をシェア
                </Link>
            </motion.div>
        </div>
    )
}
