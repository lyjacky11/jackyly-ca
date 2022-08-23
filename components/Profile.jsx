import Link from 'next/link';
import Image from 'next/image';
import { Link as Scroll } from 'react-scroll';
import { avatarUrl, resumeUrl } from '../constants';
import styles from '../styles/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Scroll to="about" activeClass="active" spy={true}><Image className={styles.avatar} src={avatarUrl} alt="Avatar" width={175} height={175} /></Scroll>
            <h1 className={styles.displayName}>Jacky Ly</h1>
            <p className={styles.position}>Software Developer, Computer Science</p>
            <h3 className={styles.subtitle}>Ryerson University</h3>
            <div className={`${styles.resumeDiv} animate`}><Link href={resumeUrl}><a className={styles.resumeBtn} target="_blank">View Resume</a></Link></div>
        </div>
    )
}