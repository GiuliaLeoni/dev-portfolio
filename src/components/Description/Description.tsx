import descrStyles from './description.module.scss';
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Description = () => {

    

    return (
        <>
            <section>

                <section className={descrStyles.title}>
                    <h1 className={descrStyles.titleText}>creative developer</h1>
                   <FontAwesomeIcon className={descrStyles.icon} icon={faRainbow} size="2x" bounce
                   style={{paddingTop: '1.3rem'}}/>
                </section>
        
                   <h4>who finds joy in the challenge of creating for people</h4>
                   <p>Graduate designer - currently Full-Stack Designer Intern @ Autone
Interested in interaction and designing and building outstanding user experiences</p>
            </section>
        </>
    )
}
