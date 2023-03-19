import { Inter } from 'next/font/google'
import styles from './page.module.css'

import ThemeSample from '../components/ThemeSample'
import Card from '../components/Card'
import Counter from '../components/Counter'
import WindowSize from '../components/WindowSize'
import Stopwatch from '../components/Stopwatch'
import Timer from '../components/Timer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header className="text-center">
        <h1 className="text-3xl">John's Sandbox</h1>
        <h2 className="text-2xl">Next + React + TailwindCSS + DaisyUI Boilerplate</h2>
      </header>
      <div className="grid h-auto w-full max-w-4xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        <Card>
          <WindowSize />
        </Card>
        <Card>
          <ThemeSample />
        </Card>
        <Card>
          <Counter />
        </Card>
        <Card>
          <Timer />
        </Card>
        <Card>
          <Stopwatch />
        </Card>
      </div>
    </main>
  )
}
