import projectStyles from './project.module.scss';

export const Project = () => {
    return (
        <section className={projectStyles.container}>
            <h1 className={projectStyles.title}>this is a project</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <h4 className={projectStyles.techStack}>tech stack</h4>
        </section>
    )
}
