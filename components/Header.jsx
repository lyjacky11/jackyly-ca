import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.leftNav}>
                <li className={styles.navItem}>
                    [LinkedIn]
                </li>
                <li className={styles.navItem}>
                    [GitHub]
                </li>
            </ul>
            <ul className={styles.rightNav}>
                <li className={styles.navItem}>
                    Home
                </li>
                <li className={styles.navItem}>
                    About
                </li>
                <li className={styles.navItem}>
                    Projects
                </li>
                <li className={styles.navItem}>
                    Skills
                </li>
            </ul>
        </nav>
    )
}