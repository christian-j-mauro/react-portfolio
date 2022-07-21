import './index.scss'
import LogoC from '../../assets/images/logo-c.png'
import LogoCubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoC} alt="Logo" />
        <img className="sub-logo" src={LogoCubtitle} alt="christian" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/christian-mauro-4a733b1b5"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#b3e6b5" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/christian-j-mauro"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#b3e6b5" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/christian-j-mauro/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLaptopCode} color="#b3e6b5" />
          </a>
        </li>
        <li>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
