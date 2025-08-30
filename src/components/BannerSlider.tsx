'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

export type BannerSlide = {
  id: string | number
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  bgFrom?: string
  bgTo?: string
}

type BannerSliderProps = {
  slides: BannerSlide[]
  autoPlayMs?: number
}

export default function BannerSlider({ slides, autoPlayMs = 5000 }: BannerSliderProps) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const safeSlides = useMemo(() => slides ?? [], [slides])

  const goTo = useCallback((i: number) => {
    if (!safeSlides.length) return
    const nextIndex = (i + safeSlides.length) % safeSlides.length
    setIndex(nextIndex)
  }, [safeSlides.length])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoPlayMs || safeSlides.length <= 1) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      next()
    }, autoPlayMs) as unknown as number
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [index, autoPlayMs, safeSlides.length, next])

  if (!safeSlides.length) return null

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {safeSlides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            <div className={`relative h-[340px] sm:h-[420px] md:h-[520px] bg-gradient-to-br ${slide.bgFrom ?? 'from-pink-100'} ${slide.bgTo ?? 'to-purple-100'} flex items-center justify-center`}> 
              <div className="text-center px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                )}
                {slide.ctaLabel && slide.ctaHref && (
                  <Link
                    href={slide.ctaHref}
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
                  >
                    {slide.ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {safeSlides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-purple-600' : 'w-2.5 bg-white/80 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
