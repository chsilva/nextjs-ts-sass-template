import { Layout } from 'components'
import type { AppProps } from 'next/app'

import 'styles/root.scss'

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
