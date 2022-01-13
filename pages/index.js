import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AIDML: AI Data Management Ltd</title>
        <meta name="description" content="AIDML: AI Data Management Ltd ... Coming Soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          AI-DML 👋 Hello world!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://phyna-ci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Phyna CI
        </a>
      </footer>
    </div>
  )
}
