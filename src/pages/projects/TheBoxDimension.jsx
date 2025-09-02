import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";

export function TheBoxDimension()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Tower of Albion"
                description="A roguelike where players ascend procedurally generated floors, choosing between unique powerups and battling diverse enemy AI."/>
        </div>
    )
}