import React from 'react';
import './product-list-item.scss';

type ProductListItemProps = {
    id: number;
    title: string;
    price: number;
    onAddProduct: (id: number) => void;
}

export default function ProductListItem(props: ProductListItemProps) {
    function handleAddProduct() {
        props.onAddProduct(props.id);
    }

    return (
        <button className='product-list-item' onClick={handleAddProduct}>
            <span className='product-list-item__title'>{props.title}</span>
            <span className='product-list-item__price'>Price: {props.price}</span>
        </button>
    );
}
