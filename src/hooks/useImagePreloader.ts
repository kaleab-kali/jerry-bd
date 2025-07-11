import { useState, useRef, useCallback } from 'react'

interface PreloadProgress {
  loaded: number
  total: number
  percentage: number
  isComplete: boolean
}

export function useImagePreloader() {
  const [progress, setProgress] = useState<PreloadProgress>({
    loaded: 0,
    total: 0,
    percentage: 0,
    isComplete: false
  })
  
  const loadedImages = useRef<Set<string>>(new Set())
  const loadedVideos = useRef<Set<string>>(new Set())

  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Skip if already loaded
      if (loadedImages.current.has(src)) {
        resolve()
        return
      }

      const img = new Image()
      img.onload = () => {
        loadedImages.current.add(src)
        resolve()
      }
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`)
        resolve() // Resolve anyway to continue loading others
      }
      img.src = src
    })
  }

  const preloadVideo = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      // Skip if already loaded
      if (loadedVideos.current.has(src)) {
        resolve()
        return
      }

      const video = document.createElement('video')
      video.preload = 'metadata'
      video.onloadedmetadata = () => {
        loadedVideos.current.add(src)
        resolve()
      }
      video.onerror = () => {
        console.warn(`Failed to preload video: ${src}`)
        resolve() // Resolve anyway to continue loading others
      }
      video.src = src
    })
  }

  const preloadMedia = useCallback(async (urls: string[]) => {
    // Filter out empty strings and already loaded items
    const validUrls = urls.filter(url => url && url.length > 0)
    const totalItems = validUrls.length

    setProgress({
      loaded: 0,
      total: totalItems,
      percentage: 0,
      isComplete: false
    })

    let loadedCount = 0

    const updateProgress = () => {
      loadedCount++
      const percentage = Math.round((loadedCount / totalItems) * 100)
      setProgress({
        loaded: loadedCount,
        total: totalItems,
        percentage,
        isComplete: loadedCount === totalItems
      })
    }

    // Process all media files
    const promises = validUrls.map(async (url) => {
      try {
        if (url.endsWith('.mp4') || url.endsWith('.MP4')) {
          await preloadVideo(url)
        } else if (!url.startsWith('http')) {
          // Local image - preload it
          await preloadImage(url)
        } else {
          // External URL - preload it
          await preloadImage(url)
        }
        updateProgress()
      } catch (error) {
        console.error(`Error preloading ${url}:`, error)
        updateProgress() // Update progress even on error
      }
    })

    await Promise.all(promises)
  }, [])

  return { preloadMedia, progress }
}