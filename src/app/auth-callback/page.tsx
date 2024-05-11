"use client"

import { useEffect, useState } from "react"

const Page = () => {
    const [configId, setConfigId] = useState<string | null>(null)

    useEffect(() => {
        const configurationId = localStorage.getItem("configurationId")
    })
}

export default Page