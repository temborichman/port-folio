import React from 'react'
import './footer.css';
import { footer } from 'framer-motion/client';

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer-container container'>
        <h1 className='footer-title'>Tembo</h1>

        <ul className='footer-list'>
            <li>
                <a href="#about" className='footer-link'>About</a>
            </li>

            <li>
                <a href="#qualification" className='footer-link'>Projects</a>
            </li>

            <li>
                <a href="#testimonials" className='footer-link'>Testimonials</a>
            </li>
        </ul>

        <div className="footer-social">
        <a href="https://www.istagram.com" className="footer-social-link" target="_blank"> <i class="fa-brands fa-instagram"></i></a>

        <a href="https://www.facebook.com" className="footer-social-link" target="_blank"><i class="fa-brands fa-facebook"></i></a>

        <a href="https://www.github.com" className="footer-social-link" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>

    <span className='footer-copy'>&#169; Homie Media Lab. All rights reserved</span>
    </div>
    </footer>
    
  )
}

export default Footer
