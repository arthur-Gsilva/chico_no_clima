import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const DarkCloudSection = ({ children }: Props) => {
    return(
        <section>
            <img src="nuvem-azul-cima.svg" alt="nuvem" className="w-full -mb-1" />
            <div className="bg-[#1F1360]">
                <div className="mx-10 md:mx-20 xl:mx-auto max-w-7xl">
                    {children}
                </div>
            </div>
            <img src="nuvem-azul-baixo.svg" alt="nuvem" className="w-full -mt-1" />
        </section>
    )
}