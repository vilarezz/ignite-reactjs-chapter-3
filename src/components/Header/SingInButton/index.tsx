import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button type="button" className={styles.signInButton}>
      <img src={session.user.image} />
      {session.user.name}
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn()}
    >
      <FaGoogle color="#eba417" />
      Entre com o Google
    </button>
  )
}
