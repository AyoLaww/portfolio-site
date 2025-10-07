import Image from "next/image"
import * as React from "react"

type BadgeProps = {
  iconSrc?: string
  icon?: React.ReactNode
  label: string
}

export function Badge({ iconSrc, icon, label }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#27272A] bg-[#171819] px-2 py-1 text-[11px] text-muted-foreground hover:bg-[#1c1d1f] transition-colors align-baseline">
      {icon ? (
        <span className="size-[14px] text-muted-foreground/80 [&>*]:size-[14px]">{icon}</span>
      ) : iconSrc ? (
        <Image src={iconSrc} alt="" width={14} height={14} className="opacity-80" />
      ) : null}
      <span className="font-figtree leading-none">{label}</span>
    </span>
  )
}


