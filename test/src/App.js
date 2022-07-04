import './App.css'
import SideBar from './components/SideBar';
import Dashboard from './views/Dashboard';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SideBar/>
       <Routes>
        <Route path='/' element= {<Dashboard/>}/>

       </Routes>
    </div>
  )
}

export default App;
