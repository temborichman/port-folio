import React, { useState } from 'react'
import './scrollup.css';

const ScrollUp = () => {
    // change background header //
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

  return (
   <a href='#' className='scrollup'>
    <i class="fa-solid fa-arrow-up footer-scroll-arrow"></i>
   </a>
  )
}

export default ScrollUp
