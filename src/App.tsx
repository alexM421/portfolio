//CSS
import './App.css'
//React Router
import { Route, Routes } from 'react-router-dom'
//layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout'

export default function App () {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        {/* <Route index element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/> */}
      </Route>
    </Routes>
  )
}


