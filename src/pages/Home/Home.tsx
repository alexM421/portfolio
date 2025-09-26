//CSS
import styles from "./Home.module.css"
//Shared
import Button from "../../shared/Button/Button"
//assets
import EmailIcon from "../../assets/EmailIcon"
import FrontendMentorIcon from "../../assets/FrontendMentorIcon"
import LinkedinIcon from "../../assets/LinkedinIcon"
import GithubIcon from "../../assets/GithubIcon"
//types
import type { JSX } from "react"



export default function Home ():JSX.Element {


    const mySkills: string[] = ["HTML","CSS","JavaScript","React","TypeScript","Git"]
    const profileName: string = "ALEXANDRE MILLET"
    const location: string = "France"
    const email: string = "alexandremillet421@gmail.com"

    return(
        <div className={styles.home}>
            <div className={styles.hero}>
                <div className={styles["hero-contacts"]}>
                    <a><EmailIcon/></a>
                    <a><FrontendMentorIcon/></a>
                    <a><LinkedinIcon/></a>
                    <a><GithubIcon/></a>
                </div>
                <div className={styles["hero-main"]}>
                    <h1>HEY, MY NAME IS {profileName}</h1>
                    <p>I am a passionate frontend developper based in {location}. My speciality is <b>React JS</b> and, and I love building apps that are <b>delightful</b> to use.</p>
                    <Button link="#main" isSamePage={true}>SEE MY PROJECTS</Button>
                </div>
                <div className={styles["scroll-indicator"]}>
                    <div className={styles["dot"]}></div>
                </div>
            </div>
            <div className={styles.main} id="main">
                <div className={styles["main-desc"]}>
                    <h1>PROJECTS</h1>
                    <div className={styles["blue-marker"]}></div>
                    <p>All my projects include links to the code and live version. Click the button to learn more about each one.</p>
                </div>
                <div className={styles["main-projects"]}>
                    <div className={styles["project-link"]}>
                        <img src="/personnal-finance-app.png"/>
                        <div className={styles["project-link-desc"]}>
                            <h1>Personnal Finance App</h1>
                            <p>A responsive personal finance app that helps users track income, expenses, and savings goals with an intuitive dashboard and clean UI.</p>
                            <Button variant="secondary" link="/personnal-finance-app">LEARN MORE</Button>
                        </div>
                    </div>
                    <div className={styles["project-link"]}>
                        <img src="/audio-e-commerce.png"/>
                        <div className={styles["project-link-desc"]}>
                            <h1>Audio E-Commerce Website</h1>
                            <p>A responsive audio e-commerce website built with React, featuring product pages, a shopping cart, and a smooth user experience across devices.</p>
                            <Button variant="secondary" link="/audio-e-commerce">LEARN MORE</Button>
                        </div>
                    </div>
                    <div className={styles["project-link"]}>
                        <img src="/kanban-platform-launch.png"/>
                        <div className={styles["project-link-desc"]}>
                            <h1>Kanban Task Manager</h1>
                            <p>A React-based Kanban task manager that helps users organize, track, and prioritize tasks across customizable boards.</p>
                            <Button variant="secondary" link="/kanban-task-manager">LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles["about-text"]}>
                    <h1>ABOUT ME</h1>
                    <div className={styles["blue-marker"]}></div>
                    <p>I'm a frontend developer based out in {location}. I love building apps that solve real-world problems, and that are delightful to use. My specialities includes TypeScript and React JS.</p>
                </div>
                <div className={styles["about-skills"]}>
                    <h1>My Skills</h1>
                    <div>
                        {mySkills.map((skill :string) => <div className={styles["skill-box"]}>{skill}</div>)}
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <h1>CONTACT</h1>
                <div className={styles["white-marker"]}></div>
                <p>Please reach out if you have any questions! Send me an email at <b>{email}</b></p>
            </div>
        </div>
    )
}