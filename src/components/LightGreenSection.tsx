import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const LightGreenSection = ({ children }: Props) => {
    return(
        <section className="w-full bg-[#E6F0EB] my-12 py-5">
            <div className="mx-10 md:mx-20">
                {children}
            </div>
        </section>
    )
}