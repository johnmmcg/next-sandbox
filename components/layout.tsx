import Header from './header'
import Footer from './footer'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex h-full max-w-4xl flex-1 flex-grow flex-col items-start justify-start gap-2 self-center p-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
