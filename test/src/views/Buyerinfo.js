import Card from "../components/Card"
import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import { getDataBuyer } from "../store/actionfetch/Transaction"

export default function Buyerinfo() {
    const [isError, setisError] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [dataBuyer, setDataBuyer] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDataBuyer())
        .then(data=>{
            setDataBuyer(data)
        })
        .catch((err)=>{
            setisError(true)
        })
        .finally(()=>{
            setisLoading(false)
        })
    }, [])
    
    if(isError) return <h1 style={{ marginTop: "60px" }}>ERROR FETCH.....</h1>
    if(isLoading) return <div className="contain"><div className="loader"></div></div>
    console.log(dataBuyer);
    return (
        <>  
            {dataBuyer.map(el=>{
                return <div className="ml-[18rem] flex">
                <div className="flex flex-wrap mt-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-300 ml-2 mt-2 flex flex-row">
                    <div className="px-6 py-1">
                            <div className="font-bold text-xl uppercase">{el.name}</div>
                        {/* <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> */}
                    </div>

                    <div className="px-5 mt-2">
                    {el.type=="VIP"?  <span className="inline-block bg-amber-600 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                    {el.type=="regular"?  <span className="inline-block bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                    {el.type=="wholesale"?  <span className="inline-block bg-red-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                    </div>
                  
                </div>
                </div>
            </div>
            })}
        </>
    )
}