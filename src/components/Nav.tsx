import React from 'react';
import { navs } from '@/data/data';
import './nav.css';

export default function Nav() {
    return (
        <nav id="navbar" className='navbar'>
            <ul>
                {
                    navs.map(nav =>
                        <li key={nav.id}>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
