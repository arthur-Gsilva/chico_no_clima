import { GameType } from "@/types/GameType"

export const GameItem = ({ game }: { game: GameType }) => {
    return(
        <div 
            className="flex gap-12 h-full p-8 rounded-lg"
            style={{ backgroundColor: game.blue ? '#492EE5' : "#ADEA73",
                color: game.blue ? '#fff' : "#000"
            }}
        >
            <img src={game.image} alt={game.title} className="h-full w-auto max-h-[520px]"/>

            <div className="min-h-full flex flex-col justify-between">

                <h4 className="text-5xl font-bold" style={{ fontFamily: 'pixel' }}>{game.title}</h4>

                <div className="flex flex-col gap-4">
                    <span className="text-lg font-bold">Objetivo:</span> <p>{game.objective}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-lg font-bold">Desenvolvido em:</span> <p>{game.date}</p>
                </div>

                <div className="flex gap-6">
                    <button 
                        className="bg-[#ADEA73] p-5 rounded-xl w-1/2 text-xl"
                        style={{ backgroundColor: game.blue ? '#ADEA73' : '#492EE5', color: game.blue ? '#492EE5' : '#ADEA73'}}
                    >
                            Acesse o Jogo!
                    </button>
                    {game.gallery &&
                        <button 
                        className="bg-[#ADEA73] p-5 rounded-xl w-1/2 text-xl"
                        style={{ backgroundColor: game.blue ? '#ADEA73' : '#492EE5', color: game.blue ? '#492EE5' : '#ADEA73'}}
                    >
                            Acesse a galeria do jogo!
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}