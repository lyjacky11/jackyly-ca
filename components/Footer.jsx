import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Copyright 2022, <Link href="https://github.com/lyjacky11"><a target="_blank">Jacky Ly</a></Link>.</p>
            <p className={styles.email}><MdEmail /> <Link href="mailto:jacky@jackyly.ca"><a target="_blank">jacky@jackyly.ca</a></Link></p>
            <p>All trademarks and logos used are the property of their respective owners.</p>
        </footer>
    )
}