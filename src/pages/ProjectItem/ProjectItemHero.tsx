//CSS
import Button from "../../shared/Button/Button"
import styles from "./ProjectItem.module.css"

type ProjectItemHeroProps = {
    projectName: string,
    projectDesc: string,
    projectLiveLink: string,
}

export default function ProjectItemHero ({ projectName, projectDesc, projectLiveLink }: ProjectItemHeroProps) {


    return(
        <div className={styles["project-item-hero"]}>
            <h1>{projectName}</h1>
            <p>{projectDesc}</p>
            <Button
                link={projectLiveLink}
                openNewTab={true}
            >LIVE LINK</Button>
        </div>
    )
}