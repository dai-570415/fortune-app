"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SplashScreen() {
  const [showLink, setShowLink] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLink(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-4">最強の運勢診断アプリ</h1>
        <p className="text-xl text-white mb-8">1年に1回しか引けない占い!</p>
      </motion.div>
      {showLink && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link
            href="/main"
            className="text-center mb-10 block bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors"
          >
            始める
          </Link>
          <ul className="text-center">
            <li className="mb-3 px-2 py-1 border-2 border-solid">使い方</li>
            <li className="text-left">1. 始める</li>
            <li className="text-left">2. 運勢を占う</li>
            <li className="text-left">3. 結果をシェア</li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}

