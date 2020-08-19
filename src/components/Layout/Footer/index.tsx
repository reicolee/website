import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './style.scss'

const Footer = () => (
  <footer>
  <div className="footer-social-icons">
    <ul>
      <li>
        <a aria-label="Reico's LinkedIn" target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/reicolee/">
          <FontAwesomeIcon icon={faLinkedinIn} className='footer-social-icon' />
        </a>
      </li>
      <li>
        <a aria-label="Reico's GitHub" target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/reicolee">
          <FontAwesomeIcon icon={faGithub} className='footer-social-icon' />
        </a>
      </li>
      <li>
        <a aria-label="Contact Reico by email" href="mailto:leereico@gmail.com?subject=Hi Reico!">
          <FontAwesomeIcon icon={faEnvelope} className='footer-social-icon' />
        </a>
      </li>
      <li>
        <a aria-label="Instagram" target="_blank" rel="nofollow noopener noreferrer" href="https://www.instagram.com/reicolee/?hl=en">
          <FontAwesomeIcon icon={faInstagram} className='footer-social-icon' />
        </a>
      </li>
    </ul>
  </div>
</footer>
)


export default Footer
