import { serverUrl, pageTitle, pageDesc, pageAuthor, pageTheme, faviconUrl, imageUrl } from '../constants';
import projects from '../projects.json';
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
		    <meta name="title" content={pageTitle} />
		    <meta name="author" content={pageAuthor} />
		    <meta name="description" content={pageDesc} />
        <meta name="theme-color" content={pageTheme} />
        <link rel="shortcut icon" href={faviconUrl} />
        <title>{pageTitle}</title>
        
        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={pageDesc} />
        <meta itemProp="image" content={imageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serverUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={imageUrl} />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={serverUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDesc} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <Header />
      <div id="home" />
      <main className={styles.main}>
        <Profile />
        <div id="about" />
        <About />
        <div id="projects" />
        <Projects projects={projects} />
        <div id="skills" />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

// Fetch from API
// export const getStaticProps = async () => {
//   const res = await fetch(`${serverUrl}/api/projects`);
//   const projects = await res.json();
//   return  {
//     props: {
//       projects
//     }
//   }
// }
