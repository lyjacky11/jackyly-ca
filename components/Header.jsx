import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
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
                    <Scroll to="profile" spy={true}>Home</Scroll>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Scroll to="about" spy={true}>About</Scroll>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Scroll to="projects" spy={true}>Projects</Scroll>
                </li>
                <li className={`${styles.navItem} animate`}>
                    <Scroll to="skills" spy={true}>Skills</Scroll>
                </li>
            </ul>
        </nav >
    )
}