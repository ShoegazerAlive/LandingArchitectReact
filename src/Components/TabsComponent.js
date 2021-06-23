import React from 'react';
import imgTabs from '../assets/images/pexels-photo-1824392.jpeg';

        const TabsComponent = () => {
            
            const tabs = document.querySelectorAll('[data-tab-target]');
            const tabContents = document.querySelectorAll('[data-tab-content');

            tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => tabContent.classList.remove('active'))
                target.classList.add('active')
            })
        })

    return (
        <div className="max-w-screen-xl">
            <section className="w-screen h-sc_tables bg-primary">
                <ul className="flex justify-center pt-10 space-x-1">
                    <button className="pr-16" data-tab-target='#Description'>DESCRIPTION</button>
                    <button className="pr-16" data-tab-target='#Specifications'>SPECIFICATIONS</button>
                    <button data-tab-target='#Reviews'>REVIEWS</button>
                </ul>
                <div className="tab-content">
                    <div id="Description" className="active flex justify-center content-center text-white" data-tab-content>
                    <p className="text-center xl:text-xl lg:text-xl md:text-base sm:text-sm py-5 sm:px-7">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute <br className="xl:block lg:block md:block sm:hidden"/> irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="w-full flex justify-center content-center">
                        <img className="w-auto h-sc_imgs" src={imgTabs} alt=""></img>
                    </div>
                    <p className="text-center xl:text-xl lg:text-xl md:text-base sm:text-sm py-5 sm:px-7">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute <br className="xl:block lg:block md:block sm:hidden"/> irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div id="Specifications" className="flex flex-col justify-center content-center text-white" data-tab-content>
                    <p className="text-center xl:text-2xl lg:text-xl md:text-base xl:py-20 lg:py-20 md:px-10 sm:px-7">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in <br/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="text-center xl:text-2xl lg:text-xl md:text-base md:px-10 sm:px-7">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br/> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div id="Reviews" className="flex flex-col justify-center content-center text-white" data-tab-content>
                    <h1 className="text-center text-5xl pt-20 pb-10">Be The First To Review This Product!</h1>
                    <p className="text-center xl:text-xl lg:text-xl md:text-base sm:px-10">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <div className="w-full flex justify-center content-center pt-10">  
                        <button className="
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
                        hover:text-white
                        hover:border-black
                        ">WRITE PRODUCT REVIEW</button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TabsComponent
