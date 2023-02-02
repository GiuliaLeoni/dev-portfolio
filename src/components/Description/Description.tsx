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
        
                   <h4>who finds <strong className={descrStyles.sub}>joy</strong> in the challenge of <strong className={descrStyles.sub}>creating for people</strong></h4>
                   <p>
                        <strong>Graduate designer </strong>
                        - currently
                        <strong> Full-Stack Designer Intern @ Autone</strong>
                        <br /> 
                        Interested in 
                        <strong> interaction </strong>
                        and designing and building
                        <strong> outstanding user experiences</strong>
                    </p>
            </section>
        </>
    )
}
