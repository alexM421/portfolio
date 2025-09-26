//CSS
import styles from "./ProjectItem.module.css"
//react
import { useLocation } from "react-router-dom"
//ProjectItem
import ProjectItemHero from "./ProjectItemHero"
import ProjectItemMain from "./ProjectItemMain"
//jsonData
import dataArr from "../../data.json"

export type projectObj = {
    projectName: string,
    projectDesc: string,
    projectLiveLink: string,
    projectCodeLink: string,
    projectOverview: string[],
    projectTools: string[],
    projectSlug: string,
    projectImage: string,
}


export default function ProjectItem ({}) {

    const location = useLocation().pathname.replace("/","")

    const projectObj = dataArr.find(project => project.projectSlug===location) 

    if(!projectObj){
        throw new Error("Couldn't find the projectData")
    }

    const { projectName, projectDesc, projectLiveLink } = projectObj

    return(
        <div className={styles["project-item"]}>            
                <ProjectItemHero
                    projectName={projectName}
                    projectDesc={projectDesc}
                    projectLiveLink={projectLiveLink}
                />
                <ProjectItemMain
                    projectObj={projectObj}
                />
        </div>
    )
}