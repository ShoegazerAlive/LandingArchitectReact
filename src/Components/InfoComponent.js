import React from 'react';
import infoImage from '../assets/images/img_2.jpeg';

const InfoComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section className="h-sc2 bg-primary w-screen">
                <div className="h-auto pt-14 flex justify-center">
                    <img className="xl:w-161 lg:w-161 md:w-161 sm:w-4/5 xl:h-sc_img lg:h-sc_img md:h-sc_img sm:h-sc_img2" src={infoImage} alt="" />
                </div>
                <div className="text-white text-center pt-10">
                    <h1 className="xl:text-5xl lg:text-5xl md:text-3xl font-light">
                    THE FIRM CREATES SUSTAINABLE <br />
                    <b>BUILDINGS AND SPACES</b>
                    </h1>
                    <h4 className="text-lg pt-5 sm:px-5">
                    Our buildings are shaped by their unique context, the creativity
                    imbued by our <br />
                    design teams and the vision of our clients.
                    </h4>
                </div>
                <div className="text-center pt-10 sm:pt-5">
                    <button
                    className="
                        rounded-sm
                        text-blue
                        bg-white
                        border border-white
                        px-12
                        py-2
                        transition
                        ease-in-out
                        duration-100
                        hover:bg-gray-100
                        border-gray-100
                    "
                    >
                    Learn more
                    </button>
                </div>
            </section>
        </div>
    )
}

export default InfoComponent
