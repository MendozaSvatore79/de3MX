"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const items = [
  { href: '/services/web', label: 'Web' },
  { href: '/services/app', label: 'App' },
  { href: '/services/design', label: 'Design' },
  { href: '/services/marketing', label: 'Marketing' },
]

export default function ServiceSwitch() {
  const pathname = usePathname() || ''

  return (
    <div className="flex justify-center">
      <div className="bg-[#1f1f1f] border border-[#2b2b2b] px-3 py-2 rounded-full shadow-inner flex items-center gap-2">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href)
          const base = 'px-5 py-1 rounded-full font-semibold'
          const activeClass = 'bg-[#00DA6B] text-black shadow-sm'
          const inactiveClass = 'text-white/90 hover:text-white'
          return (
            <Link key={item.href} href={item.href} className={`${base} ${isActive ? activeClass : inactiveClass}`}>
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
