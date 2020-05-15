import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
export const BackToTop = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleUp}
      className="backToTop"
      id="backToTop"
    />
  )
}
