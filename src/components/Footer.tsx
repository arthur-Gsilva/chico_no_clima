import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export const Footer = () => {
    return(
        <footer>
            <img src="nuvem-verde.svg" alt="nuvem" className="-mb-1 w-full"/>

            <div className="bg-[#004924] py-5">
                <div className="mx-10 md:mx-20">
                    <div className="flex justify-between items-center flex-col md:flex-row gap-3">

                        <img src="logo.svg" alt="Logo do Chico no clima" className="w-full sm:w-1/2 md:w-1/4"/>

                        <div className="text-white flex flex-col gap-12">
                            <h4 className="font-bold text-lg">Saiba mais</h4>
                            <div >
                                <button className="">Repositório do site</button>
                                
                                <Link href={'https://www.instagram.com/chiconoclima/'} target="_blank">
                                    <div className="flex items-center gap-2 my-5">
                                        <FaInstagram className="text-xl"/>
                                        Conheça nosso Instagram
                                    </div>
                                </Link>

                                <Link href={'https://www.linkedin.com/company/chiconoclima/'} target="_blank">
                                    <div className="flex items-center gap-2 ">
                                        <CiLinkedin className="text-xl"/>
                                        Conheça nosso Linkedin
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-[#BBEE8A] my-12"></div>

                    <p className="text-center text-white font-bold">Todos os direitos reservados 2025</p>
                </div>
            </div>
        </footer>
    )
}