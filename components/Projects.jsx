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
            </div>
        </div>
    )
}