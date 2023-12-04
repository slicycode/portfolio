import NavBar from './components/navbar'
import {
  Icon,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Container,
  Heading,
} from '@chakra-ui/react'
import Section from './components/section'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

const StyleSectionTitle = styled.span`
  font-family: 'M PLUS ROUNDED 1c';
`

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value

    if (email === '') {
      setEmailError('')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(`${t('emailErrorMessage')}`)
    } else {
      setEmailError(`${t('emailSuccessMessage')}`)
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    validateEmail(e)
  }

  const submit = () => {
    if (!email) {
      setEmailError(`${t('emailErrorMessage')}`)
    }

    if (name && email && message) {
      const serviceId = 'service_syangmc'
      const templateId = 'template_y0gtxer'
      const userId = 'user_Tgzkz19ruiaSBkEDIC3bI'
      const templateParams = {
        name,
        email,
        message,
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error))

      setName('')
      setEmail('')
      setMessage('')
      setEmailError('')
    } else {
      alert('Please fill in all fields.')
    }
  }

  const { t } = useTranslation()

  return (
    <>
      <NavBar />
      <Container paddingTop={50}>
        <Section>
          <Heading as="h2" variant="section-title" paddingTop={10}>
            <StyleSectionTitle>{t('contact')}</StyleSectionTitle>
          </Heading>

          {/*  Contact form */}
          <form className="flex flex-col mb-3" method="POST">
            <label className="my-3 w-full border-b border-[#525252]">
              <input
                className="my-3 w-full bg-transparent outline-none placeholder:text-[#868686]"
                autoFocus
                type="text"
                name="name"
                placeholder={t('placeholder1')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label
              style={{
                borderBottomColor:
                  emailError === ''
                    ? '#525252'
                    : 'green' && emailError === `${t('emailSuccessMessage')}`
                    ? 'green'
                    : 'red',
              }}
              className="my-3 w-full border-b border-[#525252]"
            >
              <input
                className="my-3 w-full bg-transparent outline-none placeholder:text-[#868686]"
                type="email"
                name="email"
                placeholder={t('placeholder2')}
                value={email}
                onChange={onChangeEmail}
              ></input>
            </label>

            <span
              style={{
                color:
                  emailError === `${t('emailSuccessMessage')}`
                    ? 'green'
                    : 'red',
              }}
            >
              {emailError}
            </span>

            <small className="text-[#757575] italic">{t('small')}</small>
            <label className="my-3 w-full border-b border-[#525252]">
              <input
                className="my-3 w-full bg-transparent outline-none placeholder:text-[#868686]"
                type="text"
                name="message"
                placeholder={t('placeholder3')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </label>
          </form>
          <Button
            display="flex"
            className="mx-auto"
            onClick={submit}
            variant="outline"
            colorScheme="teal"
          >
            {t('send')}
          </Button>
          <span className={emailSent ? 'visible' : ''}></span>
        </Section>

        {/* Links */}
        <Section delay={0.3}>
          <List className="flex mt-16 justify-around">
            <ListItem>
              <Link href="https://github.com/slicycode" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaGithub} />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jules-deparis-881613219/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Slicy__" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/elroulio_/?hl=en"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box opacity={0.6} fontSize="sm" className="mx-auto w-fit" mt="300px">
            &copy; {new Date().getFullYear()} {t('footer')}
          </Box>
        </Section>
      </Container>
    </>
  )
}

export default Contact
