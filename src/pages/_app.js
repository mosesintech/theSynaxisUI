import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../store'
import Layout from '../components/layout/Layout'
import '../assets/styles/globals.css'
import { withUrqlClient } from 'next-urql';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
}))(MyApp);