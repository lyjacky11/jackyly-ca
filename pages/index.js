import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import styles from '../styles/main.module.css';

export default function Main() {
  return (
    <div>
      <Head>
        <title>Jacky Ly | Ryerson CS Co-op</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Profile />
        <br />
        <About />
        <br />
        <Projects />
        <br />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
