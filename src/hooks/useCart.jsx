import { useQuery, useMutation } from "@tanstack/react-query";
    import { queryClient } from '../main.jsx'
import products from "../data/products.js";


function useCart() {

    const query = useQuery(["carts", 1], async () => {
        const response = await fetch('http://localhost:3000/carts/1');
        const cart = await response.json();
        return cart;
    });
    const mutation = useMutation(async (cart) => {
        const response = await fetch('http://localhost:3000/carts/1', {
            method: 'PATCH',
            body: JSON.stringify(cart),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const updatedCart = await response.json()
        return updatedCart;

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["carts", 1])
        },
    })

    const removeProductFromCart = (removedProduct) => {
        mutation.mutate(
            { products: query.data.products.filter(product => product.id !== removedProduct.id) }
        )

    }

    const addProductToCart = (product) => {
        mutation.mutate(
            {
                products: [...query.data.products, product]
            }

        )

    }



    if (query.isLoading) {
        return {
            products: [],
            removeProductFromCart,
            addProductToCart
        }
    }
    return {
        products: query.data.products,
        removeProductFromCart,
        addProductToCart
    }
}


export default useCart;