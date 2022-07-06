import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dataItem } from "../store/actionfetch/dataItem"
import { getDataBuyer } from "../store/actionfetch/Transaction"
import { getDataTransaction } from "../store/actionfetch/Transaction"
import { updateDataTransaction } from "../store/actionfetch/Transaction"
import { UpdateSummaryData } from "../store/actionfetch/summary"
import swal from "sweetalert"

export default function Transaction() {
    const [dataBuyer, setDataBuyer] = useState([])
    const [input, setInput] = useState({
        item: "",
        qty: "",
        buyer: ""
    })
    const dispatch = useDispatch()
    const data = useSelector((state) => state.items.items)
    useEffect(() => {
        dispatch(dataItem())
        dispatch(getDataBuyer())
            .then(data => {
                setDataBuyer(data)
            })
    }, [])

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let dataTransaction;
        if (+input.qty <= 0 || input.item === "" || input.buyer === "") {
            swal("Something wrong", "There Is Empty Field Or Quantity Below Zero", "error")
        } else {
            dispatch(updateDataTransaction(input))
                .then(data => {
                    swal("Success", "Data Transaction has been added", "success")
                })
            dispatch(getDataTransaction())
                .then(data => {
                    dataTransaction = data
                })
                .finally(() => {
                    dispatch(UpdateSummaryData(dataTransaction, data, dataBuyer))
                })
        }
        dispatch(getDataTransaction())
            .then(data => {
                dataTransaction = data
            })
            .finally(() => {
                dispatch(UpdateSummaryData(dataTransaction, data, dataBuyer))
            })
    }





    if (dataBuyer.length === 0) {
        return <div className="contain"><div className="loader"></div></div>
    }
    return (
        <>
            <h1 className="flex justify-center items-center text-2xl pt-10">Transaction</h1>
            <div className="flex justify-center items-center mt-[50px] w-full">
                <form>
                    <select name="item" value={input.item} onChange={handleOnChange} id="underline_select" className="relative block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected disabled value="">Select One Name Item</option>
                        {data.map(el => {
                            return <option value={el.name}>{el.name}</option>
                        })}
                    </select><br />

                    <div className="relative w-full mb-6 group">
                        <input name="qty" value={input.qty} onChange={handleOnChange} type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">QUANTITY</label>
                    </div>

                    <select name="buyer" value={input.buyer} onChange={handleOnChange} id="underline_select" className="relative block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected disabled value="">Select One Buyer</option>
                        {dataBuyer.map(el => {
                            return <option value={el.name}>{el.name}</option>
                        })}

                    </select><br />

                    <button onClick={handleOnSubmit} type="submit" className="absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>
    )
}