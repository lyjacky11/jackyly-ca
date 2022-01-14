import ProjectItem from './ProjectItem';
import styles from '../styles/Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                <ProjectItem
                    projectLink="https://nextjs.org/docs"
                    title="Documentation &rarr;"
                    desc="Find in-depth information about Next.js features and API."
                />

                <ProjectItem
                    projectLink="https://nextjs.org/learn"
                    title="Learn &rarr;"
                    desc="Learn about Next.js in an interactive course with quizzes!"
                />

                <ProjectItem
                    projectLink="https://nextjs.org/docs"
                    title="Documentation &rarr;"
                    desc="Find in-depth information about Next.js features and API."
                />

                <ProjectItem
                    projectLink="https://nextjs.org/learn"
                    title="Learn &rarr;"
                    desc="Learn about Next.js in an interactive course with quizzes!"
                />

                <ProjectItem
                    projectLink="https://nextjs.org/docs"
                    title="Documentation &rarr;"
                    desc="Find in-depth information about Next.js features and API."
                />

                <ProjectItem
                    projectLink="https://nextjs.org/learn"
                    title="Learn &rarr;"
                    desc="Learn about Next.js in an interactive course with quizzes!"
                />
            </div>
        </div>
    )
}