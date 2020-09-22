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

    function handleDeleteProduct (event: React.MouseEvent<HTMLButtonElement>) {
        props.onDeleteProduct(props.id);
    }

    return (
        <div className='shopping-list-item'>
            <span className='shopping-list-item__title'>{props.title}</span>
            <span className='shopping-list-item__price'>{props.price}</span><br/>
            <span className='shopping-list-item__quantity'>{props.quantity}</span><br/>
            <span className='shopping-list-item__total'>{props.price * props.quantity}</span><br/>
            <button className='shopping-cart__delete-item-button' onClick={handleDeleteProduct}>Delete</button>
        </div>
    );
}
