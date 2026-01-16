import Link from "next/link"
import { getLiveStreams, getEndedStreams } from "@/data/mockStreams"
import { Eye, Radio } from "lucide-react"

export default function StreamsPage() {
  const liveStreams = getLiveStreams()
  const endedStreams = getEndedStreams()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-green">
          Live Streams
        </h1>
        <p className="text-lg text-green-300/80">
          Watch live streams from token communities around the world
        </p>
      </div>

      {/* Live Streams */}
      {liveStreams.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Radio className="h-6 w-6 text-red-500 animate-pulse" />
            Currently Live
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((stream) => (
              <Link
                key={stream.id}
                href={`/streams/${stream.id}`}
                className="group relative rounded-lg border border-green-500/20 bg-green-500/5 overflow-hidden hover:border-green-500/40 transition-all"
              >
                <div className="aspect-video bg-gradient-green-subtle relative">
                  {stream.thumbnailUrl && (
                    <img
                      src={stream.thumbnailUrl}
                      alt={stream.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-red-500 text-white text-xs font-semibold">
                    <Radio className="h-3 w-3" />
                    LIVE
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 text-green-300 text-xs">
                    <Eye className="h-3 w-3" />
                    {stream.viewerCount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    {stream.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-green-300/70">
                    <span>{stream.creatorDisplayName}</span>
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">
                      {stream.tokenSymbol}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Past Streams */}
      {endedStreams.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Past Streams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endedStreams.map((stream) => (
              <Link
                key={stream.id}
                href={`/streams/${stream.id}`}
                className="group relative rounded-lg border border-green-500/20 bg-green-500/5 overflow-hidden hover:border-green-500/40 transition-all opacity-75 hover:opacity-100"
              >
                <div className="aspect-video bg-gradient-green-subtle relative">
                  {stream.thumbnailUrl && (
                    <img
                      src={stream.thumbnailUrl}
                      alt={stream.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  )}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 text-green-300 text-xs">
                    <Eye className="h-3 w-3" />
                    {stream.peakViewers} peak
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    {stream.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-green-300/70">
                    <span>{stream.creatorDisplayName}</span>
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">
                      {stream.tokenSymbol}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {liveStreams.length === 0 && endedStreams.length === 0 && (
        <div className="text-center py-20">
          <p className="text-green-300/70 mb-6">No streams available at the moment</p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-green px-6 py-3 text-base font-medium text-black transition-all hover:opacity-90"
          >
            Start the First Stream
          </Link>
        </div>
      )}
    </div>
  )
}
