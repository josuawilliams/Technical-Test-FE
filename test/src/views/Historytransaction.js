import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataTransaction } from "../store/actionfetch/Transaction"
import { UpdateSummaryData } from "../store/actionfetch/summary"
import swal from "sweetalert"
import { dataItem } from "../store/actionfetch/dataItem"
import { getDataBuyer } from "../store/actionfetch/Transaction"


export default function Historytransaction() {
    const [dataHistory, setDataHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [dataBuyer, setDataBuyer] = useState([])


    const dispatch = useDispatch()
    const dataitems = useSelector((state)=> state.items.items)
    useEffect(() => {
        dispatch(dataItem())
        dispatch(getDataBuyer())
        .then(data=>{
            setDataBuyer(data)
        })
        dispatch(getDataTransaction())
            .then(data => {
                setDataHistory(data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    let dataTransaction;
    const handdleDelete = (e, id) =>{
        e.preventDefault()
        fetch(`http://localhost:3000/Transaction/${id}`, {
            method : "DELETE"
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("error fetch")
            }
            return res.json()
        })
        .then(data=>{
            swal("Good job!", "Success Delete", "success");
            setDataHistory(dataHistory.filter(el=>el.id !== id))
            dispatch(getDataTransaction())
            .then(data=>{
                dataTransaction = data
                dispatch(UpdateSummaryData(dataTransaction, dataitems, dataBuyer))
            })
        })
    }

    if (isLoading) return <div className="contain"><div className="loader"></div></div>
    return (
        <>
            <div className="container flex justify-center items-center mx-auto mt-20 z-[3] ml-[15rem] absolute">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table className="divide-y divide-gray-300 ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            ITEM
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            QUANTITY
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            BUYER
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            DELETE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    {dataHistory.map(el => {
                                        return <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 uppercase">
                                                {el.item}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {el.qty}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{el.buyer}</div>
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <a href="" onClick={(e) => handdleDelete(e,el.id)} className=" px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}