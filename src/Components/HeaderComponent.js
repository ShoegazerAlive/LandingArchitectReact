import React from 'react'

const HeaderComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section
            className="
                bg-bg-first
                w-screen
                xl:h-sc
                lg:h-sc_test
                md:h-sc_img2
                sm:h-sc_imgs
                bg-cover bg-center bg-no-repeat
                relative
                flex
                justify-end
                text-white
            "
            >
            <div className="flex flex-col justify-end pb-10 mx-auto">
                <div className="text-right text-1xl xl:text-xl md:text-sm pb-5">
                <b>COMMUNITY & INSPIRATION</b>
                </div>
                <div className="font-light xl:text-6xl lg:text-6xl md:text-3xl sm:text-3xl">
                WHAT ARE <b>MINIMALIST</b> DESIGNS?
                </div>
            </div>
            </section>
        </div>
    )
}

export default HeaderComponent
