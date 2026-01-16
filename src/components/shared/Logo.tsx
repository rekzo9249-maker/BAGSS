import Link from "next/link"
import { Tv } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: {
    icon: "w-5 h-5",
    text: "text-base",
  },
  md: {
    icon: "w-6 h-6",
    text: "text-xl",
  },
  lg: {
    icon: "w-8 h-8",
    text: "text-2xl",
  },
}

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 hover:opacity-80 transition-opacity",
        className
      )}
    >
      <div
        className={cn(
          "rounded-lg bg-gradient-green p-2 glow-green-sm",
          sizeClasses[size].icon
        )}
      >
        <Tv className={cn("text-black", sizeClasses[size].icon)} />
      </div>
      <span
        className={cn(
          "font-bold text-gradient-green",
          sizeClasses[size].text
        )}
      >
        Bags
      </span>
    </Link>
  )
}
