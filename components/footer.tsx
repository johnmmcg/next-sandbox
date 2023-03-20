import Link from 'next/link'
import styles from './footer.module.css'
import packageJSON from '../package.json'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className="h-1 w-full" />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/policy">Policy</Link>
        </li>
      </ul>
    </footer>
  )
}
