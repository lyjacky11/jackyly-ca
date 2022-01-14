import ProjectItem from './ProjectItem';
import styles from '../styles/Projects.module.css';

export default function Projects({ projects }) {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectItem
                        key={project.id}
                        title={project.title}
                        desc={project.desc}
                        projectLink={project.url}
                    />
                ))}
                {/* <ProjectItem
                    projectLink="https://nextjs.org/docs"
                    title="Documentation"
                    desc="Find in-depth information about Next.js features and API."
                />

                <ProjectItem
                    projectLink="https://nextjs.org/learn"
                    title="Learn"
                    desc="Learn about Next.js in an interactive course with quizzes!"
                /> */}
            </div>
        </div>
    )
}