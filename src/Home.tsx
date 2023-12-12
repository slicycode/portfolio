import { useEffect, useState } from 'react'
import NavBar from './components/navbar'
import { Container, Box, Heading } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'
import styled from '@emotion/styled'
import Section from './components/section'
import Paragraph from './components/paragraph'
import Quote from './components/quote'
import Footer from './components/footer'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'

const StyleTypeWriter = styled.span`
  font-size: 36px;
  font-family: 'M PLUS ROUNDED 1c';
  padding-top: 100px;
`

const StyleSectionTitle = styled.span`
  font-family: 'M PLUS ROUNDED 1c';
`

const Home = () => {
  const { t } = useTranslation()

  const [quotes, setQuotes] = useState<any[]>([])

  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data)
      })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  const contactLink =
    i18n.language === 'en' ? "I'd love to hear from you!" : 'contactez-moi !'

  if (randomQuote) {
    randomQuote.author = randomQuote.author.replace(/, type\.fit/g, '')
  }

  return (
    <>
      <NavBar />
      <Container>
        <Section>
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1} zIndex={1} mt="50px">
              <Heading as="h2" variant="page-title">
                <StyleTypeWriter>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Hello,')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('My name is Jules Deparis')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('Bonjour, ')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Je m'appelle Jules Deparis")
                        .deleteAll()
                        .start()
                    }}
                  />
                </StyleTypeWriter>
              </Heading>
            </Box>
          </Box>
          <Heading as="h3" variant="section-title" paddingTop={10}>
            <StyleSectionTitle>{t('about_me')}</StyleSectionTitle>
          </Heading>
          <Paragraph indent>{t('paragraph1')}</Paragraph>
          <Paragraph>{t('paragraph2')}</Paragraph>
          <Paragraph>
            {t('paragraph3')}{' '}
            <a href="/contact" className="font-semibold text-blue-400">
              {contactLink}{' '}
            </a>
          </Paragraph>
          <Paragraph
            dangerouslySetInnerHTML={{
              __html: t('paragraph4'),
            }}
          />
          <Quote>
            {randomQuote ? randomQuote.text : null}{' '}
            <cite>- {randomQuote ? randomQuote.author : null}</cite>
          </Quote>
        </Section>
      </Container>
      <Footer />
    </>
  )
}

export default Home
