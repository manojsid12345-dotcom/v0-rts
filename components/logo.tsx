export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  return (
    <div className="flex items-center gap-3">
      {/* Truck Icon */}
      <div className={`relative ${variant === "footer" ? "w-16 h-16" : "w-14 h-14"}`}>
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background circle/shield */}
          <ellipse cx="40" cy="40" rx="38" ry="38" fill="#0a1628"/>
          
          {/* Truck body */}
          <path d="M15 35h30v18H15z" fill="#5a6577"/>
          <path d="M45 38h12l8 8v7H45z" fill="#5a6577"/>
          
          {/* Truck cab window */}
          <path d="M48 40h8l5 5v3h-13z" fill="#8ba3c7"/>
          
          {/* Wheels */}
          <circle cx="25" cy="55" r="5" fill="#2a3545"/>
          <circle cx="25" cy="55" r="2.5" fill="#5a6577"/>
          <circle cx="55" cy="55" r="5" fill="#2a3545"/>
          <circle cx="55" cy="55" r="2.5" fill="#5a6577"/>
          
          {/* Red accent stripe */}
          <path d="M15 45h30v2H15z" fill="#e31837"/>
          
          {/* RTS text */}
          <text x="40" y="28" textAnchor="middle" fill="#e31837" fontSize="14" fontWeight="bold" fontFamily="Arial Black">RTS</text>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className={`flex flex-col ${variant === "footer" ? "text-white" : ""}`}>
        <span className={`font-black tracking-wider ${variant === "footer" ? "text-xl text-white" : "text-2xl text-[#0a1628]"}`}>
          RADIANCE
        </span>
        <div className="flex items-center gap-1">
          <span className={`text-[8px] tracking-[0.2em] ${variant === "footer" ? "text-gray-300" : "text-gray-600"}`}>
            TRUCKING SOLUTIONS LLP
          </span>
          <span className="text-[#e31837]">—</span>
        </div>
      </div>
    </div>
  )
}
