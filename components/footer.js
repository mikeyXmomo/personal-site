import tw, { styled } from 'twin.macro'

const CopyrightText = styled.p`
  color: #8a8f98;
  ${tw`text-xs font-normal`}
  a {
    color: #fdb827;
    ${tw`no-underline`}
  }
`

const FooterWrapper = styled.div`
  ${tw`absolute flex flex-col items-center justify-center w-5/6 bottom-5 md:w-4/5`};
`

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightText>
        Copyright © {new Date().getFullYear()} All rights reserved.
      </CopyrightText>
      <CopyrightText>
        Made using{' '}
        <a
          href="https://github.com/vercel/next.js/"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://github.com/emotion-js/emotion"
          target="_blank"
          rel="noreferrer"
        >
          emotion
        </a>
        . Hosted on{' '}
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          Vercel
        </a>
      </CopyrightText>
    </FooterWrapper>
  )
}

export default Footer
