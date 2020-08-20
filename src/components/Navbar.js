import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled  from 'styled-components';
import {ButtoContainer} from './Button';

import Logo from '../assets/images/logo.png';
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
                        <img src={Cart} width="30px" alt="cart"/>
                    </span>
                    my cart
                </ButtoContainer>
            </Link>
        </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: #fff;
    border:0.04rem solid rgba(0,0,0,0.2);
    .nav-link{
        color:var(--mainDark)!important;
        font-size:1.3rem;
        text-transform:capitalize !important;
    }
`;

