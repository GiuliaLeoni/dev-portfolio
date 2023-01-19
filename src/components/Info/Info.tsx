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
                    {/* <p className={infoStyles.text}>Hi, I'm a <span>developer</span>, <br/> <span>designer</span>, <br/> <span>creative technologist</span>, <br/> who finds joy in the challenge of creating for people.</p> */}
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
