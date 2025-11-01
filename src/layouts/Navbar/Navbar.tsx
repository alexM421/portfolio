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
            <a 
                className={styles["nav-profile"]}
                href="https://www.linkedin.com/in/alexandre-millet-42137233b/" 
                target="_"
            >
                <img src="/alex_photo.jpg"/>
                <h1>{profileName}</h1>
            </a>
            <div className={styles["nav-links"]}>
                <Link to="/#hero">Home</Link>
                <Link to="/#main">Projects</Link>
                <Link to="/#about">About</Link>
                <Link to="/#contact">Contact</Link>
            </div>
        </div>
    )
}


