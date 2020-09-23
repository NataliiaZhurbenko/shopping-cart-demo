import React, { useReducer } from 'react';

import ProductEditor from './product-editor/product-editor';
import ProductList from './product-list/product-list';
import ShoppingCart from './shopping-cart/shopping-cart';
import processActions from './process-actions';

export default function App() {
    const [state, dispatch] = useReducer(processActions, {productData: [], shoppingData: []});

    function handleOnParse(text: string) {
        dispatch({type: 'parse', text});
    }

    function handleAddProduct(id: number) {
        dispatch({type: 'add', id});
    }

    function handleDeleteProduct(id: number) {
        dispatch({type: 'delete', id});
    }

    return (
        <>
            <ProductEditor onParse={handleOnParse}/>
            <ProductList products={state.productData} onAddProduct={handleAddProduct}/>
            <ShoppingCart products={state.shoppingData} onDeleteProduct={handleDeleteProduct}/>
        </>
    )
}