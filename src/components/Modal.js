import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtoContainer} from './Button';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen,closeModal} = value;
                    const {img, title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                      return (  
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <button type="button" id="close" className="close text-capitalize" onClick={()=>closeModal()}>
                                            <span>&times;</span>
                                    </button>                                
                                    <div id="modal" className="mx-auto col-md-6 text-center text-capitalize p-5">
                                        <h5>item add to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product image"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to="/">
                                            <ButtoContainer onClick={()=>closeModal()}>
                                                store
                                            </ButtoContainer>
                                        </Link>

                                        <Link to="/cart">
                                            <ButtoContainer cart onClick={()=>closeModal()}>
                                                go to cart
                                            </ButtoContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                      );
                    }
                     
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }

    #close span{
        position: absolute;
        right: 441px;
        font-size: 70px;
        top: 40px;
        color:tomato!important;
    }

`;

