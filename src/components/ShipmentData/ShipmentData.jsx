import useCart from "../../hooks/useCart"

export const ShipmentData = () => {

    const cart = useCart()
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        return cart.setShipmentData(data)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label>
                First name:
                <input type="text" name="firstName" />
            </label>
            <label>
                Last name:
                <input type="text" name="lastName" />
            </label>
            <label>
                Address:
                <input type="text" name="address" />
            </label>
            <button type="submit" >Submit</button>
        </form>
    </div>
}