'use client'
import { useEffect, useRef } from 'react'

export default function useParallax(sectionRef, bgRef, speed = 0.35) {
  const rectRef = useRef({ top: 0, height: 0 })
  const tickingRef = useRef(false)

  useEffect(() => {
    if (!sectionRef?.current || !bgRef?.current) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const readRect = () => {
      const r = sectionRef.current.getBoundingClientRect()
      rectRef.current.top = r.top + window.scrollY
      rectRef.current.height = r.height
    }

    const update = () => {
      const { top, height } = rectRef.current
      const viewTop = window.scrollY
      const viewBottom = viewTop + window.innerHeight

      // skip if far from viewport
      if (top - window.innerHeight > viewBottom || top + height < viewTop - window.innerHeight) {
        tickingRef.current = false
        return
      }

      const delta = top - viewTop
      const translateY = -delta * speed
      bgRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`
      tickingRef.current = false
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(update)
        tickingRef.current = true
      }
    }

    const onResize = () => { readRect(); onScroll() }

    // init
    readRect()
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [sectionRef, bgRef, speed])
}
