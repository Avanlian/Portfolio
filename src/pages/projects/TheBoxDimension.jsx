import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";

export function TheBoxDimension()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Tower of Albion"
                description="A roguelike where players ascend procedurally generated floors, choosing between unique powerups and battling diverse enemy AI."
                images={[
                    getImageUrl("projects/wizardWars/img1.png")
                ]}/>
            <Contact/>
        </div>
    )
}