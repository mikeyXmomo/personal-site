import tw, { styled } from 'twin.macro'
import { keyframes } from '@emotion/react'
const shootingAnimation = keyframes`
0% {
    
}
50% {
  transform:scale(1) rotate(-45deg) translate(0px, 0px);
}
100% {
  transform:scale(0.5) rotate(-45deg) translate(0px, -1px);
}
`

const starAnimation = keyframes`
 0% {
    opacity:0;
    transform:scale(0) rotate(0) translate3d(0, 0, 0);
  }
  50% {
    opacity:1;
    transform:scale(1) rotate(0) translate3d(-200px, 200px, 0);
  }
  100% {
    opacity:0;
    transform:scale(1) rotate(0) translate3d(-300px, 300px, 0);
  }
`

const Stars = styled.span`
  ${tw`top-0 right-0 hidden w-1 h-1 bg-white rounded-full md:block md:relative`}
  left: 1000px;
  top: -100px;
  transform-origin: 100% 0;
  animation: ${starAnimation} 1s infinite ease-out;
  animation-direction: normal;
  opacity: 0;

  :after {
    content: '';
    position: absolute;
    top: 0px;
    left: 4px;
    border: 2px solid #f00;
    border-width: 2px 150px 2px 150px;
    border-color: transparent transparent transparent #fff;
    transform: rotate(-45deg) translate3d(1px, -1px, 0);
    transform-origin: 0% 100%;
    animation: ${shootingAnimation} 1s infinite ease-out;
    animation-direction: normal;
  }
`

const StarsPink = styled(Stars)`
  top: 150px;
  left: 500px;
  background: #ff5a99;
  animation-delay: 1.8s;

  :after {
    border-color: transparent transparent transparent #ff5a99;
    animation-delay: 1.8s;
  }
`

const StarsBlue = styled(Stars)`
  top: 100px;
  left: 450px;
  background: #4dabff;
  animation-delay: 4.5s;
  :after {
    border-color: transparent transparent transparent #4dabff;
    animation-delay: 4.5s;
  }
`
const StarsYellow = styled(Stars)`
  top: 50px;
  left: 600px;
  background: #ffcd5c;
  animation-delay: 5.8s;
  :after {
    border-color: transparent transparent transparent #ffcd5c;
    animation-delay: 5.8s;
  }
`

const star = () => {
  return (
    <div>
      <Stars className="star"></Stars>
      <StarsPink className="star pink"></StarsPink>
      <StarsBlue className="star blue"></StarsBlue>
      <StarsYellow className="star yellow"></StarsYellow>
    </div>
  )
}

export default star
