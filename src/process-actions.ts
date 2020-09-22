import { ProductDatum, ShoppingDatum, State } from './types';

type Action =
    | { type: 'parse', text: string }
    | { type: 'add', id: number }
    | { type: 'delete', id: number};


export default function processActions(state: State, action: Action): State {
    switch (action.type) {
        case 'parse':
            const text = action.text;
            const regex = /[^,]+, ?[0-9]+/g;
            const items = text.match(regex);

            if (items) {
                const productData = items.map((item, index) => {
                    const [title, price] = item.split(',');
                    return {
                        id: index,
                        title: title.trim(),
                        price: +price
                    }
                });

                return {
                    ...state,
                    productData, shoppingData: []
                }
            }

            return state;



        case 'add':
            const selectedProduct = state.productData.filter(product =>
                product.id === action.id
            );

            if (selectedProduct.length === 1) {
                const shoppingProduct = state.shoppingData.filter(product =>
                    product.id === selectedProduct[0].id
                );

                if (shoppingProduct.length === 1) {
                    shoppingProduct[0].quantity++;

                    return {
                        ...state,
                        shoppingData: [...state.shoppingData]
                    }
                } else {

                    return {
                        ...state,
                        shoppingData: [...state.shoppingData, {...selectedProduct[0], quantity: 1} ]
                    }
                }

            }

            return state;

        case 'delete':
            const selectedShoppingProduct = state.shoppingData.filter(product =>
                product.id === action.id
            );

            if (selectedShoppingProduct.length === 1) {
                selectedShoppingProduct[0].quantity--;

                if (selectedShoppingProduct[0].quantity === 0) {
                    const shoppingData = state.shoppingData.filter(product =>
                        product.id !== selectedShoppingProduct[0].id
                    )

                    return {
                        ...state,
                        shoppingData: [...shoppingData]
                    }
                }

                return {
                    ...state,
                    shoppingData: [...state.shoppingData]
                }
            }

            return state;
    }
}