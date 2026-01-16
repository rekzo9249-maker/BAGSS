import { Video, Copy, ExternalLink } from "lucide-react"

export default function CreatePage() {
  // Mock stream key - in production, this would be generated after wallet verification
  const streamKey = "bags-stream-key-" + Math.random().toString(36).substring(7)
  const streamUrl = "rtmp://stream.bags.live/live"

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-green">
            Start Streaming
          </h1>
          <p className="text-lg text-green-300/80">
            Connect your wallet, verify your tokens, and get your stream key
          </p>
        </div>

        {/* Step 1: Connect Wallet */}
        <div className="mb-8 p-6 rounded-lg border border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-green flex items-center justify-center text-black font-bold">
              1
            </div>
            <h2 className="text-xl font-bold text-green-400">Connect Your Wallet</h2>
          </div>
          <p className="text-green-300/70 mb-4">
            Use the "Connect Wallet" button in the top right to link your Solana wallet.
          </p>
          <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
            <p className="text-sm text-green-300/70">
              💡 You'll need to hold the required tokens to start streaming
            </p>
          </div>
        </div>

        {/* Step 2: Verify Tokens */}
        <div className="mb-8 p-6 rounded-lg border border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-green flex items-center justify-center text-black font-bold">
              2
            </div>
            <h2 className="text-xl font-bold text-green-400">Verify Token Ownership</h2>
          </div>
          <p className="text-green-300/70 mb-4">
            Enter the token address you hold and want to stream for:
          </p>
          <input
            type="text"
            placeholder="Token contract address..."
            className="w-full px-4 py-3 rounded-md bg-black border border-green-500/20 text-green-300 placeholder:text-green-300/50 focus:border-green-500 focus:outline-none"
          />
        </div>

        {/* Step 3: Get Stream Key */}
        <div className="mb-8 p-6 rounded-lg border border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-green flex items-center justify-center text-black font-bold">
              3
            </div>
            <h2 className="text-xl font-bold text-green-400">Your Stream Key</h2>
          </div>
          <p className="text-green-300/70 mb-4">
            Use these credentials in OBS or your streaming software:
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-green-400 mb-2 block">Stream URL</label>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-4 py-3 rounded-md bg-black border border-green-500/20 text-green-300 font-mono text-sm">
                  {streamUrl}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(streamUrl)}
                  className="p-3 rounded-md border border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-green-400 mb-2 block">Stream Key</label>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-4 py-3 rounded-md bg-black border border-green-500/20 text-green-300 font-mono text-sm">
                  {streamKey}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(streamKey)}
                  className="p-3 rounded-md border border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-md bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-300">
              ⚠️ Keep your stream key private! Anyone with this key can stream to your channel.
            </p>
          </div>
        </div>

        {/* OBS Setup Instructions */}
        <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-3 mb-4">
            <Video className="h-6 w-6 text-green-400" />
            <h2 className="text-xl font-bold text-green-400">OBS Setup</h2>
          </div>
          
          <ol className="space-y-3 text-green-300/70">
            <li className="flex gap-3">
              <span className="text-green-400 font-semibold">1.</span>
              <span>Open OBS Studio (download from <a href="https://obsproject.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">obsproject.com</a>)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-semibold">2.</span>
              <span>Go to Settings → Stream</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-semibold">3.</span>
              <span>Select "Custom" as Service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-semibold">4.</span>
              <span>Paste your Stream URL and Stream Key from above</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-semibold">5.</span>
              <span>Click "Start Streaming" in OBS</span>
            </li>
          </ol>

          <a
            href="https://obsproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            Download OBS Studio
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
