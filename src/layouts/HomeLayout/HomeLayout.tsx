//CSS
import styles from "./HomeLayout.module.css"
//React Router
import { Outlet } from "react-router-dom"
//layouts
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
//types
import type { JSX } from "react"


export default function HomeLayout ():JSX.Element {



    return(
        <div className={styles["home-layout"]}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}