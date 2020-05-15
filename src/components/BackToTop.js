import React, { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
export const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
  }, [])

  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleUp}
      id="backToTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  )
}
