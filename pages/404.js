import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Error.module.css';

export default function Error404() {
  return (
    <section className={styles.container}>
      <Head>
        <meta name="title" content="404 | Page Not Found" />
        <title>404 | Page Not Found</title>
      </Head>
      <div className={styles.content}>
        <Image className={styles.image} src="/img/monkey.png" alt="Error" width={150} height={150} />
        <h1 className={styles.title}>404</h1>
        <h1 className={styles.subtitle}>Page Not Found!</h1>
        <br />
        <Link href="/">
          <a className={styles.button}>Back to Home</a>
        </Link>
      </div>
    </section>
  );
}