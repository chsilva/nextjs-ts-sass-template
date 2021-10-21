import { Header, Footer } from 'components'
import { ReactNode } from 'react'

import styles from './Layout.module.scss'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export { Layout }
