import { Link } from 'react-router-dom';
import infoStyles from './info.module.scss';

export const Info = () => {
    return(
        <>
            <main className={infoStyles.container}>
                <section className={infoStyles.description}>
                    <p className={infoStyles.text}>Hi, I'm a developer, <br/> designer, <br/> creative technologist, <br/> who loves creating for people.</p>
                </section>

                <section className={infoStyles.links}>
                    <Link to='/about'>about me</Link>
                    <a href="https://github.com/GiuliaLeoni" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/g-leoni/" target="_blank">Linkedin</a>
                    <a href="/">leonig255@gmail.com</a>
                </section>
            </main>
        </>
        
    )
}
