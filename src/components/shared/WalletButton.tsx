"use client"

import { useState } from "react"
import { Wallet, LogOut, Copy, Check } from "lucide-react"

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [copied, setCopied] = useState(false)

  // Mock wallet address
  const walletAddress = "7xKXtg2CW8keXRqg3n4bPQYMbBPGKbYp4Fw8kZ7pump"
  const shortAddress = `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`

  const handleConnect = async () => {
    setIsConnecting(true)
    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)
    }, 1000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setShowDropdown(false)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isConnected) {
    return (
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-4 py-2 text-sm font-medium text-black transition-all hover:opacity-90 disabled:opacity-50 glow-green-sm"
      >
        <Wallet className="h-4 w-4" />
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/20"
      >
        <Wallet className="h-4 w-4" />
        {shortAddress}
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-md border border-green-500/20 bg-black p-2 shadow-lg">
          <div className="mb-2 flex items-center justify-between border-b border-green-500/20 pb-2">
            <span className="text-xs text-green-400">Connected</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="mb-2 rounded-md bg-green-500/5 p-2">
            <p className="text-xs text-green-300/70 mb-1">Wallet Address</p>
            <div className="flex items-center justify-between gap-2">
              <code className="text-xs text-green-300 font-mono truncate">
                {walletAddress}
              </code>
              <button
                onClick={handleCopy}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>

          <button
            onClick={handleDisconnect}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}
