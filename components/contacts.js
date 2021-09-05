import tw, { styled } from 'twin.macro'
import { m as motion } from 'framer-motion'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'
import LazyMotionComp from './animations/lazymotion'
import { Container, Wrapper } from '../styles/shared'

const ManStanding = styled.img`
  height: 600px;
  @media (max-width: 800px) {
    height: 557px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`

const ContactContainer = styled(motion.div)`
  ${tw`flex flex-row items-center justify-center w-full`}
`

const ContactInfo = styled(motion.div)`
  ${tw`flex flex-col`}
`

const ContactTitle = styled(motion.h1)`
  ${tw`left-0 right-0 mx-auto text-4xl font-black text-left text-gray-900 dark:text-white md:text-7xl`}
  .yellow-text {
    color: #fdb827 !important;
  }
`

const ContactList = styled(motion.div)`
  ${tw`flex flex-row items-center mt-8 `}
  .contact-icon {
    ${tw`pr-3 text-4xl text-gray-900 dark:text-white`}
  }
`

const ContactListName = styled.h3`
  ${tw`hidden text-lg font-normal leading-8 text-gray-900 md:block md:text-xl dark:text-white`}
`

const ContactListLink = styled.a`
  ${tw`text-lg font-normal leading-8 no-underline md:text-xl`}
  color: #fdb827;
`

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const contacts = () => {
  return (
    // <Container>
    //   <Wrapper>
    <LazyMotionComp>
      <ContactContainer
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <ManStanding src="/people-chat.png" />
        <ContactInfo variants={stagger}>
          <ContactTitle variants={fadeInUp}>
            You can <span className="yellow-text">reach out</span> via socials
            below:{' '}
          </ContactTitle>
          <ContactList variants={fadeInUp}>
            <AiFillGithub className="contact-icon" />
            <ContactListName>Github - </ContactListName>
            <ContactListLink
              href="https://github.com/mikeyXmomo"
              target="_blank"
            >
              {' '}
              https://github.com/mikeyXmomo
            </ContactListLink>
          </ContactList>
          <ContactList variants={fadeInUp}>
            <AiFillTwitterCircle className="contact-icon" />
            <ContactListName>Twitter - </ContactListName>
            <ContactListLink
              href="https://twitter.com/mikeyxmomo"
              target="_blank"
            >
              {' '}
              https://twitter.com/mikeyxmomo
            </ContactListLink>
          </ContactList>
          <ContactList variants={fadeInUp}>
            <AiFillLinkedin className="contact-icon" />
            <ContactListName>Linkedin - </ContactListName>
            <ContactListLink
              href="https://www.linkedin.com/in/ilham-assidiqy-40984b15b/"
              target="_blank"
            >
              {' '}
              https://www.linkedin.com/in/ilham-assidiqy-40984b15b/
            </ContactListLink>
          </ContactList>
        </ContactInfo>
      </ContactContainer>
    </LazyMotionComp>
    //   </Wrapper>
    // </Container>
  )
}

export default contacts
