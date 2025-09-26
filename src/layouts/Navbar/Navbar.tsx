//CSS
import styles from "./Navbar.module.css"
//React Router
import { Link } from "react-router-dom"
//types
import type { JSX } from "react"


export default function Navbar ():JSX.Element {


    const profileName: string = "ALEXANDRE MILLET"

    return(
        <div className={styles.nav}>
            <div className={styles["nav-profile"]}>
                <img src="/user_icon.png"/>
                <h1>{profileName}</h1>
            </div>
            <div className={styles["nav-links"]}>
                <Link to="/">Home</Link>
                <Link to="/">Projects</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
        </div>
    )
}


