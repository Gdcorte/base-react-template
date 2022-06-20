import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { FunctionComponent, ReactNode } from 'react'

interface TranslationProps {
  children: ReactNode
}

interface CustomAppProps extends AppProps {
  Component: any,
}

const EmptyLayout: FunctionComponent<TranslationProps> = ({children}) => { return( <>{children}</> )}

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  
  const Layout = Component.Layout || EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)
