import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function useCart() {
  const [shipmentData, setShipmentData] = useState({});
  const queryClient = useQueryClient();

  const query = useQuery(
    ["carts", 1],
    async () => {
      const response = await fetch("http://localhost:3000/carts/1");
      const cart = await response.json();
      return cart;
    },
    {
      initialData: {
        products: [],
      },
    }
  );
  const mutation = useMutation(
    async (cart) => {
      const response = await fetch("http://localhost:3000/carts/1", {
        method: "PATCH",
        body: JSON.stringify(cart),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const updatedCart = await response.json();
      return updatedCart;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", 1]);
      },
    }
  );

  const removeProductFromCart = (removedProduct) => {
    mutation.mutate({
      products: query.data.products.filter(
        (product) => product.id !== removedProduct.id
      ),
    });
  };

  const addProductToCart = (newProduct) => {
    let productsInCart = [...query.data.products];
    const alreadyExists = productsInCart.find(
      (existingProduct) => existingProduct.id === newProduct.id
    );

    if (alreadyExists) {
      productsInCart = query.data.products.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });
    } else {
      productsInCart.push({ ...newProduct, quantity: 1 });
    }
    //
    mutation.mutate({
      products: productsInCart,
    });
  };

  function setQuantity(item, quantity){
    if (!quantity) {
      return;
    }
    
    if(quantity < 1 || quantity > 9){
      return; 
    }

    const productsInCart = query.data.products.map((product) => {
      if (product.id === item.id) {
        return {
          ...product,
          quantity,
        };
      }
      return product
    })
      mutation.mutate({
        products: productsInCart,
      });
  }

  return {
    products: query.data.products,
    removeProductFromCart,
    addProductToCart,
    setShipmentData,
    shipmentData,
    setQuantity,
  };
}

export default useCart;
