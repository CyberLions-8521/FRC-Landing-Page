import { React, useEffect } from 'react'
import logo from '../assets/cyberlions.png'
import cadding from '../assets/cadding.jpg'
import kevilry from "../assets/kevilry.jpg"

export default function Home() {

    /* Checks if elements are intersecting with view port, applies .show class on intersecting elements */
    useEffect(() => { //Rechecks on page refresh
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                }
              });
          });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

  return (
    <>
        <div className='hero-container'>
            <section className='hero-container-content'>
                <div className='hero-logo-background'>
                    <img src={logo} alt='hero-logo' />
                </div>
                <article className='hero-content-text'>    
                    <h1>
                        The Cyberlions;
                    </h1>
                    <p>
                        Leading the technical savannah with pride in progress
                    </p>
                </article>
            </section>
            <section className='section-divider'>
                <div className='hero-section-divider'>
                    <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                        <path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' class='shape-fill'></path>
                    </svg>
                </div>
                <section className='section-container hidden'>
                    <section className="section-container-background">
                        <img src={cadding} alt='cadding' />
                        <div className="section-container-text">    
                            <h1>We Are A High School Team Based in Westminster, CA</h1>
                            <p>Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability.</p>
                        </div>
                    </section>
                </section>
                <section className='section-container horizontal-flip hidden'>
                    <section className="section-container-background">
                        <img src={kevilry} alt='cadding' />
                        <div className="section-container-text">    
                            <h1>We Compete In The FIRST Robotics Competition</h1>
                            <p>FRC is an international competition where teams fundraise, design, build, and program a robot each year to compete in games involving various tasks, which change annually.</p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    </>
  )
}
