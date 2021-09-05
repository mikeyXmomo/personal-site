import Head from 'next/head'
import Footer from '../components/footer'
import Home from '../components/home'
import Navbar from '../components/navbar'
import Star from '../components/star'
import { Container, Wrapper } from '../styles/shared'

const index = () => (
  <>
    <Navbar />
    <Container>
      <Star />
      <Head>
        <title>Ilham Assidiqy Basory</title>
      </Head>
      <Wrapper>
        <Home />
        <Footer />
      </Wrapper>
    </Container>
  </>
)

export default index
