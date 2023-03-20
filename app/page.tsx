import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CountParent from '../components/NewCounter/CountParent'
import List from '../components/List'
import FetchExample from '../components/FetchExample'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <CountParent />
      <div className="divider" />
      <List />
      <div className="divider" />
      <FetchExample />
    </main>
  )
}
