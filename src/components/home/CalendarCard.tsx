import { CalendarType } from "@/types/CalendarType"
import { CiLocationOn } from "react-icons/ci";

type Props = {
    item: CalendarType
}

export const CalendarCard = ({ item }: Props) => {
    return(
        <div className="bg-[#422AD0] p-2 text-white">
            <div>
                <div 
                    className="w-full h-46 bg-top bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${item.imagem})` }}
                >

                </div>
                <div>

                </div>
            </div>

            <div>
                <h6 className="mt-2 text-md">{item.titulo}</h6>
                <p className="flex gap-2 items-center">
                    <CiLocationOn />
                    {item.local}
                </p>
            </div>

            <button className="bg-white text-black w-full mt-4 py-3 text-sm cursor-pointer">
                Ir para o evento
            </button>
        </div>
    )
}