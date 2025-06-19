import { games } from "@/data/games"
import { GameItem } from "./GameItem"

export const GamesArea = () => {
    return(
        <div className="flex flex-col gap-10 items-center">
            {games.map((data) => (
                <GameItem key={data.title} game={data}/>
            ))}
        </div>
    )
}