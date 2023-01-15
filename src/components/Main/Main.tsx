import { Info } from "../Info/Info"
import mainStyles from './main.module.scss';

export const Main = () => {
    return (
        <>
            <main className={mainStyles.container}>
                <Info />
            </main>
        </> 
    )
}
