export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  return (
    <div className="flex items-center gap-4">
      {/* Truck Icon */}
      <div className={`relative flex-shrink-0 ${variant === "footer" ? "w-16 h-16" : "w-20 h-20"}`}>
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer circle background with red border */}
          <circle cx="60" cy="60" r="50" fill="#0a1628" stroke="#e31837" strokeWidth="3" />
          
          {/* Globe/World */}
          <circle cx="60" cy="45" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />
          <circle cx="60" cy="45" r="16" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          
          {/* Airplane silhouette */}
          <g transform="translate(60, 28)">
            <path d="M 0 0 L -10 10 L -4 10 L -4 18 L 4 18 L 4 10 L 10 10 Z" fill="#ffffff" />
          </g>
          
          {/* Truck silhouette */}
          <g transform="translate(35, 65)">
            <rect x="0" y="8" width="20" height="14" rx="2" fill="#ffffff" />
            <rect x="22" y="10" width="10" height="12" fill="#ffffff" />
            <circle cx="8" cy="24" r="3" fill="#ffffff" />
            <circle cx="26" cy="24" r="3" fill="#ffffff" />
          </g>
          
          {/* Red accent arc */}
          <path d="M 100 60 A 50 50 0 0 1 60 110" fill="none" stroke="#e31837" strokeWidth="5" strokeLinecap="round" />
          
          {/* RTS text at bottom */}
          <text x="60" y="128" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#e31837" fontFamily="Arial, sans-serif">
            RTS
          </text>
        </svg>
      </div>

      {/* Vertical Divider */}
      <div className={`w-px flex-shrink-0 ${variant === "footer" ? "h-16 bg-gray-400" : "h-20 bg-gray-300"}`}></div>

      {/* Company Name */}
      <div className={`flex flex-col gap-0 ${variant === "footer" ? "text-white" : ""}`}>
        <span className={`font-black tracking-wider ${variant === "footer" ? "text-xl text-white" : "text-3xl text-[#0a1628]"}`}>
          RADIANCE
        </span>
        <div className="flex items-center justify-center gap-1">
          <span className="text-[#e31837] font-bold">—</span>
          <span className={`text-[10px] tracking-[0.15em] font-semibold ${variant === "footer" ? "text-gray-300" : "text-[#0a1628]"}`}>
            TRUCKING SOLUTIONS LLP
          </span>
          <span className="text-[#e31837] font-bold">—</span>
        </div>
      </div>
    </div>
  )
}
