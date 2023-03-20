import Layout from '../components/layout'

import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className={`${inter.className} flex h-full w-full flex-col items-center`}>
        <h1 className="m-4 text-4xl">John's Next Sandbox</h1>
      </div>
    </Layout>
  )
}
