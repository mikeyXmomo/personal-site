import { LazyMotion, domAnimation } from 'framer-motion'

export default function LazyMotionComp({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
