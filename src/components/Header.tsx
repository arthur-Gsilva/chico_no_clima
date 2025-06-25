'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export const Header = () => {

    const pathname = usePathname()

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return(
        <header className="bg-[#422AD0] w-full h-20 flex fixed top-0 z-50">
            <div className="flex justify-between mx-10 md:mx-20 items-center w-full">

                <img src="logo.svg" alt="logo do chico no clima" className="w-auto h-16"/>

                {!openMenu &&
                    <GiHamburgerMenu
                        className="text-xl text-white cursor-pointer block md:hidden"
                        onClick={() => setOpenMenu(true)}
                    />
                }

                <nav 
                    className="h-screen bg-[#422AD0] shadow-lg absolute top-0 bottom-0 w-[60vw] right-0"
                    style={{ display: openMenu ? 'block' : 'none' }}
                >

                    <button 
                        className="text-white text-xl absolute right-4 top-4 cursor-pointer"
                        onClick={() => setOpenMenu(false)}
                    >
                        X
                    </button>

                    <ul className="flex flex-col gap-4 text-[#3CFF00] p-5 pt-16">
                        <Link href={'/'} onClick={() => setOpenMenu(false)}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/' ?  '#1F1360' : ""}}
                            >Início</li>
                        </Link>
                        
                        <Link href={'/quem-somos'} onClick={() => setOpenMenu(false)}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/quem-somos' ?  '#1F1360' : ""}}
                            >Quem somos</li>
                        </Link>
                        
                        <Link href={'/jogos'} onClick={() => setOpenMenu(false)}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/jogos' ?  '#1F1360' : ""}}
                            >Jogos</li>
                        </Link>
                        
                        <Link href={'/galeria'} onClick={() => setOpenMenu(false)}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/galeria' ?  '#1F1360' : ""}}
                            >Galeria</li>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}