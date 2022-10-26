import products from "../../data/products";
import useCart from "../../hooks/useCart";


export const CartDetails = () => {
    const cart = useCart();
    let sum = cart.products.reduce((sum, item) => { return sum + item.price }, 0)
    return (
        <div> <div>{cart.products.map((item) => {

            return <div key={item.id} >{item.title} - ${item.price}<button onClick={() => cart.removeProductFromCart(item)}>x</button> </div>
        })}</div>
            {sum}$
            <button onClick={() => console.log('submit')}>Submit</button>
        </div>


    )
}