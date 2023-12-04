import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import 'simplebar-react/dist/simplebar.min.css'

import Fonts from './components/fonts'
import theme from './components/theme'
import Home from './Home'
import CV from './CV'
import Works from './Works'
import Projects from './Projects'
import Contact from './Contact'
import NotFound from './NotFound'

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
