
export default function Card({ data }) {
    return (
        <>
            {data.map(el => {
                return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-300 ml-2 mt-2">
                    <div className="px-6 py-3">
                            <div className="inline-block uppercase bg-lime-300 rounded-full px-2 py-2 mb-1 text-sm font-semibold text-gray-700">{el.type}</div>
                            <div className="font-bold text-xl mb-2 uppercase">{el.name}</div>
                        {/* <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> */}
                    </div>
                    <div className="px-5">
                    <span className="inline-block bg-cyan-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PRICE</span>
                    </div>
                    {el.prices.map(el=>{
                    return <div className="px-5">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{el.priceFor}: Rp {el.price}</span>
                    </div>
                    })}
                </div>
            })}
        </>
    )
}