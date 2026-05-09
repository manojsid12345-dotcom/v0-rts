import { Truck, Handshake, FileCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "DISPATCH",
    description: "We find high-paying loads from top load boards to keep your trucks loaded and moving.",
  },
  {
    icon: Handshake,
    title: "BROKERAGE",
    description: "We negotiate the best possible rates so you earn more on every mile.",
  },
  {
    icon: FileCheck,
    title: "COMPLIANCE",
    description: "We handle all documents including rate confirmations, BOLs and invoicing.",
  },
  {
    icon: Headphones,
    title: "SAFETY",
    description: "24/7 driver support for you and your drivers, anytime, anywhere.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[#e31837] text-sm font-semibold tracking-wide mb-2">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628]">
            OUR SERVICES
          </h2>
          <div className="w-12 h-1 bg-[#e31837] mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Icon background circle */}
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-[#e31837]" />
                  </div>
                  {/* Small accent circles */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#e31837] rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#0a1628] rounded-full" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center font-bold text-[#0a1628] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
