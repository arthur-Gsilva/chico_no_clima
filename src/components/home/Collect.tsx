import { CollectCardGreen, CollectCardPurple } from "./CollectCard"

export const Collect = () => {
    return(
        <div className="flex flex-col items-center gap-12">
            <div className="flex items-center gap-3 md:gap-6">
                <img src="chiquinho.svg" alt="chiquinho" className="w-16 h-16 sm:w-24 sm:h-24 md:w-auto md:h-full"/>
                <h2 className="text-white">Chiquinho e Lila na coleta!</h2>
                <img src="lila.svg" alt="Lila" className="w-16 h-16 sm:w-24 sm:h-24 md:w-auto md:h-full"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
                <CollectCardPurple />
                <CollectCardGreen />
            </div>
        </div>
    )
}