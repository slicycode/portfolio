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
import thumbPromptify from './assets/promptify.png'
import thumbMessengerClone from './assets/messengerclone.png'
import thumbTwitterClone from './assets/twitterclone.png'
import thumbLinkedinClone from './assets/linkedinclone.png'
import thumbEcommerceClone from './assets/ecommerceclone.png'
import thumbToDoList from './assets/todolist.gif'
import thumbTeslaClone from './assets/tesla.gif'
import thumbNFTApp from './assets/nft.mp4'
import { Scrollbars } from 'react-custom-scrollbars'

const StyleSectionTitle = styled.span`
  font-family: 'M PLUS ROUNDED 1c';
`

const Projects = () => {
  const { t } = useTranslation()

  return (
    <>
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <NavBar />
        <Container paddingTop={50}>
          <Section delay={0.2}>
            <Heading as="h2" variant="section-title">
              <StyleSectionTitle>{t('projects_1')}</StyleSectionTitle>
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            <Section delay={0.3}>
              <a
                href="https://messenger-clone-orpin.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbMessengerClone}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Messenger Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-2">Messenger Clone</h3>
              <p className="text-center">{t('messengerclone')}</p>
            </Section>

            <Section delay={0.3}>
              <a
                href="https://promptify-five.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbPromptify}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Promptify"
                />
              </a>
              <h3 className="text-xl text-center mt-2">Promptify</h3>
              <p className="text-center">{t('promptify')}</p>
            </Section>

            <Section delay={0.35}>
              <a
                href="https://ecommerce-sanity-stripe-rho.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbEcommerceClone}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Ecommerce Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-2">Ecommerce Clone</h3>
              <p className="text-center">{t('ecommerceclone')}</p>
            </Section>

            <Section delay={0.35}>
              <a
                href="https://linkedin-clone-taupe.vercel.app/home"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbLinkedinClone}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Linkedin Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-2">LinkedIn Clone</h3>
              <p className="text-center">{t('linkedinclone')}</p>
            </Section>

            <Section delay={0.4}>
              <a
                href="https://github.com/slicycode/twitter-clone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbTwitterClone}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Twitter Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-2">Twitter Clone</h3>
              <p className="text-center">{t('twitterclone')}</p>
            </Section>

            {/* FUTURE REACT & NEXT.JS PROJECTS */}
          </SimpleGrid>

          <Section>
            <Divider my={6} borderColor="#525252" />
          </Section>

          <Section delay={0.5}>
            <Heading as="h2" variant="section-title">
              <StyleSectionTitle>{t('projects_2')}</StyleSectionTitle>
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            <Section delay={0.45}>
              <a
                href="https://github.com/slicycode/nft-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <video
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={thumbNFTApp}
                  typeof="video/mp4"
                  autoPlay
                  loop
                  muted
                />
              </a>
              <h3 className="text-xl text-center mt-2">NFT-like App</h3>
              <p className="text-center">{t('nftapp')}</p>
            </Section>

            <Section delay={0.5}>
              <a
                href="https://github.com/slicycode/teslaClone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbTeslaClone}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Twitter Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-2">Basic Tesla Clone</h3>
              <p className="text-center">{t('teslaclone')}</p>
            </Section>

            <Section delay={0.55}>
              <a
                href="https://github.com/slicycode/todoList"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbToDoList}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Amazon Clone"
                />
              </a>
              <h3 className="text-xl text-center mt-3">Basic Todo list</h3>
              <p className="text-center">{t('todolist')}</p>
            </Section>

            {/* FUTURE REACT NATIVE PROJECTS */}
          </SimpleGrid>

          <Section>
            <Box opacity={0.6} fontSize="sm" mt={20} className="mx-auto w-fit">
              &copy; {new Date().getFullYear()} {t('footer')}
            </Box>
          </Section>
        </Container>
      </Scrollbars>
    </>
  )
}

export default Projects
