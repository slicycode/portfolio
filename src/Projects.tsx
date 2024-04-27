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
import thumbPrismic from './assets/prismic.png'
import thumbFuzzie from './assets/fuzzie.png'
import thumbUnolingo from './assets/unolingo.png'
import thumbFiledrive from './assets/filedrive.png'
import thumbPromptify from './assets/promptify.png'
import thumbMessengerClone from './assets/messengerclone.png'
import thumbTwitterClone from './assets/twitterclone.png'
import thumbLinkedinClone from './assets/linkedinclone.png'
import thumbEcommerceClone from './assets/ecommerceclone.png'
import thumbTeslaClone from './assets/tesla.gif'
import thumbNFTApp from './assets/nft.mp4'
import thumbAiVideos from './assets/aistock.mov'
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
            {/* FUTURE REACT & NEXT.JS PROJECTS */}
            <Section delay={0.3}>
              <a
                href="https://prismic-ai.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbPrismic}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Prismic"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Glisten AI</h3>
              <p className="text-center">{t('prismic')}</p>
            </Section>

            <Section delay={0.4}>
              <a
                href="https://fuzzie-opal.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbFuzzie}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Fuzzie"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Fuzzie</h3>
              <p className="text-center">{t('fuzzie')}</p>
            </Section>

            <Section delay={0.5}>
              <a
                href="https://unolingo.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbUnolingo}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="Unolingo"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">Unolingo</h3>
              <p className="text-center">{t('unolingo')}</p>
            </Section>

            <Section delay={0.6}>
              <a
                href="https://file-drive-wine.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={thumbFiledrive}
                  className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out min-h-[130px] object-cover"
                  alt="FileDrive"
                />
              </a>
              <h3 className="mt-2 text-xl text-center">FileDrive</h3>
              <p className="text-center">{t('filedrive')}</p>
            </Section>

            <Section delay={0.7}>
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
              <h3 className="mt-2 text-xl text-center">Messenger Clone</h3>
              <p className="text-center">{t('messengerclone')}</p>
            </Section>

            <Section delay={0.8}>
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
              <h3 className="mt-2 text-xl text-center">Promptify</h3>
              <p className="text-center">{t('promptify')}</p>
            </Section>

            <Section delay={0.9}>
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
              <h3 className="mt-2 text-xl text-center">Ecommerce App</h3>
              <p className="text-center">{t('ecommerceclone')}</p>
            </Section>

            <Section delay={1}>
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
              <h3 className="mt-2 text-xl text-center">LinkedIn Clone</h3>
              <p className="text-center">{t('linkedinclone')}</p>
            </Section>

            <Section delay={1.1}>
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
              <h3 className="mt-2 text-xl text-center">Twitter Clone</h3>
              <p className="text-center">{t('twitterclone')}</p>
            </Section>
          </SimpleGrid>

          <Section>
            <Divider my={6} borderColor="#525252" />
          </Section>

          <Section delay={1.2}>
            <Heading as="h2" variant="section-title">
              <StyleSectionTitle>{t('projects_2')}</StyleSectionTitle>
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            {/* FUTURE REACT NATIVE PROJECTS */}

            <Section delay={1.3}>
              <a
                href="https://github.com/slicycode/ai-videos-share"
                rel="noopener noreferrer"
                target="_blank"
              >
                <video
                  className="transition-transform duration-300 ease-in-out rounded-xl hover:scale-105"
                  src={thumbAiVideos}
                  typeof="video/mp4"
                  autoPlay
                  loop
                  muted
                />
              </a>
              <h3 className="mt-2 text-xl text-center">AI Videos Share</h3>
              <p className="text-center">{t('aivideoshare')}</p>
            </Section>

            <Section delay={1.4}>
              <a
                href="https://github.com/slicycode/nft-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <video
                  className="transition-transform duration-300 ease-in-out rounded-xl hover:scale-105"
                  src={thumbNFTApp}
                  typeof="video/mp4"
                  autoPlay
                  loop
                  muted
                />
              </a>
              <h3 className="mt-2 text-xl text-center">NFT-like App</h3>
              <p className="text-center">{t('nftapp')}</p>
            </Section>

            <Section delay={1.5}>
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
              <h3 className="mt-2 text-xl text-center">Basic Tesla Clone</h3>
              <p className="text-center">{t('teslaclone')}</p>
            </Section>
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
