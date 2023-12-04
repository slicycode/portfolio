import { useState } from 'react'
import CV_FR from './assets/pdf/CV_FR.pdf'
import CV_EN from './assets/pdf/CV_EN.pdf'
import NavBar from './components/navbar'
import { Button, useColorMode } from '@chakra-ui/react'
import { pdfjs, Document, Page } from 'react-pdf'
import { useResizeDetector } from 'react-resize-detector'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { LuLoader2, LuRotateCw } from 'react-icons/lu'
import SimpleBar from 'simplebar-react'

import PdfFullscreen from './components/pdf-fullscreen'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/dropdown-menu'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import i18n from './i18n'
import { FaFilePdf } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

const CVPage = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  const [pdf, setPdf] = useState<string>(i18n.language === 'fr' ? CV_FR : CV_EN)

  i18n.on('languageChanged', (lng) => {
    if (lng === 'fr') {
      setPdf(CV_FR)
    } else {
      setPdf(CV_EN)
    }
  })

  const [numPages, setNumPages] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [renderedScale, setRenderedScale] = useState<number | null>(null)

  const isLoading = renderedScale !== scale

  const { width, ref } = useResizeDetector()

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages)
  }

  return (
    <>
      <NavBar />
      <div className="mt-5 h-14 w-full flex items-center justify-between max-w-4xl mx-auto">
        <div>
          <Button
            className="gap-1.5"
            aria-label="download"
            variant="ghost"
            as="a"
            href={pdf}
            download
          >
            <FaFilePdf className="inline-block mr-2" />
            {t('downloadButton')}
          </Button>
        </div>

        <div className="space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                <SearchIcon className="h-4 w-4" />
                {scale * 100}%
                <ChevronDownIcon className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={colorMode === 'dark' ? 'bg-[#202023]' : 'bg-[#FCEBD4]'}
            >
              <DropdownMenuItem onSelect={() => setScale(0.5)}>
                50%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(0.75)}>
                75%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={() => setRotation((prev) => prev + 90)}
            variant="ghost"
            aria-label="rotate 90 degrees"
          >
            <LuRotateCw className="h-4 w-4" />
          </Button>

          <PdfFullscreen fileUrl={pdf} />
        </div>
      </div>
      <div className="flex-1 w-full max-h-screen max-w-4xl mx-auto">
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)]">
          <div ref={ref}>
            <Document
              file={pdf}
              className="max-h-full"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex justify-center">
                  <LuLoader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
            >
              {isLoading && renderedScale ? (
                <Page
                  width={width ? width : 1}
                  pageNumber={pageNumber}
                  scale={scale}
                  rotate={rotation}
                  key={'@' + renderedScale}
                />
              ) : null}
              <Page
                className={
                  isLoading
                    ? 'hidden'
                    : colorMode === 'dark'
                    ? '!bg-[#202023]'
                    : '!bg-[#FCEBD4]'
                }
                width={width ? width : 1}
                pageNumber={pageNumber}
                scale={scale}
                rotate={rotation}
                key={'@' + scale}
                loading={
                  <div className="flex justify-center">
                    <LuLoader2 className="my-24 h-6 w-6 animate-spin" />
                  </div>
                }
                onRenderSuccess={() => setRenderedScale(scale)}
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </>
  )
}

export default CVPage
