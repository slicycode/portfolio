import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import i18n from '../i18n'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const changeLanguage = (ln: string) => {
  return () => {
    i18n.changeLanguage(ln)
  }
}

const NavBar = () => {
  const { t } = useTranslation()

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      width="100%"
      bg={useColorModeValue('#F0E7DB', '#202023b')}
      backdropFilter="blur(10px)"
      zIndex={1}
    >
      <Container
        display="flex"
        py={2}
        px={{
          base: 2,
          sm: 4,
          xl: 0,
        }}
        maxW="container.lg"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          className="stack"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={{
            base: 1,
            lg: 2,
          }}
          paddingLeft={{
            md: 20,
            lg: '88px',
          }}
          mt={{ base: 4, nmd: 0 }}
          justifyContent={'space-evenly'}
        >
          <NavLink
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            className="font-medium"
            to="/cv"
          >
            CV
          </NavLink>
          <NavLink
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            className="font-medium"
            to="/works"
          >
            {t('navbarItemWorks')}
          </NavLink>
          <NavLink
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            className="font-medium"
            to="/projects"
          >
            {t('navbarItemProjects')}
          </NavLink>
          <NavLink
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            className="font-medium"
            to="/contact"
          >
            Contact
          </NavLink>
        </Stack>

        <Box
          flex={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            marginRight={1}
            variant="ghost"
            colorScheme="purple"
            onClick={changeLanguage('en')}
          >
            EN
          </Button>
          <Button
            variant="ghost"
            colorScheme="purple"
            marginRight={5}
            onClick={changeLanguage('fr')}
          >
            FR
          </Button>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NavLink to="/">
                  <MenuItem as={Link}>{t('menuItemHome')}</MenuItem>
                </NavLink>
                <NavLink to="/cv">
                  <MenuItem as={Link}>CV</MenuItem>
                </NavLink>
                <NavLink to="/works">
                  <MenuItem as={Link}>{t('navbarItemWorks')}</MenuItem>
                </NavLink>
                <NavLink to="/projects">
                  <MenuItem as={Link}>{t('navbarItemProjects')}</MenuItem>
                </NavLink>
                <NavLink to="/contact">
                  <MenuItem as={Link}>Contact</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
