// Site configuration
export const SITE_CONFIG = {
  name: "Bags",
  title: "Bags - Livestreaming for Crypto Communities",
  description: "Stream, watch, and earn with your favorite tokens on Bags.",
  url: "https://bags.live", // Update to your actual domain
  links: {
    twitter: "https://twitter.com/bagslive", // Update to your actual Twitter
  },
}

// Navigation routes
export const ROUTES = {
  home: "/",
  about: "/about",
  streams: "/streams",
  create: "/create",
}

// Platform features
export const FEATURES = [
  {
    title: "Token-Gated Streaming",
    description: "Only holders of specific tokens can stream, ensuring quality content from verified community members.",
    icon: "shield-check",
  },
  {
    title: "Live Chat",
    description: "Engage with streamers and fellow community members in real-time chat during broadcasts.",
    icon: "message-square",
  },
  {
    title: "Token Stats",
    description: "View live token prices, market cap, and trading volume directly on stream pages.",
    icon: "trending-up",
  },
  {
    title: "OBS Integration",
    description: "Stream directly from OBS or any RTMP-compatible software with your unique stream key.",
    icon: "video",
  },
]

// How it works steps
export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Connect Your Wallet",
    description: "Link your Solana wallet to verify token ownership and access platform features.",
    icon: "wallet",
  },
  {
    step: 2,
    title: "Start Streaming",
    description: "If you hold the required tokens, get your stream key and start broadcasting with OBS.",
    icon: "video",
  },
  {
    step: 3,
    title: "Engage & Earn",
    description: "Build your community, interact with viewers, and grow your presence in the crypto space.",
    icon: "users",
  },
]

// Stream filters
export const STREAM_FILTERS = {
  all: "all",
  live: "live",
  ended: "ended",
}

// Token validation regex (Solana address format)
export const SOLANA_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/

// Example supported tokens (for demo purposes)
export const EXAMPLE_TOKENS = [
  {
    symbol: "BAGS",
    name: "Bags Token",
    address: "BaGsTokenAddress1234567890123456789012",
  },
  {
    symbol: "SOL",
    name: "Solana",
    address: "So11111111111111111111111111111111111111112",
  },
]
