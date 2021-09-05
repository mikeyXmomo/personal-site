import { ThemeProvider } from 'next-themes'
import GlobalStyles from './../styles/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
