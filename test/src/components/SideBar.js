import { NavLink } from "react-router-dom"

export default function SideBar() {
    let activeStyle = {
        backgroundColor: "#BBBBBB",
        borderRadius:"10px"
    }
    return (
        <>
            <div className="md:flex flex-col md:flex-row md:min-h-screen w-full fixed">
                <div className="z-10 flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 bg-gray-300" >
                    <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                        <p className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Dashboard</p>

                    </div>
                    <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
                        <NavLink to={"/"} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}>Dashboard</NavLink>
                        <NavLink to={"/additem"} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}>Add Item</NavLink>
                        <NavLink to={"/addbuyer"} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}>Add Buyer</NavLink>
                        <NavLink to={"/buyers"} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="">Info Buyers</NavLink>
                        <NavLink to={"/transaction"} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}>Transaction</NavLink>
                    </nav >
                </div >
            </div >
        </>
    )


}