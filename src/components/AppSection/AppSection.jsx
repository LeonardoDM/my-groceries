import React from 'react'
import { Wrapper } from './AppSection.styles'
import AppProducts from '../AppProducts/AppProducts.jsx'
import ProductsMock from '../../mocks/products.json'


export default function AppSection(){
    const arrProducts = ProductsMock.products

    return <Wrapper>
        {arrProducts.map(product => <AppProducts key={product.id} product={product}/>)}
    </Wrapper>
}