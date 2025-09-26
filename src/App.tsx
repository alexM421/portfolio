//CSS
import './App.css'
//React Router
import { Route, Routes } from 'react-router-dom'
//layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout'
//pages
import Home from './pages/Home/Home'
import ProjectItem from './pages/ProjectItem/ProjectItem'

export default function App () {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/:projectName" element={<ProjectItem/>}/>
      </Route>
    </Routes>
  )
}


