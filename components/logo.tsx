import Image from "next/image"

export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  if (variant === "footer") {
    return (
      <div className="bg-white rounded-md px-3 py-2 inline-block">
        <Image
          src="/app_logo.jpeg"
          alt="Radiance Trucking Solutions LLP"
          width={220}
          height={72}
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <Image
      src="/app_logo.jpeg"
      alt="Radiance Trucking Solutions LLP"
      width={280}
      height={90}
      className="object-contain"
      priority
    />
  )
}
