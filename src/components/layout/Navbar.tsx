"use client"

import Link from "next/link"
import { Logo } from "@/components/shared/Logo"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { WalletButton } from "@/components/shared/WalletButton"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-green-500/20 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/streams"
              className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
            >
              Streams
            </Link>
            <a
              href="https://twitter.com/bagslive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
            >
              𝕏
            </a>
            <ThemeToggle />
            <WalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-green-400 hover:text-green-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/streams"
                className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Streams
              </Link>
              <a
                href="https://twitter.com/bagslive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
              >
                𝕏
              </a>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <WalletButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
