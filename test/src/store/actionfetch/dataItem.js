import { FETCH_ITEM } from "./actionType"

export function dataItems(payload) {
    return {
        type: FETCH_ITEM,
        payload
    }
}

export function dataItem(){
    return (dispatch) =>{
        return fetch("http://localhost:3000/Items", {
            method : "GET"
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
        .then(data=>{
            dispatch(dataItems(data))
        })
    }
}