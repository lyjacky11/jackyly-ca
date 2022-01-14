import Image from 'next/image';
import styles from '../styles/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Image className={styles.avatar} src="/img/profile.png" alt="Avatar" width={175} height={175} />
            <h2 className={styles.displayName}>Jacky Ly</h2>
            {/* <div id="typed-strings">
                <p>Computer Science Co-op.</p>
                <p>A Web Developer.</p>
                <p>A Programmer.</p>
            </div> */}
            <p className={styles.position} id="typed">Computer Science Co-op</p>
            <h3 className={styles.subtitle}>Ryerson University</h3>
            <p>[View Resume]</p>
        </div>
    )
}