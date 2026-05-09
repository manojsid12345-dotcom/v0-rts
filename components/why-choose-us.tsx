"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  "We work as your back office so you can focus on driving.",
  "No forced dispatch – you decide which load to take.",
  "Transparent communication and honest approach.",
  "We treat your business like our own.",
  "100% dedicated to increasing your profits.",
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="px-4 py-16 md:py-24 lg:pr-12">
            <p className="text-[#e31837] text-sm font-semibold tracking-wide mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] mb-4">
              WE FOCUS ON YOUR SUCCESS
            </h2>
            <div className="w-12 h-1 bg-[#e31837] mb-8" />

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e31837] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-[#e31837] hover:bg-[#c41430] text-white px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Image */}
          {/* <div className="relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%208%2C%202026%2C%2008_31_47%20PM-S5XSTjBWGMIarwNeYO3LHcfKN8N28H.png"
              alt="Professional trucking"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
          </div> */}
        </div>
      </div>
    </section>
  )
}
