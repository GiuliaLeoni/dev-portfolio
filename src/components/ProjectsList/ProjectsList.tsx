import { Project } from '../Project/Project';
import projectListStyles from './projectsList.module.scss';

export const ProjectsList = () => {
    return (
        <>
        <main className={projectListStyles.container}>
            <section className={projectListStyles.title}>
                <h1 className={projectListStyles.title}>Projects</h1>
            </section>
            <section className={projectListStyles.list}>
                <Project />
                <Project />
                <Project />
            </section>
        </main>
        </>
    )
}
