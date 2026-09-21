import { useEffect, useState } from 'react'

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    )
  } catch {
    return false
  }
}

/** Detects real WebGL availability so we can fall back to a static/lightweight visual. */
export function useWebGLSupport() {
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    setSupported(detectWebGL())
  }, [])

  return supported
}
