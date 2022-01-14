import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import styles from '../styles/main.module.css';

const pageTitle = 'Jacky Ly | Ryerson CS Co-op';
const pageDesc = 'Hi there! I am Jacky Ly, a co-op student studying Computer Science at Ryerson University. Check out my projects on GitHub! - @lyjacky11';
const pageAuthor = 'Jacky Ly';
const pageTheme = '#1A3A59';

const websiteUrl = 'https://jackyly.ca/';
const faviconUrl = '/favicon.ico';
const imageUrl = websiteUrl + 'img/cover.png';

export default function Main({ projects }) {
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
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={imageUrl} />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDesc} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <Header />
      <main className={styles.main}>
        <Profile />
        <About />
        <Projects projects={projects} />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  // need to change this URL
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();
  return  {
    props: {
      projects
    }
  }
}
