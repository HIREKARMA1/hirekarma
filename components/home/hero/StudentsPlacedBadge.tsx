import React from "react"
import Image from "next/image"

type Avatar = {
  src: string
  alt: string
}

type StudentsPlacedBadgeProps = {
  text?: string
  avatars?: Avatar[]
  className?: string
}

const defaultAvatars: Avatar[] = [
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    alt: "Student avatar 1",
  },
  {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "Student avatar 2",
  },
  {
    src: "https://randomuser.me/api/portraits/men/10.jpg",
    alt: "Student avatar 3",
  },
]

export function StudentsPlacedBadge({
  text = "Over 1000+ Students Placed",
  avatars = defaultAvatars,
  className = "",
}: StudentsPlacedBadgeProps) {
  return (
    <div
      className={[
        "flex items-center gap-4",
        "rounded-full",
        // SVG badge blur radius + subtle outline
        "bg-white/10 backdrop-blur-[6px] border border-white/10",
        "px-6 py-3",
        className,
      ].join(" ")}
    >
      <div className="flex items-center -space-x-3">
        {avatars.slice(0, 3).map((avatar, idx) => (
          <div
            key={`${avatar.src}-${idx}`}
            className="relative w-9 h-9 rounded-full overflow-hidden bg-white/10 ring-2 ring-white/10 border-2 border-[#030303]"
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              sizes="36px"
              className="object-cover"
              unoptimized
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <p className="text-white/95 font-medium text-sm sm:text-base whitespace-nowrap">
        {text}
      </p>
    </div>
  )
}

