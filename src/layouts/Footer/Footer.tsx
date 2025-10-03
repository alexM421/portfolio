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
                <p>I’m Alexandre Millet, a front-end developer specializing in React, JavaScript, and modern UI design. I enjoy building responsive, accessible, and user-friendly web applications. My goal is to combine clean code with thoughtful design to deliver smooth digital experiences.</p>
            </div>
            <div className={styles["footer-contacts"]}>
                <h1>Contacts</h1>
                <div>
                    <a href="mailto:alexandremillet421@gmail.com" target="_"><EmailIcon/></a>
                    <a href="https://www.frontendmentor.io/profile/alexM421" target="_"><FrontendMentorIcon/></a>
                    <a href="https://www.linkedin.com/in/alexandre-millet-42137233b/" target="_"><LinkedinIcon/></a>
                    <a href="https://github.com/alexM421" target="_"><GithubIcon/></a>
                </div>
            </div>
        </div>
    )
}