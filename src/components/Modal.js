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
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item add to the cart</h5>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    }
                     
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`

`

