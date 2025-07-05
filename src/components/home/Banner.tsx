export const Banner = () => {
    return(
        <div className="bg-gray-100 w-full h-[75vh] relative mb-32 bg-cover bg-center"
            style={{ backgroundImage: 'url(banner-img.png)' }}
        >
            <div className="absolute bottom-[-80px] w-full right-0">
                <img src="banner-main.svg" alt="banner" className="w-full"/>
                <img src="clouds.svg" alt="banner" className=" -mt-2 w-full"/>
            </div>
        </div>
    )
}