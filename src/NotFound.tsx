import NavBar from './components/navbar'

import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavBar />
      <Container>
        <Heading paddingTop={300} as="h1">
          404 Not found
        </Heading>
        <Text paddingTop={10}>{t('notfound')}</Text>
        <Divider my={6} />

        <Box my={6} alignContent="center">
          <NavLink to="/">
            <Button colorScheme="teal" variant="outline">
              {t('notfound_button')}
            </Button>
          </NavLink>
        </Box>
      </Container>
    </>
  )
}

export default NotFound
