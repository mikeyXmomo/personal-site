import Contacts from '../components/contacts'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { Container, Wrapper } from '../styles/shared'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Ilham Assidiqy Basory</title>
        </Head>
        <Wrapper>
          <Contacts />
          <Footer />
        </Wrapper>
      </Container>
    </>
  )
}

export default contact
