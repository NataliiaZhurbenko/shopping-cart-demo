import React from 'react';

import ProductListItem from '../product-list-item/product-list-item';
import { ProductDatum} from '../types';
import './product-list.scss';

type ProductListProps = {
    products: ProductDatum[];
    onAddProduct : (id: number) => void;
}


export default function ProductList(props:ProductListProps) {
    return (
        <div className="product-list">
            {props.products.map(product =>
                <ProductListItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    onAddProduct={props.onAddProduct}
                />
            )}
        </div>
    );
}
