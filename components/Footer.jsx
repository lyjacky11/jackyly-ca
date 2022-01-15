import Link from 'next/link';
import { gitHubUrl, contactUrl, email } from '../constants';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Copyright {new Date().getFullYear()}, <Link href={gitHubUrl}><a target="_blank">Jacky Ly</a></Link>.</p>
            <p className={styles.email}><MdEmail /> <Link href={contactUrl}><a target="_blank">{email}</a></Link></p>
            <p>All trademarks and logos used are the property of their respective owners.</p>
        </footer>
    )
}