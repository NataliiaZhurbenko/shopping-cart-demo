import React from 'react';

import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
import { ShoppingDatum} from '../types';
import './shopping-cart.scss';

type ShoppingCartProps = {
    products: ShoppingDatum[];
    onDeleteProduct : (id: number) => void;
}

export default function ShoppingCart(props:ShoppingCartProps) {
    return (
        <div className="shopping-cart">
            {props.products.map(product =>
                <ShoppingCartItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
            )}

            <div className="shopping-cart__total-amount">
                Total amount: {props.products.reduce(
                    (accum, product) => accum + product.quantity * product.price, 0)}
            </div>
        </div>
    );
}
