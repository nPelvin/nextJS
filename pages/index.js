import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FT Tech Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Tech Test!</h1>

        <p className={styles.description}>
          Click &quot;View Project&quot; below to see it in action.
        </p>

        <div className={styles.grid}>
          <Link href="ft/">
            <a className={styles.card}>
              <h2>View Project &rarr;</h2>
              <p>Click to view project.</p>
            </a>
          </Link>

          <Link href="ft/">
            <a className={styles.card}>
              <h2>View ReadMe &rarr;</h2>
              <p>Learn about my thought process!</p>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>View on Heroku &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="http://lovestocode.com" target="_blank" rel="noreferrer">
          Created by Nige @ LovesToCode.com
        </a>
      </footer>
    </div>
  );
}