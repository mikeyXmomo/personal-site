import tw, { styled } from 'twin.macro'
import { m as motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Wrapper } from '../styles/shared'
import LazyMotionComp from './animations/lazymotion'

const PrimaryButton = styled(motion.button)`
  ${tw`h-12 px-5 text-base font-bold text-black border-0 rounded-lg cursor-pointer `}
  background-color: #fdb827;
`
const SecondaryButton = styled(motion.button)`
  ${tw`h-12 px-5 mx-0 mt-4 text-base font-bold text-black bg-gray-200 border-0 rounded-lg cursor-pointer md:ml-3 md:mt-0 dark:bg-white`}
`

const ButtonHolders = styled(motion.div)`
  ${tw`grid justify-center py-3 mx-auto my-0 mt-8 md:flex `}

  #about-me-btn:hover {
    background-color: rgba(253, 184, 39, 0.6);
  }
  #portfolios-btn:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`

const HomeTitle = styled(motion.h1)`
  ${tw`top-0 left-0 w-full mx-auto text-4xl font-black text-center text-gray-900 dark:text-white md:text-8xl`}
  .yellow-text {
    color: #fdb827 !important;
  }
`

const HomeSubtitle = styled(motion.p)`
  ${tw`left-0 right-0 w-full mx-auto mt-4 text-base font-normal leading-8 text-center text-gray-900 md:text-xl md:w-3/5 dark:text-white`}
  a {
    text-decoration: none;
  }
  .yellow-text {
    color: #fdb827 !important;
  }
`

const HandRaise = styled.img`
  right: 10%;
  width: 12%;
  ${tw`absolute bottom-0 hidden md:block`}
`

const WavingHandImage = styled.img`
  max-width: 7%;
  display: inline;
  @media (max-width: 500px) {
    max-width: 12%;
  }
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

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <LazyMotionComp>
          <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
            <motion.div variants={stagger}>
              <HomeTitle variants={fadeInUp}>
                Hey there{' '}
                <WavingHandImage
                  src="/waving-hand.png"
                  alt="hand waving emoji"
                />
                <br />
                <span>I&apos;m </span>
                <span className="yellow-text">Ilham </span>
                <span>Assidiqy</span>
              </HomeTitle>

              <HomeSubtitle variants={fadeInUp}>
                I am a Web enthusiast and
                <span className="yellow-text">
                  {' '}
                  Full Stack Javascript Developer
                </span>{' '}
                . I am passionate about technologies and love to learn new
                things. Thinking “out of the box” is my middle name
              </HomeSubtitle>

              <ButtonHolders variants={fadeInUp}>
                <Link passHref href="/about">
                  <PrimaryButton
                    whileHover={{ translateY: 10 }}
                    whileTap={{ scale: 0.8 }}
                    id="about-me-btn"
                    type="button"
                  >
                    About me
                  </PrimaryButton>
                </Link>
                <Link passHref href="/portfolio">
                  <SecondaryButton
                    whileHover={{ translateY: 10 }}
                    whileTap={{ scale: 0.8 }}
                    id="portfolios-btn"
                    type="button"
                  >
                    🤓 Let’s see portfolios
                  </SecondaryButton>
                </Link>
              </ButtonHolders>
            </motion.div>
          </motion.div>
        </LazyMotionComp>

        <HandRaise src="/raise-hand.png"></HandRaise>
      </Wrapper>
    </Container>
  )
}

export default Home
