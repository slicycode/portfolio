import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.6' }}
    >
      <Box className="w-fit mx-auto" opacity={0.6} fontSize="sm" mt={10}>
        &copy; {new Date().getFullYear()} {t('footer')}
      </Box>
    </motion.div>
  )
}

export default Footer
