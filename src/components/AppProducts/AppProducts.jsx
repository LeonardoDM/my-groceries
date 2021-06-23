import React from 'react'
import { Wrapper } from './AppProducts.styles'

export default function AppProducts({product}){

    return <Wrapper>
        <img src={product.image} alt=""/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <button>Adicionar</button>
    </Wrapper>
}