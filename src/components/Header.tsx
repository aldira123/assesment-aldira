/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-html-link-for-pages */

'use client'

import React from 'react';
import './header.css';
import Nav from './Nav';
import Sci from './Sci';


export default function Header() {
  return (
    <header id="header" className='header d-flex'>
        <div className="container-fluid container-xl d-flex">
            <a href="/" className="logo d-flex">
                <h1>The Weeknd</h1>
            </a>
            <Nav />
            <div className="position-relative">
              <Sci />
            </div>
        </div>
    </header>
  )
}
