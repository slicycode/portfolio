import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box className="w-fit mx-auto" opacity={0.6} fontSize="sm" mt={20}>
      &copy; {new Date().getFullYear()} {t('footer')}
    </Box>
  )
}

export default Footer
