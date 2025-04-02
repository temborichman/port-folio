import React, { useState } from 'react';
import "./header.css"

const Header = () => {
       // change background header //
       window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const[Toggle, showmenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <header className="header">
        <nav className='nav container'>
        <a href="index.html" className='nav-logo'>Tembo</a>
        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className='nav-list grid'>

                <li className='nav-item'>
                    <a href= "#home" onClick={() => setActiveNav('#home')}className={activeNav === "#home" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-house"></i> Home
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#about" onClick={() => setActiveNav('#home')}className={activeNav === "#about" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-user"></i> About
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#skills" onClick={() => setActiveNav('#skills')}className={activeNav === "#skills" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-file"></i> Skills
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === "#services" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-briefcase"></i> Services
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}className={activeNav === "#portfolio" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-binoculars"></i> Portfolio
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === "#contact" ? 'nav-link active-link' : 'nav-link'}>
                    <i class="fa-solid fa-message"></i> Contact
                    </a>
                </li>

            </ul>
            <i class="fa-solid fa-xmark nav-close" onClick={() => showmenu(!Toggle)}></i>
        </div>

        <div className="nav-toggle" onClick={() => showmenu(!Toggle)}>
        <i class="fa-solid fa-bars"></i>   
        </div>
        </nav>
      </header>
    </div>
  )
}

export default Header

