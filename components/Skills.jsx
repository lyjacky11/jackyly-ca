import Image from 'next/image';
import styles from '../styles/Skills.module.css';

export default function Skills() {
    return (
        <>
            <h2>Skills</h2>
            <div className={styles.skills}>
                <div className={styles.avatarDiv}>
                    <Image className={styles.avatar} src="/img/profile.png" alt="Avatar" width={50} height={50} />
                </div>
                <div className={styles.avatarDiv}>
                    <Image className={styles.avatar} src="/img/profile.png" alt="Avatar" width={50} height={50} />
                </div>
                <div className={styles.avatarDiv}>
                    <Image className={styles.avatar} src="/img/profile.png" alt="Avatar" width={50} height={50} />
                </div>
            </div>
        </>
    )
}