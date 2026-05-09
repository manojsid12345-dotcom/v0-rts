export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  return (
    <div className="flex items-center gap-4">
      {/* Truck Icon */}
      <div className={`relative flex-shrink-0 ${variant === "footer" ? "w-16 h-16" : "w-20 h-20"}`}>
        export function Logo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="navyShade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10264f" />
          <stop offset="100%" stopColor="#061634" />
        </linearGradient>
      </defs>

      {/* White background */}
      <rect width="800" height="560" fill="#ffffff" />

      {/* Main globe outer arcs */}
      <path
        d="M150 260C145 140 240 40 375 35C465 32 545 75 595 142"
        stroke="#071a3d"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M445 38C520 48 582 94 620 160C643 199 653 237 650 275"
        stroke="#ef123b"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M177 278C169 213 187 145 235 98"
        stroke="#071a3d"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Globe circle */}
      <circle
        cx="395"
        cy="235"
        r="170"
        fill="#ffffff"
        stroke="#d9dde5"
        strokeWidth="3"
      />

      {/* Light longitude/latitude lines */}
      <path d="M235 235H565" stroke="#d6dbe4" strokeWidth="2" />
      <path d="M395 65C350 115 330 175 330 235C330 295 350 350 395 405" stroke="#d6dbe4" strokeWidth="2" />
      <path d="M395 65C440 115 460 175 460 235C460 295 440 350 395 405" stroke="#d6dbe4" strokeWidth="2" />
      <path d="M270 130C335 160 455 160 520 130" stroke="#d6dbe4" strokeWidth="2" />
      <path d="M250 310C325 285 465 285 540 310" stroke="#d6dbe4" strokeWidth="2" />

      {/* Continents - stylized to match logo */}
      <g fill="url(#navyShade)">
        {/* North America */}
        <path d="M285 95L330 78L365 95L355 120L382 130L375 160L340 152L320 175L280 170L250 145L258 115L275 118Z" />
        <path d="M230 155L265 150L285 180L272 220L230 225L205 195Z" />

        {/* South America */}
        <path d="M333 245L370 260L382 305L365 350L335 390L315 370L325 330L305 295Z" />

        {/* Europe / Africa */}
        <path d="M410 110L455 100L490 125L478 150L440 148L420 170L390 155Z" />
        <path d="M420 175L475 165L510 205L500 265L465 335L425 315L405 250Z" />

        {/* Asia */}
        <path d="M495 120L555 125L590 160L580 205L530 210L500 185L520 160Z" />
        <path d="M535 230L575 245L595 280L565 305L530 285Z" />

        {/* Small island marks */}
        <path d="M360 122L375 128L365 138L350 134Z" />
        <path d="M575 190L600 198L585 212Z" />
      </g>

      {/* Ship */}
      <g transform="translate(85 260)">
        <path
          d="M18 86H215C196 120 145 139 67 134L35 126Z"
          fill="#071a3d"
        />
        <path
          d="M45 74H220C226 74 230 80 226 85L216 98H28Z"
          fill="#071a3d"
        />
        <path
          d="M60 30H175V76H60Z"
          fill="#071a3d"
        />
        <path d="M78 14H178V30H78Z" fill="#071a3d" />
        <path d="M60 50H175" stroke="#ffffff" strokeWidth="3" />
        <path d="M92 30V76" stroke="#ffffff" strokeWidth="3" />
        <path d="M125 30V76" stroke="#ffffff" strokeWidth="3" />
        <path d="M158 30V76" stroke="#ffffff" strokeWidth="3" />
        <circle cx="196" cy="61" r="5" fill="#ffffff" />
        <circle cx="220" cy="61" r="5" fill="#ffffff" />
        <path
          d="M70 104C105 95 145 91 190 93"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Truck */}
      <g transform="translate(420 270)">
        <path
          d="M30 30H135C160 30 182 48 186 72L196 130H30Z"
          fill="#071a3d"
        />
        <path
          d="M132 47H176C184 58 188 74 190 92H132Z"
          fill="#ffffff"
        />
        <path
          d="M139 55H170C176 64 179 73 180 84H139Z"
          fill="#071a3d"
        />
        <path d="M30 130H225" stroke="#071a3d" strokeWidth="10" strokeLinecap="round" />
        <path d="M175 103H222" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        <path d="M178 116H220" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        <circle cx="78" cy="132" r="24" fill="#071a3d" />
        <circle cx="78" cy="132" r="11" fill="#ffffff" />
        <circle cx="182" cy="132" r="24" fill="#071a3d" />
        <circle cx="182" cy="132" r="11" fill="#ffffff" />
        <path
          d="M60 58H94C103 58 109 64 109 73V90H60Z"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M125 30V130" stroke="#ffffff" strokeWidth="4" />
      </g>

      {/* Airplane */}
      <g transform="translate(615 162) rotate(18)">
        <path
          d="M0 36L105 0C114 -3 122 4 114 11L82 40L126 64C133 68 131 77 122 76L62 61L34 88C28 94 20 91 23 82L34 50L0 45C-10 44 -10 39 0 36Z"
          fill="#071a3d"
        />
      </g>

      {/* Airplane trail */}
      <path
        d="M530 245C575 215 615 200 655 194"
        stroke="#dfe3ea"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M545 255C590 230 630 218 670 214"
        stroke="#071a3d"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Ground line */}
      <path
        d="M100 405H700"
        stroke="#071a3d"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* RTS Text */}
      <g transform="translate(95 430)">
        {/* R */}
        <path
          d="M25 0H210C250 0 265 18 252 52C242 79 220 91 183 91H87L68 145H0L43 25C48 9 58 0 25 0Z"
          fill="#071a3d"
        />
        <path
          d="M103 36H192C205 36 211 42 207 53C203 64 193 69 178 69H91Z"
          fill="#ffffff"
        />

        {/* T */}
        <path
          d="M292 0H468L448 55H392L360 145H292L324 55H272Z"
          fill="#ef123b"
        />

        {/* S */}
        <path
          d="M505 0H690L671 55H548C536 55 529 59 526 69C523 78 528 82 540 82H626C664 82 678 101 665 128C656 146 638 145 604 145H430L449 91H581C594 91 602 86 605 77C608 68 602 64 589 64H510C472 64 457 45 469 18C476 5 487 0 505 0Z"
          fill="#071a3d"
        />
      </g>
    </svg>
  )
}
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
