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
                
                <section className={linksStyles.projects}>
                    <h3 className={linksStyles.projectText}>projects</h3>
                    {/* <span>arrow</span> */}
                    <Arrow />
                </section>

                <section className={linksStyles.links}>
                    {/* <img src="linkedin" alt="linkedin"/> */}
                    <section style={{marginBottom: '0.8rem'}}><LinkedIn /></section>
                    <section style={{marginBottom: '0.8rem'}}><Github /></section>
                    <section style={{marginBottom: '0.8rem'}}><Cv /></section>
                    <section><Email /></section>
                </section>

            </section>
        </>
    )
}
