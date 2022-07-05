import './App.css'
import SideBar from './components/SideBar';
import Dashboard from './views/Dashboard';
import Additem from './views/Additem';
import Addbuyer from './views/Addbuyer';
import Transaction from './views/Transaction';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SideBar/>
       <Routes>
        <Route path='/' element= {<Dashboard/>}/>
        <Route path='/additem' element= {<Additem/>}/>
        <Route path='/addbuyer' element= {<Addbuyer/>}/>
        <Route path='/transaction' element= {<Transaction/>}/>
       </Routes>
    </div>
  )
}

export default App;
