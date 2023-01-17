import { Info } from "../Info/Info"
import { ProjectsList } from "../ProjectsList/ProjectsList";
import mainStyles from './main.module.scss';

export const Main = () => {
    return (
        <>
            <main className={mainStyles.container}>
                <Info />
                <ProjectsList />
            </main>
        </> 
    )
}
