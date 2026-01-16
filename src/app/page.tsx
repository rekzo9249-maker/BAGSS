import Link from "next/link"
import { ArrowRight, Tv, MessageSquare, TrendingUp, Video, Wallet, Users, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-green">
            Stream with Your Community
          </h1>
          <p className="text-lg md:text-xl text-green-300/80 mb-8">
            Token-gated livestreaming for crypto communities. Hold tokens, start streaming, build your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/streams"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-6 py-3 text-base font-medium text-black transition-all hover:opacity-90 glow-green-sm"
            >
              Watch Streams
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-6 py-3 text-base font-medium text-green-400 transition-colors hover:bg-green-500/20"
            >
              <Tv className="h-5 w-5" />
              Start Streaming
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 border-t border-green-500/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-green mb-4">
            Why Choose Bags?
          </h2>
          <p className="text-green-300/70 max-w-2xl mx-auto">
            Built for crypto communities who want more than just generic streaming platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Token-Gated</h3>
            <p className="text-sm text-green-300/70">
              Only token holders can stream, ensuring quality content from verified community members
            </p>
          </div>

          <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Live Chat</h3>
            <p className="text-sm text-green-300/70">
              Engage with streamers and fellow community members in real-time chat
            </p>
          </div>

          <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Token Stats</h3>
            <p className="text-sm text-green-300/70">
              View live token prices, market cap, and volume directly on stream pages
            </p>
          </div>

          <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">OBS Integration</h3>
            <p className="text-sm text-green-300/70">
              Stream directly from OBS or any RTMP-compatible software
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 border-t border-green-500/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-green mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-green flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              1
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4 mx-auto">
              <Wallet className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">Connect Wallet</h3>
            <p className="text-sm text-green-300/70">
              Link your Solana wallet to verify token ownership
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-green flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              2
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4 mx-auto">
              <Video className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">Start Streaming</h3>
            <p className="text-sm text-green-300/70">
              Get your stream key and start broadcasting with OBS
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-green flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              3
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">Engage & Grow</h3>
            <p className="text-sm text-green-300/70">
              Build your community and grow your presence
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 border-t border-green-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border border-green-500/20 bg-gradient-green-subtle">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Ready to Stream?</h3>
            <p className="text-green-300/70 mb-6">
              Connect your wallet, verify your tokens, and start streaming to your community today.
            </p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-6 py-3 text-base font-medium text-black transition-all hover:opacity-90"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="p-8 rounded-lg border border-green-500/20 bg-gradient-green-subtle">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Explore Streams</h3>
            <p className="text-green-300/70 mb-6">
              Discover live streams from your favorite token communities and join the conversation.
            </p>
            <Link
              href="/streams"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-6 py-3 text-base font-medium text-black transition-all hover:opacity-90"
            >
              Browse Streams
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
