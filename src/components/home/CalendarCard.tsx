import { CalendarType } from "@/types/CalendarType"
import { CiLocationOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "../Button";

type Props = {
    item: CalendarType
}

export const CalendarCard = ({ item }: Props) => {
    return(
        <div className="bg-[#422AD0] p-2 text-white">
            <div className="relative">
                <div 
                    className="w-full h-46 bg-top bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${item.imagem})` }}
                >

                </div>
                <div className="absolute bottom-0 left-0 flex text-xl" style={{ fontFamily: 'pixel' }}>
                    <div className="bg-white w-10 h-10 flex items-center justify-center  text-[#006733] border-r-1">{item.dia}</div>
                    <div className="bg-white w-10 h-10 items-center flex justify-center  text-[#006733]">{item.mes}</div>
                </div>
            </div>

            <div>
                <h6 className="mt-2 text-md">{item.titulo}</h6>
                <p className="flex gap-2 items-center">
                    <CiLocationOn />
                    {item.local}
                </p>
            </div>

            <Button 
                link=""
                title="Ir para o evento"
            />
        </div>
    )
}