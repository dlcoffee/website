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

const CodeBlock = ({ children }) => {
  if (!children || children.type !== 'code') {
    return null
  }

  const {
    props: { className, children: code = '', linenos },
  } = children

  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{
              ...style,
              padding: '20px',
              overflow: 'auto',
              marginBottom: '15px',
            }}
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
