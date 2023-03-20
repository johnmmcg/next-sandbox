import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './header.module.css'
import { useRouter } from 'next/router'

const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/client', label: 'Client' },
  { path: '/server', label: 'Server' },
  { path: '/protected', label: 'Protected' },
  { path: '/api-example', label: 'API' },
  { path: '/admin', label: 'Admin' },
  { path: '/me', label: 'Me' },
]

const NavLink = ({ path, label }: { path: string; label: string }) => {
  const { pathname } = useRouter()
  const isActive = () => pathname === path
  return (
    <li className="flex-1">
      <Link
        href={path}
        className={`btn-ghost btn w-full text-center text-xl ${isActive() && 'btn-active'}`}
      >
        {label}
      </Link>
    </li>
  )
}

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${!session && loading ? styles.loading : styles.loaded}`}>
          {!session && (
            <>
              <span className={styles.notSignedInText}>You are not signed in</span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav className="flex w-full place-content-center">
        <ul className="navbar max-w-4xl gap-2">
          {ROUTES.map((route) => (
            <NavLink key={route.path} {...route} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
