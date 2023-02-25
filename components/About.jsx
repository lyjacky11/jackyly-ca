import Link from 'next/link';
import { gitHubUrl, projectsUrl } from '../constants';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutMe}>
            <h2>About Me</h2>
            <div className={styles.desc}>
                <p>Hi there, I am Jacky! I specialize in building real-time web applications using HTML/CSS, JavaScript, React, and more.</p>
                <p>I am passionate about learning new technologies and creating high-quality projects in my spare time!</p>
                <p>With experience in front-end and back-end development, I am skilled in creating robust and scalable solutions that meet user needs.</p>
                <p>My <Link href={projectsUrl}><a target="_blank">projects</a></Link> are available on my <Link href={gitHubUrl}><a target="_blank">GitHub profile</a></Link>. Feel free to check out my resume or contact me by email!</p>
            </div>
        </div>
    )
}