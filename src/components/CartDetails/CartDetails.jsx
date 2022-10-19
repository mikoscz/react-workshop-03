import products from "../../data/products";
import { useCart } from "../CartContext"


export const CartDetails = () => {
    const cart = useCart();
    let sum = cart.items.reduce((sum, item) => { return sum + item.price }, 0)
    return (
        <div> <div>{cart.items.map((item) => {

            return <div key={item.id} >{item.title} - ${item.price}</div>
        })}</div>
            {sum}$
            <button onClick={() => console.log('submit')}>Submit</button>
        </div>


    )
}