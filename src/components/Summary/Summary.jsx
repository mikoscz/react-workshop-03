export const Summary= ()=>{



const data = {
firstName: "aaa",
lastName: "bbb",
addres:"ccc",
totalAmount: 1000
}

return(

<div>
<div>{data.firstName}</div>
<div>{data.lastName}</div>

<div>{data.addres}</div>
<div>{data.totalAmount}</div>
<button type="button">accept</button>
</div>
)



}