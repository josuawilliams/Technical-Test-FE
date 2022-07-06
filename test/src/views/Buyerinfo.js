import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { getDataBuyer } from "../store/actionfetch/Transaction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

export default function Buyerinfo() {
    const [isError, setisError] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [dataBuyer, setDataBuyer] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataBuyer())
            .then(data => {
                setDataBuyer(data)
            })
            .catch((err) => {
                setisError(true)
            })
            .finally(() => {
                setisLoading(false)
            })
    }, [])

    const handdleDelete = (e, id) =>{
        e.preventDefault()
        fetch(`http://localhost:3000/Buyers/${id}`, {
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
            setDataBuyer(dataBuyer.filter(el=>el.id !== id))
        })
    }

    if (isError) return <h1 style={{ marginTop: "60px" }}>ERROR FETCH.....</h1>
    if (isLoading) return <div className="contain"><div className="loader"></div></div>
    return (
        <>
            {dataBuyer.map(el => {
                return <div className="ml-[18rem] flex">
                    <div className="flex flex-wrap mt-3">
                        <div className="flex justify-between max-w-sm rounded overflow-hidden w-96 shadow-lg bg-teal-300 ml-2 mt-2 flex flex-row">
                                <div className="flex justify-between px-6 py-1">
                                    <div className="font-bold text-xl mt-1 uppercase">{el.name}</div>
                                    {/* <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> */}
                                </div>

                                <div className="flex justify-between px-5 mt-2">
                                    {el.type == "VIP" ? <span className="inline-block bg-amber-600 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                    {el.type == "regular" ? <span className="inline-block bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                    {el.type == "wholesale" ? <span className="inline-block bg-red-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                </div>
                                <a onClick={(e) => handdleDelete(e,el.id)} className="relative inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-2"href=""><FontAwesomeIcon icon={faTrash} className="text-red-600" /></a>
                            </div>
                    </div>
                </div>
            })}
        </>
    )
}