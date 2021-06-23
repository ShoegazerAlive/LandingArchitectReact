import React from 'react';
import img1 from '../assets/images/architecture-839362_640.jpeg';
import img2 from '../assets/images/architecture-2083687_640.jpeg';

const ImagesComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section className="w-screen h-sc_imgs flex">
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                    <img
                    className="h-sc_imgs"
                    src={img1}
                    alt=""
                    />
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                    <img
                    className="h-sc_imgs"
                    src={img2}
                    alt=""
                    />
                </div>
                <div className="xl:w-1/4 lg:w-1/4 xl:block lg:block md:hidden sm:hidden">
                    <img
                    className="h-sc_imgs"
                    src={img1}
                    alt=""
                    />
                </div>
                <div className="w-1/4 xl:block lg: block md:hidden sm:hidden">
                    <img
                    className="h-sc_imgs"
                    src={img2}
                    alt=""
                    />
                </div>
            </section>
        </div>
    )
}

export default ImagesComponent
