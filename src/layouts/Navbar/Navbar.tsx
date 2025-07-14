//CSS
import styles from "./Navbar.module.css"
//React Router
import { Link } from "react-router-dom"


export default function Navbar () {


    return(
        <div className={styles.nav}>
            <div className={styles["nav-profile"]}>
                <img src="/user_icon.png"/>
                <h1>Profile Name</h1>
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


