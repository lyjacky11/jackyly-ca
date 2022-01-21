import { FaHtml5, FaReact, FaPython } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiJava } from 'react-icons/si';
import styles from '../styles/Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skillIcons}>
                <div className={styles.icon}>
                    <FaHtml5 style={{ color: '#FF5722' }} />
                    <p>HTML5</p>
                </div>
                <div className={styles.icon}>
                    <SiCss3 style={{ color: '#1572B6' }} />
                    <p>CSS3</p>
                </div>
                <div className={styles.icon}>
                    <SiJavascript style={{ color: '#F0DB4F' }} />
                    <p>Javascript</p>
                </div>
                <div className={styles.icon}>
                    <FaReact style={{ color: '#00D8FF' }} />
                    <p>React</p>
                </div>
                <div className={styles.icon}>
                    <SiJava style={{ color: '#ED7E17' }} />
                    <p>Java</p>
                </div>
                <div className={styles.icon}>
                    <FaPython style={{ color: '#FFD43B' }} />
                    <p>Python</p>
                </div>
            </div>
        </div>
    )
}