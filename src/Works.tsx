import NavBar from './components/navbar'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
} from '@chakra-ui/react'
import Section from './components/section'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import thumbMoonroll from './assets/moonroll.png'
import thumbCyc from './assets/cyc_thumbnail.png'
import thumbSkoonova from './assets/skoonova.png'
import thumbAesfa from './assets/aesfa.png'
import thumbPayzura from './assets/payzura.png'
import thumbKiabi from './assets/kiabi.png'
import thumbJobzura from './assets/jobzura.png'
import thumbFelix from './assets/felix.png'
import { Scrollbars } from 'react-custom-scrollbars'

const StyleSectionTitle = styled.span`
  font-family: 'M PLUS ROUNDED 1c';
`

const Works = () => {
  const { t } = useTranslation()

  return (
    <>
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <NavBar />
        <Container paddingTop={50}>
          <Section delay={0.2}>
            <Heading as="h2" variant="section-title">
              <StyleSectionTitle>{t('team_works')}</StyleSectionTitle>
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            <Section delay={0.3}>
              <a
                href="http://felix-dev.zento-shop.fr/en-US/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbFelix}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Aesfa Website"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Felix</h3>
              <p className="text-center">{t('felix')}</p>
            </Section>

            <Section delay={0.4}>
              <div>
                <Image
                  src={thumbKiabi}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Kiabi"
                />
                <h3 className="mt-2 text-xl text-center">Kiabi</h3>
                <p className="text-center">{t('kiabi')}</p>
              </div>
            </Section>

            <Section delay={0.5}>
              <a
                href="https://jobzura.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbJobzura}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Crypto Yoyo Club"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Jobzura</h3>
              <p className="text-center">{t('jobzura')}</p>
            </Section>

            <Section delay={0.6}>
              <a
                href="https://www.payzura.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbPayzura}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Payzura"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Payzura</h3>
              <p className="text-center">{t('payzura')}</p>
            </Section>
          </SimpleGrid>

          <Section>
            <Divider my={6} borderColor="#525252" />
          </Section>

          <Section delay={0.7}>
            <Heading as="h2" variant="section-title">
              <StyleSectionTitle>{t('solo_works')}</StyleSectionTitle>
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            <Section delay={0.8}>
              <a
                href="https://moonroll.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbMoonroll}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Moonroll.io"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Moonroll</h3>
              <p className="text-center">{t('moonroll')}</p>
            </Section>

            <Section delay={0.9}>
              <a
                href="https://skoonova.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbSkoonova}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Skoonova"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Skoonova</h3>
              <p className="text-center">{t('skoonova')}</p>
            </Section>

            <Section delay={1}>
              <a
                href="https://aesfa.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbAesfa}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Aesfa Website"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">AESFA</h3>
              <p className="text-center">{t('aesfa')}</p>
            </Section>

            <Section delay={1.1}>
              <a
                href="https://cryptoyoyoclub.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbCyc}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Crypto Yoyo Club"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Crypto Yoyo Club</h3>
              <p className="text-center">{t('cyc')}</p>
            </Section>
          </SimpleGrid>

          <Section>
            <Box opacity={0.6} fontSize="sm" pt={10} className="mx-auto w-fit">
              &copy; {new Date().getFullYear()} {t('footer')}
            </Box>
          </Section>
        </Container>
      </Scrollbars>
    </>
  )
}

export default Works
