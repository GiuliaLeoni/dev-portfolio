import { Link } from 'react-router-dom';
import infoStyles from './info.module.scss';


export const Info = () => {
    return(
        <>
            <main className={infoStyles.container}>

                <section className={infoStyles.description}>
                    <section className={infoStyles.top}>
                        <p className={infoStyles.text}>Hi, I'm a </p>
                            <section className={infoStyles.interactiveText}>
                                <p><span>developer</span>,</p>
                                <p><span>designer</span>,</p>
                                <p><span>creative technologist</span>,</p>
                            </section>
                    </section>
                    <p className={infoStyles.text}>who finds joy in the challenge of creating for people.</p>
                </section>

                <section className={infoStyles.links}>
                    <section className={infoStyles.link}>
                        <section className={infoStyles.arrow}></section>
                        <Link to='/about'>about me</Link>
                    </section>
                    <section className={infoStyles.link}>
                        <section className={infoStyles.arrow}></section>
                        <a href="https://github.com/GiuliaLeoni" target="_blank">Github</a> 
                    </section>
                    <section className={infoStyles.link}>
                    <section className={infoStyles.arrow}></section>
                        <a href="https://www.linkedin.com/in/g-leoni/" target="_blank">Linkedin</a>
                    </section>
                    <section className={infoStyles.link}>
                    <section className={infoStyles.arrow}></section>
                        <a href="/">leonig255@gmail.com</a>
                    </section>
                </section>
            </main>
        </>
        
    )
}
