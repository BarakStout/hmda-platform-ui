import React from 'react'

import './Footer.css'
import logo from '../images/ffiec-logo.svg'

const Footer = () => {
  return (
    <footer className="Footer footer footer-slim" role="contentinfo">
      <div className="grid">
        <a className="return-to-top" href="#">
          Return to top
        </a>
      </div>
      <div className="footer-primary-section">
        <div className="grid">
          <nav className="item footer-nav">
            <ul className="unstyled-list">
              <li className="footer-primary-content">
                <a
                  className="nav-link"
                  href="/filing"
                  title="Home"
                  aria-label="Home"
                >
                  <img src={logo} height="21px" alt="FFIEC" />
                  Home Mortgage Disclosure Act
                </a>
              </li>
            </ul>
          </nav>
          <div className="item">
            <a href="mailto:hmdahelp@cfpb.gov">Questions?</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
