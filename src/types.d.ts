export type ProductDatum = {
    id: number,
    title: string,
    price: number
};

export type ShoppingDatum = ProductDatum & {
    quantity: number
};


export type State =
    { productData: ProductDatum[], shoppingData: ShoppingDatum[]};