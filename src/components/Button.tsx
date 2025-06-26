import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa"

type Props = {
    link: string,
    title: string
}

export const Button = ({ link, title }: Props) => {
    return(
        <Link href={link} target="_blank">
            <button className="bg-[#99E550] text-black w-full mt-4 p-3 text-sm cursor-pointer flex items-center gap-2 rounded-md justify-center border border-[#1f1360] hover:opacity-70">
                {title}
                <FaLongArrowAltRight />
            </button>
        </Link>
    )
}