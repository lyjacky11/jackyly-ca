import Link from 'next/link';
import styles from '../styles/Projects.module.css';

export default function Projects({ projects }) {
    return (
        <div id="projects" className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <Link href={project.url} key={project.id}>
                        <a className={styles.card} target="_blank">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}