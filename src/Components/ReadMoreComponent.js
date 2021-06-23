import React from 'react'

const ReadMoreComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section className="h-sc_ab w-screen flex">
                <div
                    className="bg-bg-second bg-no-repeat bg-cover w-1/2 text-right pr-10 pt-10"
                >
                    <h2 className="text-5xl"><b>ABOUT</b> US</h2>
                    <p className="text-right py-10 xl:text-xl">
                    Sample text. Click to select the text <br />
                    box. Click again or double click to <br />
                    start editing the text.
                    </p>
                    <button
                    className="
                        rounded-sm
                        bg-white
                        text-black
                        bg-gray-200
                        px-6
                        py-1
                        transition
                        duration-100
                        ease-in-out
                        hover:bg-black
                        border-black
                        hover:text-white
                    "
                    >
                    <b>READ MORE</b>
                    </button>
                </div>
                <div
                    className="
                    bg-bg-third bg-no-repeat bg-cover
                    w-1/2
                    text-left
                    pl-10
                    pt-10
                    text-white
                    "
                >
                    <h2 className="text-5xl"><b>ABOUT</b> US</h2>
                    <p className="text-left py-10 xl:text-xl">
                    Sample text. Click to select the text <br />
                    box. Click again or double click to <br />
                    start editing the text.
                    </p>
                    <button
                    className="
                        rounded-sm
                        text-white
                        bg-black
                        px-6
                        py-1
                        transition
                        duration-100
                        ease-in-out
                        hover:bg-white
                        border-black
                        hover:text-black
                    "
                    >
                    <b>READ MORE</b>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ReadMoreComponent
