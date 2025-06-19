import { DarkCloudSection } from "@/components/DarkCloudSection"
import { WhatIs } from "@/components/home/WhatIs"
import { LightGreenSection } from "@/components/LightGreenSection"
import { Chico } from "@/components/quem-somos/Chico"
import { WhoWork } from "@/components/quem-somos/WhoWork"

const page = () => {
    return(
        <>
            <DarkCloudSection>
                <WhatIs dark={true}/>
            </DarkCloudSection>

            <LightGreenSection>
                <Chico />
            </LightGreenSection>

            <DarkCloudSection>
                <WhoWork />
            </DarkCloudSection>
        </>
    )
}

export default page