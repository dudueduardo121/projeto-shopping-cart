import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled  from 'styled-components';
import {ButtoContainer} from './Button';

import Logo from '../assets/images/logo.svg';
import Cart from '../assets/images/cart.svg';



export default class Navbar extends Component {
  render() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={Logo} alt="Logo" width="80px" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtoContainer>
                    <span className="mr-2"> 
                        <img src={Cart} width="20px" alt="cart"/>
                    </span>
                    my cart
                </ButtoContainer>
            </Link>
        </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize !important;
    }
`;

