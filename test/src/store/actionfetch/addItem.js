import { FETCH_ADDITEM } from "./actionType"

export function additem(payload) {
    return {
        type: FETCH_ADDITEM,
        payload
    }
}

export function adddataItem(data){
    const prices = []
    prices.push({price: +data.prices, priceFor : data.pricesFor})
    prices.push({price: +data.prices1, priceFor : data.pricesFor})
    prices.push({price: +data.prices2, priceFor : data.pricesFor})
    console.log(data);
    return (dispatch) =>{
        return fetch("http://localhost:3000/Items", {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(
                {
                    name : data.name,
                    type : data.type,
                    prices : prices
                }
            )
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
    }
}