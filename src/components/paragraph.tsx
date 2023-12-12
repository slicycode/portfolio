import styled from '@emotion/styled'

interface ParagraphProps {
  children?: React.ReactNode
  dangerouslySetInnerHTML?: any
  indent?: boolean
}

const Paragraph = ({
  children,
  dangerouslySetInnerHTML,
  indent,
}: ParagraphProps) => {
  const StyleParagraph = styled.p`
    text-align: justify;
    text-indent: ${indent ? '2em' : '0'};
    padding-bottom: 1em;
    margin-top: 1em;
  `

  return (
    <StyleParagraph dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </StyleParagraph>
  )
}

export default Paragraph
