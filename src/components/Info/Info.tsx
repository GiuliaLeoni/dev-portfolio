import { Link } from 'react-router-dom';
import { Description } from '../Description/Description';
import { Links } from '../Links/Links';
import infoStyles from './info.module.scss';


export const Info = () => {
    return(
        <>
            <main className={infoStyles.container}>
                <Description />
            </main>
        </>
        
    )
}
