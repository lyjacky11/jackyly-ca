import Link from 'next/link';
import { gitHubUrl, projectsUrl } from '../constants';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutMe}>
            <h2>About Me</h2>
            <div className={styles.desc}>
                <p>Hi there! My name is Jacky Ly and I&apos;m currently a co-op student studying Computer Science at Ryerson University.</p>
                <p>I build and develop real-time web applications mainly in HTML5, CSS3, JavaScript, React, etc.</p>
                <p>I always try to learn about new technologies and create high-quality projects in my spare time!</p>
                <p>My <Link href={projectsUrl}><a target="_blank">projects</a></Link> are available on my <Link href={gitHubUrl}><a target="_blank">GitHub profile</a></Link>. Feel free to check out my resume or contact me by email!</p>
            </div>
        </div>
    )
}