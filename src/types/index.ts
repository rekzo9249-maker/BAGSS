export interface Stream {
  id: string
  title: string
  creatorAddress: string
  creatorDisplayName: string
  tokenAddress: string
  tokenSymbol: string
  tokenName: string
  streamKey: string
  isLive: boolean
  viewerCount: number
  peakViewers: number
  startedAt: Date
  endedAt?: Date
  thumbnailUrl?: string
}

export interface Token {
  address: string
  symbol: string
  name: string
  logoUrl?: string
  price?: number
  priceChange24h?: number
  marketCap?: number
  volume24h?: number
}

export interface ChatMessage {
  id: string
  streamId: string
  userAddress: string
  userDisplayName: string
  message: string
  timestamp: Date
}

export type StreamFilter = "all" | "live" | "ended"
