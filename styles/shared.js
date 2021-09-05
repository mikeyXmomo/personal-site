import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  height: 85vh;
  ${tw`flex flex-row items-center justify-center w-screen`};
`

export const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-5/6 md:w-4/5`};
`
