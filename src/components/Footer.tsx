'use client'

import React from 'react';
import './footer.css';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer id="footer" className='footer'>
      <div className="footer-content">
        <div className="the-weeknd-section">
          <h1 className="text-center">The Weeknd</h1>
        </div>
        <div className="newsletter-section">
          <h3 className="text-center">Subscribe to our Newsletter</h3>
          <Newsletter />
        </div>
      </div>
      <div className='horizontal-line'></div>
      <h2 className='copyright text-center'>2024 Copyrights | All rights reserved</h2>
    </footer>
  );

}
