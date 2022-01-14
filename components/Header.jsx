import Link from 'next/link';
import { linkedinUrl, gitHubUrl, contactUrl, resumeUrl } from '../constants';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.leftNav}>
                <li className={`${styles.navItem} animate`}>
                    <Link href={linkedinUrl}><a target="_blank"><FaLinkedin /></a></Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href={gitHubUrl}><a target="_blank"><FaGithub /></a></Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href={contactUrl}><a target="_blank"><MdEmail /></a></Link>
                </li>
            </ul>
            <ul className={styles.rightNav}>
                <li className={`${styles.navItem} animate`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href="/">About</Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href="/">Projects</Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href="/">Skills</Link>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Link href={resumeUrl}>Resume</Link>
                </li>
            </ul>
        </nav >
    )
}