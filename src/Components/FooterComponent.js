import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComponent = () => {
    return (
        <div className="max-w-screen-xl">
            <section className="w-screen h-sc_footer bg-secondary pt-14">
                <div className="text-white text-center">
                    <FontAwesomeIcon icon='copyright' /> ShoegazerAlive
                </div>
            </section>
        </div>
    )
}

export default FooterComponent
