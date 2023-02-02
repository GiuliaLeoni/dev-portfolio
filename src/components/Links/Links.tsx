import { Link } from 'react-router-dom'
import { Arrow } from '../Arrow/Arrow'
import linksStyles from './links.module.scss'

export const Links = () => {
    return (
        <>
            <section className={linksStyles.linksSection}>
                
                <section>
                    <h3>projects</h3>
                    <span>arrow</span>
                </section>


                <section className={linksStyles.links}>
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
                </section>

            </section>
        </>
    )
}
