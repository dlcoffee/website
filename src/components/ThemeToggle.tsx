'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  const isDark = mounted && resolvedTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`
        setTheme(nextTheme)
      }}
      className="border-border/80 bg-card text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors transition-transform hover:scale-105"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <RiSunLine className="h-4 w-4" />
      ) : (
        <RiMoonClearLine className="h-4 w-4" />
      )}
    </button>
  )
}
