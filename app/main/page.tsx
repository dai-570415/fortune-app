"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function MainScreen() {
    const [canDiagnose, setCanDiagnose] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const lastDiagnosis = localStorage.getItem("lastDiagnosis")
        const currentYear = new Date().getFullYear()
        setCanDiagnose(!lastDiagnosis || JSON.parse(lastDiagnosis).year !== currentYear)
    }, [])

    const handleDiagnose = () => {
        if (canDiagnose) {
            router.push("/result")
        } else {
            alert("今年はすでに診断済みです。来年までお待ちください。")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-white mb-8"
            >
                占いは一度きり
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-1xl font-bold text-white mb-8"
            >
                一度引くと来年まで引けません。<br />今年の運勢を占いますか？
            </motion.h2>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDiagnose}
                className={`bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold ${canDiagnose ? "hover:bg-purple-100" : "opacity-50 cursor-not-allowed"
                    } transition-colors`}
            >
                運勢を占う
            </motion.button>
        </div>
    )
}

