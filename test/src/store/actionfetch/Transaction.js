

export function getDataBuyer(){
    return (dispatch) =>{
        return fetch("http://localhost:3000/Buyers", {
            method : "GET"
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
    }
}

export function getDataTransaction(){
    return (dispatch) =>{
        return fetch("http://localhost:3000/Transaction", {
            method : "GET"
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
    }
}

export function updateDataTransaction(data){
    data.qty = parseInt(data.qty)
    return (dispatch) =>{
        return fetch("http://localhost:3000/Transaction", {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
    }
}