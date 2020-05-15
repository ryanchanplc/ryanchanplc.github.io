import React, { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
export const BackToTop = () => {
  const [show, setShow] = useState(false)
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!show && window.pageYOffset > 400) {
        setShow(true)
      } else if (show && window.pageYOffset <= 400) {
        setShow(false)
      }
    })
  }, [show])

  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleUp}
      id="backToTop"
      onClick={scrollTop}
      style={{ display: show ? 'flex' : 'none' }}
    />
  )
}
