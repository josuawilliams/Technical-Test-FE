import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SummaryData } from "../store/actionfetch/summary"
export default function Summary() {
    const [dataSummary, setDataSummary] = useState({})
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SummaryData())
            .then(data => {
                setDataSummary(data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [])
    if (isLoading) return <div className="contain"><div className="loader"></div></div>
    return (
        <>
            <div className="max-w-sm absolute z-[-3] w-full rounded-lg items-center justify-center lg:max-w-full lg:flex mt-11">
                <div className="h-48 lg:h-auto rounded-lg lg:w-48 text-center">
                </div>
                <div className="rounded-lg shadow-2xl border border-gray-400 lg:border-t bg-gray-300 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-10 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-5">SUMMARY</div>
                        <div className="grid grid-rows-2 grid-flow-col">
                            <span className="inline-block bg-lime-300 rounded-full px-20 py-5 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">REVENUE
                                <p className="text-xl">Rp.{dataSummary.revenue}</p>
                            </span>
                            <span className="inline-block bg-yellow-300 rounded-full px-20 py-5 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">BEST SELLING ITEM
                                <p className="text-xl uppercase">{dataSummary.bestSellingItem}</p>
                            </span>
                            <span className="inline-block bg-rose-300 rounded-full px-20 py-5 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">TOTAL TRANSACTION
                                <p className="text-xl">{dataSummary.totalTransaction}</p>
                            </span>
                            <span className="inline-block bg-cyan-300 rounded-full px-20 py-5 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">BEST SELLING CATEGORY
                                <p className="text-xl uppercase">{dataSummary.bestSellingCategory}</p>
                            </span>

                        </div>
                        <div className="text-black text-2xl"><hr /></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-rows-1 grid-flow-col">
                            <div className="text-gray-900 px-20 py-5 font-bold text-xl">
                                <p className="flex items-center justify-center mb-5">RPC</p>
                                <div className="flex flex-col">
                                    {dataSummary.rpc.map(el => {
                                        return <span className="inline-block bg-green-300 uppercase rounded-full px-20 py-5 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">{el.category}
                                            <p className="text-sm">Revenue: {el.revenue}</p>
                                        </span>
                                    })}
                                </div>
                            </div>

                            <div className="text-gray-900 px-20 py-5 font-bold text-xl">
                                <p className="flex items-center justify-center mb-5">BEST SPENDERS</p>
                                <div className="flex flex-col">
                                    {dataSummary.bestSpenders.map(el => {
                                        return <span className="inline-block bg-orange-300 uppercase rounded-full px-20 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">{el.name}
                                            <p className="text-sm">Spent: {el.spent}</p>
                                            {el.type == "VIP" ? <span className="inline-block bg-amber-600 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                            {el.type == "regular" ? <span className="inline-block bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                            {el.type == "wholesale" ? <span className="inline-block bg-red-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.type}</span> : ""}
                                        </span>
                                    })}
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}