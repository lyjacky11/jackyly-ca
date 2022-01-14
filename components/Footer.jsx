import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Copyright 2022, Jacky Ly.</p>
            <p>[Email Icon]: <Link href="mailto:jacky@jackyly.ca"><a target="_blank">jacky@jackyly.ca</a></Link></p>
            <p>All trademarks and logos used are the property of their respective owners.</p>
        </footer>
    )
}