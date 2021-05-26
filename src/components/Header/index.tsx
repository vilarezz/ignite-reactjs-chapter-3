import { useState } from 'react'
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from './SingInButton'
import styles from './styles.module.scss'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function handleNavOpen() {
    setIsNavOpen(true)
  }
  function handleNavClose() {
    setIsNavOpen(false)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />

        <div
          id="nav-icon3"
          className={isNavOpen ? 'open' : ''}
          onClick={isNavOpen ? handleNavClose : handleNavOpen}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isNavOpen && (
          <div className={styles.mobile}>
            <SignInButton />
            <nav>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
              <ActiveLink activeClassName={styles.active} href="/posts">
                <a>Posts</a>
              </ActiveLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
