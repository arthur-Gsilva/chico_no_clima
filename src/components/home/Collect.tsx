import { CollectCardGreen, CollectCardPurple } from "./CollectCard"

export const Collect = () => {
    return(
        <div className="flex flex-col items-center gap-12">
            <div className="flex items-center gap-6">
                <img src="chiquinho.svg" alt="chiquinho" />
                <h2 className="text-white text-3xl">Chiquinho e Lila na coleta!</h2>
                <img src="lila.svg" alt="Lila" />
            </div>

            <div className="grid grid-cols-2 gap-10 max-w-3xl">
                <CollectCardPurple />
                <CollectCardGreen />
            </div>
        </div>
    )
}