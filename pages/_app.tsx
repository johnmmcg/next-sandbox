import { SessionProvider } from 'next-auth/react'
import './tailwind.css'
import './globals.css'

import type { AppProps } from 'next/app'
import { Session } from 'next-auth'

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
