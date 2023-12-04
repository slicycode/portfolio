import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './dialog'
import SimpleBar from 'simplebar-react'
import { LuLoader2 } from 'react-icons/lu'
import { FaFilePdf, FaExpand } from 'react-icons/fa'
import { Document, Page } from 'react-pdf'
import { useResizeDetector } from 'react-resize-detector'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface PdfFullscreenProps {
  fileUrl: string
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [numPages, setNumPages] = useState<number>()
  const { t } = useTranslation()

  const { width, ref } = useResizeDetector()

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v: boolean) => {
        if (!v) {
          setIsOpen(v)
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" className="gap-1.5" aria-label="fullscreen">
          <FaExpand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full gap-0">
        <div className="mb-3">
          <Button
            className="gap-1.5"
            aria-label="download"
            variant="ghost"
            as="a"
            href={fileUrl}
            download
          >
            <FaFilePdf className="inline-block mr-2" />
            {t('downloadButton')}
          </Button>
        </div>
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)] mt-6">
          <div ref={ref}>
            <Document
              loading={
                <div className="flex justify-center">
                  <LuLoader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              file={fileUrl}
              className="max-h-full"
            >
              <Page width={width ? width : 1} pageNumber={1} />
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  )
}

export default PdfFullscreen
