
export function showBuyer(){
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

export function addBuyer(data){
    return (dispatch) =>{
        return fetch("http://localhost:3000/Buyers", {
            method : "POST",
            headers : {
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