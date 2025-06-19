import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const DarkCloudSection = ({ children }: Props) => {
    return(
        <section>
            <img src="nuvem-azul-cima.svg" alt="nuvem" className="w-full" />
            <div className="bg-[#1F1360]">
                <div className="mx-20">
                    {children}
                </div>
                
            </div>
            <img src="nuvem-azul-baixo.svg" alt="nuvem" className="w-full -mt-1" />
        </section>
    )
}