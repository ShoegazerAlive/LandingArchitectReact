import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section className="w-screen h-sc_cont bg-primary text-white flex">
                <div className="w-1/2 h-full text-center pt-20">
                    <h1 className="text-5xl"><b>CONTACT</b> US</h1>
                    <div className="flex justify-center pt-5">
                       <a href="http://localhost:3000/"><div className="pr-5"> <FontAwesomeIcon icon={['fab', 'facebook']} size="3x"/></div></a>
                       <a href="http://localhost:3000/"> <div className="pr-5"> <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" /></div></a>
                        <a href="http://localhost:3000/"><div> <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" /></div></a>
                    </div>
                    <div className="flex flex-col pt-10">
                        <h1 className="text-4xl">1 (234) 567-891</h1>
                        <h1 className="text-4xl pt-5">1 (234) 567-891</h1>
                    </div>
                </div>
                <div className="w-1/2 h-full pt-20 md:pt-28 justify-center">
                    <p className="xl:text-2xl lg:text-lg text-justify px-40 md:px-28 sm:px-10 leading-relaxed ">
                    Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet
                    convallis erat. Class aptent taciti sociosqu ad litora torquent per
                    conubia! Maecenas gravida lacus nec dolor suscipit faucibus.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ContactComponent
