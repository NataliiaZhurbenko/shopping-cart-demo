import React from 'react';
import './shopping-cart-item.scss';

type ShoppingCartItemProps = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    onDeleteProduct: (id: number) => void;
}

export default function ShoppingCartItem(props: ShoppingCartItemProps) {
    function handleDeleteProduct() {
        props.onDeleteProduct(props.id);
    }

    return (
        <div className='shopping-list-item'>
            <p className='shopping-list-item__title'>{props.title}</p>
            <p className='shopping-list-item__price'>Price: {props.price}</p>
            <p className='shopping-list-item__quantity'>Quantity: {props.quantity}</p>
            <p className='shopping-list-item__total'>Total: {props.price * props.quantity}</p>
            <button className='shopping-list-item__delete-item-button' onClick={handleDeleteProduct}>Delete</button>
        </div>
    );
}
