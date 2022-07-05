

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