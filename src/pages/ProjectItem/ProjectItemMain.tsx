//CSS
import styles from "./ProjectItem.module.css"
//shared
import Button from "../../shared/Button/Button"
//types
import type { projectObj } from "./ProjectItem"

type ProjectItemMainProps = {
    projectObj: projectObj 
}

export default function ProjectItemMain ({ projectObj }: ProjectItemMainProps ) {

    const { 
        projectName, 
        projectOverview,
        projectTools,
        projectLiveLink,
        projectCodeLink, 
        projectImage,
        projectImageMobile
    } = projectObj

    return(
        <div className={styles["project-item-main"]}>
            <picture>
                <source
                    srcSet={projectImageMobile}
                    media="(max-width: 700px)"
                />
                <img src={projectImage}/>
            </picture>
            <div className={styles["project-item-text"]}>
                <div className={styles["project-item-overview"]}>
                    <h1>Project Overview</h1>
                    <div>
                        {projectOverview.map((itemString, index) => <p 
                            className={styles["project-item-string"]}
                            key={`${projectName}-overview-${index+1}`}>{itemString}
                        </p>)}
                    </div>
                </div>
                <div className={styles["project-item-tools"]}>
                    <h1>Tools used</h1>
                    <div>
                        {projectTools.map((tool, index) => <p 
                            className={styles["project-item-tool"]}
                            key={`${projectName}-tool-${index+1}`}>{tool}
                        </p>
                        )}
                    </div>
                </div>
                <div className={styles["project-item-links"]}>
                    <h1>See Live</h1>
                    <div>
                        <Button
                            link={projectLiveLink}  
                            openNewTab={true}  
                        >LIVE LINK</Button>
                        <Button
                            link={projectCodeLink}
                            openNewTab={true} 
                        >CODE LINK</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}