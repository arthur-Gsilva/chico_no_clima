'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export const Header = () => {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <header className="bg-[#422AD0] w-full h-20 flex fixed top-0 z-50">
      <div className="flex justify-between mx-6 md:mx-20 items-center w-full">

        <img src="logo.svg" alt="logo do chico no clima" className="w-auto h-16" />

        {/* Ícone do menu apenas em mobile */}
        {!openMenu && (
          <GiHamburgerMenu
            className="text-xl text-white cursor-pointer block md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        )}

        {/* Menu mobile */}
        <nav
          className={`md:hidden h-screen bg-[#422AD0] shadow-lg absolute top-0 bottom-0 w-[60vw] transition-all duration-300 ease-in-out
            ${openMenu ? 'right-0' : '-right-[300%]'}`}
        >
          <button
            className="text-white text-xl absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            X
          </button>

          <ul className="flex flex-col gap-4 text-[#3CFF00] p-5 pt-16">
            {navItems.map((item) => (
              <li
                key={item.href}
                onClick={() => setOpenMenu(false)}
                className={`hover:bg-[#1F1360] p-2 rounded-full ${
                  pathname === item.href ? 'bg-[#1F1360]' : ''
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-[#3CFF00]">
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`hover:bg-[#1F1360] p-2 rounded-full ${
                pathname === item.href ? 'bg-[#1F1360]' : ''
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/jogos', label: 'Jogos' },
  { href: '/galeria', label: 'Galeria' },
]
