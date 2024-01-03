import React from 'react'

import Froggers from '../assets/robots/froggers.jpg'
import Kevilry from '../assets/robots/froggers.jpg'
import Robbie from '../assets/robots/robbie.png'

export default function Gallery() {
    return (
        <section className='gallery'>
            <div className='galleryBox'>
                <div className='galleryHeader'>
                    Learn about our robots.
                </div>
                <div className='galleryBody'>
                    <div className='galleryImageContainer'>
                        <div className='galleryArrow galleryRight' onClick={toggleGalleryLeft}></div>
                        <img className='galleryImage' src={Froggers} alt={"Froggers"}></img>
                        <div className='galleryArrow galleryLeft'></div>
                    </div>
                </div>
                <div className='galleryCaption'>Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around.</div>
            </div>
        </section>

    )
}

let toggleGalleryLeft = () => {
    alert("hi");
}