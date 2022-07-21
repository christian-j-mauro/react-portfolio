import { useRef } from 'react'
import LogoC from '../../../assets/images/logo-c.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  return (
    <div className="logo-container" ref={bgRef}>
      <img 
        className="solid-logo"
        ref={ solidLogoRef }
        src={ (LogoC) }
        alt="JavaScript, Developer"
      />
    </div>
  )
}

export default Logo
