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
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
		    <meta name="title" content="Jacky Ly | Ryerson CS Co-op" />
		    <meta name="author" content="Jacky Ly" />
		    <meta name="description" content="Hi there! I'm Jacky Ly, a co-op student studying Computer Science at Ryerson University. Check out my projects on GitHub! - @lyjacky11" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Jacky Ly | Ryerson CS Co-op</title>
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
