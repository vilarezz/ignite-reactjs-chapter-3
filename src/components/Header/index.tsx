import { useState } from 'react'
import NextLink from 'next/Link'
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
          <NextLink href="/">
            <a className={styles.active}>Home</a>
          </NextLink>
          <NextLink href="/posts">
            <a>Posts</a>
          </NextLink>
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
              <a href="/" className={styles.active}>
                Home
              </a>
              <a href="/posts">Posts</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
