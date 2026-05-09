"use client"

import { ArrowRight, CircleDollarSign, TrendingUp, Truck, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  { icon: CircleDollarSign, text: "More Loads" },
  { icon: TrendingUp, text: "Higher Rates" },
  { icon: Truck, text: "No Empty Miles" },
  { icon: Headphones, text: "24/7 Support" },
]

export function Hero() {
  return (
    <section id="home" className="relative bg-[#0a1628] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%208%2C%202026%2C%2008_31_47%20PM-S5XSTjBWGMIarwNeYO3LHcfKN8N28H.png"
          alt="Truck on highway"
          fill
          className="object-cover object-right opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-gray-300 text-sm italic mb-4 tracking-wide">
            DISPATCHING EXCELLENCE.
            <br />
            DRIVING YOUR SUCCESS.
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            KEEPING YOUR
            <br />
            TRUCKS <span className="text-[#e31837]">MOVING.</span>
            <br />
            MAXIMIZING
            <br />
            YOUR <span className="text-[#e31837]">PROFITS.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
            Professional truck dispatch services for owner-operators
            and fleets across <span className="text-[#e31837] font-semibold">USA & Canada</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#c41430] text-white px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              Get a Dispatcher
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              Our Services
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-white text-sm">
                <feature.icon className="w-5 h-5 text-[#e31837]" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dispatch Partner Badge */}
        <div className="absolute bottom-8 right-4 lg:right-8 hidden md:block">
          <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-3">
            <div className="w-12 h-12 bg-[#e31837] rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-[#e31837] text-xs font-semibold tracking-wide">YOUR RELIABLE</p>
              <p className="text-[#0a1628] font-black text-sm">DISPATCH PARTNER</p>
              <p className="text-[#e31837] text-xs font-semibold">IN USA & CANADA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
