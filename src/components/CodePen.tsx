'use client'

import { useEffect } from 'react'

export default function CodePen({ codePenId }: { codePenId: string }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <p
      className="codepen"
      data-height="300"
      data-default-tab="html,result"
      data-slug-hash={codePenId}
      data-user="dlcoffee"
      style={{
        height: '300px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em',
      }}
    ></p>
  )
}
