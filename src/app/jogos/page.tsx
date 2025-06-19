import { DarkCloudSection } from "@/components/DarkCloudSection"
import { About } from "@/components/jogos/About"
import { GamesArea } from "@/components/jogos/GamesArea"
import { LightGreenSection } from "@/components/LightGreenSection"

const page = () => {
    return(
        <>
            <DarkCloudSection>
                <About />
            </DarkCloudSection>

            <LightGreenSection>
                <GamesArea />
            </LightGreenSection>
        </>
    )
}

export default page