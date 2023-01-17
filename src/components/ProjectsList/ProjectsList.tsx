import { Project } from '../Project/Project';
import projectListStyles from './projectsList.module.scss';

export const ProjectsList = () => {
    return (
        <>
        <main className={projectListStyles.container}>
            <section className={projectListStyles.title}>
                <h1>Projects</h1>
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
