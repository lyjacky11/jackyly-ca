import Link from 'next/link';
import Image from 'next/image';
import { avatarUrl, resumeUrl } from '../constants';
import styles from '../styles/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Image className={styles.avatar} src={avatarUrl} alt="Avatar" width={175} height={175} />
            <h1 className={styles.displayName}>Jacky Ly</h1>
            <p className={styles.position}>Web Developer, Computer Science Co-op</p>
            <h3 className={styles.subtitle}>Ryerson University</h3>
            <div className={`${styles.resumeDiv} animate`}><Link href={resumeUrl}><a className={styles.resumeBtn} target="_blank">View Resume</a></Link></div>
        </div>
    )
}