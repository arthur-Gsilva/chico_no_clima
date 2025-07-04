import { DarkCloudSection } from "@/components/DarkCloudSection"
import { Banner } from "@/components/home/Banner"
import { Calendar } from "@/components/home/Calendar"
import { Collect } from "@/components/home/Collect"
import { Cop30 } from "@/components/home/Cop30"
import { WhatIs } from "@/components/home/WhatIs"
import { LightGreenSection } from "@/components/LightGreenSection"

const page = () => {
    return(
        <>
            <Banner />

            <LightGreenSection>
                <Calendar />
            </LightGreenSection>

            <DarkCloudSection>
                <Cop30 />
            </DarkCloudSection>

            <LightGreenSection>
                <WhatIs />
            </LightGreenSection>

            <DarkCloudSection>
                <Collect />
            </DarkCloudSection>

        </>
    )
}

export default page