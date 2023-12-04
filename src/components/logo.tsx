import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const LogoBox = styled.span`
  font-size: 20px;
  display: inline-flex;
  height: 30px;
  line-height: 20px;
`

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Jules Deparis
        </Text>
      </LogoBox>
    </NavLink>
  )
}

export default Logo
