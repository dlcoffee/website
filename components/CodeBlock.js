import Highlight, { defaultProps } from 'prism-react-renderer'

const LineNo = ({ children }) => {
  return (
    <span
      style={{
        paddingRight: '1em',
        userSelect: 'none',
        opacity: 0.5,
      }}
    >
      {children}
    </span>
  )
}

const CodeBlock = ({ children, className, linenos }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{ ...style, padding: '20px', marginBottom: '15px' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {linenos && <LineNo>{i + 1}</LineNo>}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
