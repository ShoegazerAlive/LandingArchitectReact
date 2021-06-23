import React from 'react';
import CardSwiper from './CardSwiper';

const CardComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section
                className="w-screen xl:h-sc_test lg:h-sc_test md:h-sc_test sm:h-sc_tables bg-bg-fourth bg-no-repeat bg-cover flex justify-end"> 
                <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 h-sc_tables sm:h-sc_ab justify-end px-10 pt-10 sm:pt-10">
                    <CardSwiper/>
                </div>
            </section>
        </div>
    )
}

export default CardComponent
