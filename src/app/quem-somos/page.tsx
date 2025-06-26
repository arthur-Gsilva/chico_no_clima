import { DarkCloudSection } from "@/components/DarkCloudSection"
import { WhatIs } from "@/components/home/WhatIs"
import { LightGreenSection } from "@/components/LightGreenSection"
import { Chico } from "@/components/quem-somos/Chico"
import { WhoWork } from "@/components/quem-somos/WhoWork"

const page = () => {
    return(
        <>


            <div className="bg-gray-100 w-full h-[40vh] md:h-[75vh] -mb-16 bg-center bg-cover"
            style={{ backgroundImage: 'url(banner-img.png)' }}
        >

            </div>
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