import React from 'react'
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Collapse } from 'reactstrap'

import './navbar.css'


const NavbarMenu = () => (
    <div className='navbar-menu'>
        <Navbar className='navs' expand="md">
            <NavbarBrand className='nav-brand' href="/">reactstrap</NavbarBrand>
            <Collapse navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink className='menu-item' href='/home'>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='menu-item' href='/about'>About</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='menu-item' href='/project'>Project</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='menu-item' href='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)

export default NavbarMenu