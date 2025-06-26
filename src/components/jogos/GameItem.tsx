import { GameType } from "@/types/GameType"
import Link from "next/link"

export const GameItem = ({ game }: { game: GameType }) => {
    return(
        <div 
            className="flex gap-12 h-full p-8 rounded-lg flex-col md:flex-row"
            style={{ backgroundColor: game.blue ? '#492EE5' : "#ADEA73",
                color: game.blue ? '#fff' : "#000"
            }}
        >
            <img src={game.image} alt={game.title} className="h-full w-auto max-h-[520px] max-w-[520px]"/>

            <div className="min-h-full flex flex-col justify-between">

                <h4 className="text-5xl font-bold" style={{ fontFamily: 'pixel' }}>{game.title}</h4>

                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold">Objetivo:</span> <p>{game.objective}</p>
                </div>

                <div className="flex flex-col gap-2 my-6">
                    <span className="text-lg font-bold">Desenvolvido em:</span> <p>{game.date}</p>
                </div>

                <div className="flex gap-6 flex-col sm:flex-row">
                    <Link href={game.link} target="_blank">
                        <button 
                            className="bg-[#ADEA73] p-2 md:p-5 rounded-xl w-full text-xl hover:opacity-70"
                            style={{ backgroundColor: game.blue ? '#ADEA73' : '#492EE5', color: game.blue ? '#492EE5' : '#ADEA73'}}
                        >
                                Acesse o Jogo!
                        </button>
                    </Link>

                    {game.gallery &&
                        <Link href={game.gallery} target="_blank">
                            <button 
                                className="bg-[#ADEA73] p-2 md:p-5 rounded-xl w-full  text-xl hover:opacity-70"
                                style={{ backgroundColor: game.blue ? '#ADEA73' : '#492EE5', color: game.blue ? '#492EE5' : '#ADEA73'}}
                            >
                                Acesse a galeria do jogo!
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}