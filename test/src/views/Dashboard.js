import Card from "../components/Card"
import { useEffect, useState } from "react"
import {useSelector , useDispatch} from 'react-redux'
import { dataItem } from "../store/actionfetch/dataItem"

export default function Dashboard() {
    const [isError, setisError] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const dispatch = useDispatch()
    const item = useSelector((state)=> state.items.items)

    useEffect(()=>{
        dispatch(dataItem())
        .catch((err)=>{
            setisError(true)
        })
        .finally(()=>{
            setisLoading(false)
        })
    }, [])
    
    if(isError) return <h1 style={{ marginTop: "60px" }}>ERROR FETCH.....</h1>
    if(isLoading) return <div className="contain"><div className="loader"></div></div>
    return (
        <>
            <div className="ml-[18rem] flex flec-row">
                <div className="flex flex-wrap mt-3">
                    <Card data={item}/>
                </div>
            </div>
        </>
    )
}