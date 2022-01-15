import Link from 'next/link';
import Image from 'next/image';
import { FaLaptop, FaGithub } from 'react-icons/fa';
import styles from '../styles/Projects.module.css';

export default function Projects({ projects }) {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div className={styles.card} key={project.id}>
                        <Link href={project.url}><a target="_blank"><Image className={`${styles.thumbnail} animate`} alt="Thumbnail" src={project.thumbnail} width={256} height={144} /></a></Link>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.desc}>{project.desc}</p>
                        <Link href={project.url}><a target="_blank"><b><FaLaptop /> Live Demo</b></a></Link>
                        <b>&nbsp; | &nbsp;</b>
                        <Link href={project.github}><a target="_blank"><b><FaGithub /> Source Code</b></a></Link>
                        <p><b>Languages:</b> {project.langs}</p>
                        <p><b>Tools:</b> {project.tools}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}