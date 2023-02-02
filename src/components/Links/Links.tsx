import { Link } from 'react-router-dom';
import linksStyles from './links.module.scss';

// import linkedin from '../../assets/icons/linkedin.svg';
// import github from '../../assets/icons/github.svg';
// import email from '../../assets/icons/email.svg';
// import cv from '../../assets/icons/cv.svg';

import { LinkedIn, Github, Email, Cv, Arrow } from '../Icons';


export const Links = () => {
    return (
        <>
            <section className={linksStyles.linksSection}>
                
                <section>
                    <h3 className={linksStyles.projects}>projects</h3>
                    {/* <span>arrow</span> */}
                    <Arrow />
                </section>


                {/* <section className={linksStyles.links}>
                    <section className={linksStyles.link}>   
                        <Link to='/about'>about me</Link>
                    </section>
                    <section className={linksStyles.link}>
                        <a href="https://github.com/GiuliaLeoni" target="_blank">Github</a> 
                    </section>
                    <section className={linksStyles.link}>
                        <a href="https://www.linkedin.com/in/g-leoni/" target="_blank">Linkedin</a>
                    </section>
                    <section className={linksStyles.link}>
                        <a href="/">leonig255@gmail.com</a>
                    </section>
                </section> */}

                <section className={linksStyles.links}>
                    {/* <img src="linkedin" alt="linkedin"/> */}
                    <LinkedIn />
                    <Github />
                    <Cv />
                    <Email />
                </section>

            </section>
        </>
    )
}
