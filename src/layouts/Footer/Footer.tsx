//CSS
import EmailIcon from "../../assets/EmailIcon"
import FrontendMentorIcon from "../../assets/FrontendMentorIcon"
import GithubIcon from "../../assets/GithubIcon"
import LinkedinIcon from "../../assets/LinkedinIcon"
import styles from "./Footer.module.css"

export default function Footer () {

    const profileName = "ALEXANDRE MILLET"

    return(
        <div className={styles["footer"]}>
            <div className={styles["footer-desc"]}>
                <h1>{profileName}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores assumenda, unde, tempore labore velit, iste dolor reiciendis similique atque quaerat sit molestias aut provident. Laudantium illum architecto adipisci libero enim!</p>
            </div>
            <div className={styles["footer-contacts"]}>
                <h1>Contacts</h1>
                <div>
                    <a><EmailIcon/></a>
                    <a><FrontendMentorIcon/></a>
                    <a><LinkedinIcon/></a>
                    <a><GithubIcon/></a>
                </div>
            </div>
        </div>
    )
}