import './App.css'
import SideBar from './components/SideBar';
import Dashboard from './views/Dashboard';
import Addbuyer from './views/Addbuyer';
import Transaction from './views/Transaction';
import Buyerinfo from './views/Buyerinfo';
import Summary from './views/Summary';
import Historytransaction from './views/Historytransaction';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SideBar/>
       <Routes>
        <Route path='/' element= {<Dashboard/>}/>
        <Route path='/addbuyer' element= {<Addbuyer/>}/>
        <Route path='/transaction' element= {<Transaction/>}/>
        <Route path='/buyers' element= {<Buyerinfo/>}/>
        <Route path='/summary' element= {<Summary/>}/>
        <Route path='/history' element= {<Historytransaction/>}/>
       </Routes>
    </div>
  )
}

export default App;
