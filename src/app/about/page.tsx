import { Shield, MessageSquare, TrendingUp, Video } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-green">
          About Bags
        </h1>
        <p className="text-lg text-green-300/80 mb-12">
          The livestreaming platform built for crypto communities
        </p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Our Mission</h2>
          <p className="text-green-300/70 mb-8">
            Bags is revolutionizing how crypto communities interact through livestreaming. 
            We believe that token holders should have exclusive platforms to share ideas, 
            build communities, and engage with their favorite projects in real-time.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <Shield className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">Token-Gated Streaming</h3>
              <p className="text-sm text-green-300/70">
                Only holders of specific tokens can stream, ensuring quality content from verified community members.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <MessageSquare className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">Live Chat</h3>
              <p className="text-sm text-green-300/70">
                Engage with streamers and fellow community members in real-time chat during broadcasts.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <TrendingUp className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">Token Stats</h3>
              <p className="text-sm text-green-300/70">
                View live token prices, market cap, and trading volume directly on stream pages.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <Video className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">OBS Integration</h3>
              <p className="text-sm text-green-300/70">
                Stream directly from OBS or any RTMP-compatible software with your unique stream key.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-400 mb-4">Get Started</h2>
          <p className="text-green-300/70 mb-6">
            Ready to join the Bags community? Connect your wallet and start streaming or watching today.
          </p>

          <div className="flex gap-4">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-6 py-3 text-base font-medium text-black transition-all hover:opacity-90 glow-green-sm"
            >
              Start Streaming
            </Link>
            <Link
              href="/streams"
              className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-6 py-3 text-base font-medium text-green-400 transition-colors hover:bg-green-500/20"
            >
              Browse Streams
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
