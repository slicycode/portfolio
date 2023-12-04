import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#FCEBD4', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: '28',
        textUnderlineOffset: 10,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 30,
        paddingBottom: 4,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  headling: 'M PLUS ROUNDED 1c',
}

const colors = {
  glassTeal: '#88ccca',
}

const config = {
  initialColorMode: localStorage.getItem('chakra-ui-color-mode') || 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, colors, fonts })

export default theme
