export const Banner = () => {
    return(
        <div className="bg-gray-100 w-full h-[75vh] relative mb-32 bg-cover bg-center"
            style={{ backgroundImage: 'url(banner-img.png)' }}
        >
            <div className="absolute bottom-[-80px] w-full">
                <img src="banner-main.svg" alt="banner" className=""/>
                <img src="clouds.svg" alt="banner" className=" -mt-2"/>
            </div>
        </div>
    )
}