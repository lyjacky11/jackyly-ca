import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

const gitHubUrl = 'https://github.com/lyjacky11';
const contactUrl = 'mailto:jacky@jackyly.ca';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Copyright {new Date().getFullYear()}, <Link href={gitHubUrl}><a target="_blank">Jacky Ly</a></Link>.</p>
            <p className={styles.email}><MdEmail /> <Link href={contactUrl}><a target="_blank">jacky@jackyly.ca</a></Link></p>
            <p>All trademarks and logos used are the property of their respective owners.</p>
        </footer>
    )
}