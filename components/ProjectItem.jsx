import Link from 'next/link';
import styles from '../styles/Projects.module.css';

export default function ProjectItem({ projectLink, title, desc }) {
    return (
        <Link href={projectLink}>
            <a className={styles.card} target="_blank">
                <h2>{title}</h2>
                <p>{desc}</p>
            </a>
        </Link>
    )
}