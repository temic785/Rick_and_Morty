"use client"
import styles from "./not-found.module.scss"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Ooops! This portal is <span className={styles.highlight}>broken</span>.<br />
        Looks like Rick left without a map.
      </h2>

      <Link href="/characters" className={styles.button}>
        Return to the Portal
      </Link>
    </div>
  )
}

export default NotFound
