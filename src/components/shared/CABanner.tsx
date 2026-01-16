"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function CABanner() {
  const [copied, setCopied] = useState(false)
  // Replace with your actual contract address
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="w-full bg-black border-b border-green-500/20 py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-green-400 font-semibold">CA:</span>
          <code className="text-green-300 font-mono text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">
            {contractAddress}
          </code>
          <button
            onClick={copyToClipboard}
            className="ml-2 text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
            aria-label="Copy contract address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">Copied!</span>
              </>
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
