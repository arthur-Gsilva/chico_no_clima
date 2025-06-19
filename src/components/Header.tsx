'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {

    const pathname = usePathname()

    return(
        <header className="bg-[#422AD0] w-full h-20 flex fixed top-0 z-50">
            <div className="flex justify-between mx-20 items-center w-full">
                <img src="logo.svg" alt="logo do chico no clima" className="w-auto h-16"/>

                <nav className="">
                    <ul className="flex items-center gap-8 text-[#3CFF00]">
                        <Link href={'/'}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/' ?  '#1F1360' : ""}}
                            >Início</li>
                        </Link>
                        
                        <Link href={'/quem-somos'}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/quem-somos' ?  '#1F1360' : ""}}
                            >Quem somos</li>
                        </Link>
                        
                        <Link href={'/jogos'}>
                            <li 
                                className="hover:bg-[#1F1360] p-2 rounded-full"
                                style={{ backgroundColor: pathname === '/jogos' ?  '#1F1360' : ""}}
                            >Jogos</li>
                        </Link>
                        
                        <Link href={'/galeria'}>
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