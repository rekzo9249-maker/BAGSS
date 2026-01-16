import Link from "next/link"
import { Logo } from "@/components/shared/Logo"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-green-500/20 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 text-sm text-green-300/70 max-w-md">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-green-400 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-green-300/70 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/streams" className="text-sm text-green-300/70 hover:text-green-400 transition-colors">
                  Streams
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm text-green-300/70 hover:text-green-400 transition-colors">
                  Start Streaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-green-400 mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-300/70 hover:text-green-400 transition-colors"
                >
                  𝕏 (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-green-500/20">
          <p className="text-center text-sm text-green-300/70">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
