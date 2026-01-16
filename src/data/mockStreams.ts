import { Stream, Token, ChatMessage } from "@/types"

// Mock tokens
export const mockTokens: Token[] = [
  {
    address: "BaGsTokenAddress1234567890123456789012",
    symbol: "BAGS",
    name: "Bags Token",
    logoUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=100&h=100&fit=crop",
    price: 0.0042,
    priceChange24h: 15.3,
    marketCap: 4200000,
    volume24h: 850000,
  },
  {
    address: "So11111111111111111111111111111111111111112",
    symbol: "SOL",
    name: "Solana",
    logoUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=100&h=100&fit=crop",
    price: 98.45,
    priceChange24h: -2.1,
    marketCap: 42000000000,
    volume24h: 2100000000,
  },
]

// Mock streams
export const mockStreams: Stream[] = [
  {
    id: "1",
    title: "Building the Future of DeFi on Solana",
    creatorAddress: "7xKXtg2C...",
    creatorDisplayName: "CryptoDev",
    tokenAddress: "BaGsTokenAddress1234567890123456789012",
    tokenSymbol: "BAGS",
    tokenName: "Bags Token",
    streamKey: "bags-stream-key-1",
    isLive: true,
    viewerCount: 234,
    peakViewers: 312,
    startedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    thumbnailUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    title: "NFT Art Creation Live Session",
    creatorAddress: "3yFrtN8B...",
    creatorDisplayName: "ArtistAlice",
    tokenAddress: "BaGsTokenAddress1234567890123456789012",
    tokenSymbol: "BAGS",
    tokenName: "Bags Token",
    streamKey: "bags-stream-key-2",
    isLive: true,
    viewerCount: 156,
    peakViewers: 189,
    startedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop",
  },
  {
    id: "3",
    title: "Bags Token Community AMA",
    creatorAddress: "9kLmPq5D...",
    creatorDisplayName: "BagsTeam",
    tokenAddress: "BaGsTokenAddress1234567890123456789012",
    tokenSymbol: "BAGS",
    tokenName: "Bags Token",
    streamKey: "bags-stream-key-3",
    isLive: false,
    viewerCount: 0,
    peakViewers: 412,
    startedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    endedAt: new Date(Date.now() - 22 * 60 * 60 * 1000),
    thumbnailUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
  },
]

// Mock chat messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    streamId: "1",
    userAddress: "7xKXtg2C...",
    userDisplayName: "CryptoFan",
    message: "This is amazing! Love the Bags community!",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
  },
  {
    id: "2",
    streamId: "1",
    userAddress: "3yFrtN8B...",
    userDisplayName: "DeFiEnthusiast",
    message: "When moon? 🚀",
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
  },
  {
    id: "3",
    streamId: "1",
    userAddress: "9kLmPq5D...",
    userDisplayName: "BagsHolder",
    message: "Holding my bags to the moon!",
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
  },
]

// Helper functions
export function getLiveStreams(): Stream[] {
  return mockStreams.filter((stream) => stream.isLive)
}

export function getEndedStreams(): Stream[] {
  return mockStreams.filter((stream) => !stream.isLive)
}

export function getStreamById(id: string): Stream | undefined {
  return mockStreams.find((stream) => stream.id === id)
}

export function getTokenByAddress(address: string): Token | undefined {
  return mockTokens.find((token) => token.address === address)
}

export function getChatMessages(streamId: string): ChatMessage[] {
  return mockChatMessages.filter((message) => message.streamId === streamId)
}
