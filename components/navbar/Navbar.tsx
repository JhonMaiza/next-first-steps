import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'
import path from 'path'

const navItemns = [
    { path: '/about', text: 'About'},
    { path: '/pricing', text: 'Pricing'},
    { path: '/contact', text: 'Contact'}
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-1 m-2 rounded'>
        <Link href={'/'} className='flex items-center'>
            <HomeIcon  className='mr-2'/>
            <span>Home</span>
        
        </Link>

        <div className='flex flex-1'></div>

        {
            navItemns.map ( navItemns => (
                <ActiveLink key={navItemns.path} { ...navItemns}/>
            ))
        }

    </nav>
  )
}

export default Navbar
