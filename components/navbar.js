import Link from 'next/link'
import { useEffect, useState } from 'react'
import Switch from './switch'
import tw, { styled } from 'twin.macro'
import { useTheme } from 'next-themes'

const NavbarContainer = styled.header`
  ${tw`flex flex-row items-center justify-center w-full bg-white dark:bg-gray-900`}
  min-height: 58px;
  backdrop-filter: blur(35px);
  box-shadow: 0px 4px 4px 0px #121212 25%;
  border-bottom: 1px solid #333;

  #header-logo {
    ${tw`w-10 mr-5`}
  }
`

const NavbarWrapper = styled.div`
  ${tw`flex items-center justify-between w-5/6 md:w-4/5`}
`

const Menu = styled.div`
  ${tw`h-full`}
`

const MenuItem = styled.a`
  ${tw`inline-flex items-center h-full px-1 text-xs font-normal tracking-tight text-gray-900 no-underline uppercase cursor-pointer dark:text-white md:font-bold md:text-sm md:px-4`}
`

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Menu>
          <Link id={'Home'} passHref href="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link id={'About'} passHref href="/about">
            <MenuItem>About</MenuItem>
          </Link>
          <Link id={'Journey'} passHref href="/journey">
            <MenuItem>Portofolio</MenuItem>
          </Link>
          <Link id={'Contact'} passHref href="/contact">
            <MenuItem>Contact</MenuItem>
          </Link>
        </Menu>
        <Switch
          isDark={theme === 'dark' ? true : false}
          onClick={handleToggle}
          mounted={mounted}
        />
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar
