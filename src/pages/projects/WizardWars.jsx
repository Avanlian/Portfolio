import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";
import Markdown from "react-markdown";
import md from "./content/WizardWars.md?raw"

export function WizardWars()
{
    return(
            <div className={styles.App}>
                <PageNavbar />
                <ProjectPage
                    title="Wizard Wars"
                    description={md}
                    images={[
                        getImageUrl("projects/wizardWars/img1.png"),
                        getImageUrl("projects/wizardWars/img2.png"),
                        getImageUrl("projects/wizardWars/img3.png"),
                        getImageUrl("projects/wizardWars/img4.png"),
                        getImageUrl("projects/wizardWars/img5.png"),
                        getImageUrl("projects/wizardWars/img6.png"),
                        getImageUrl("projects/wizardWars/img7.png"),
                        getImageUrl("projects/wizardWars/img8.png"),
                        getImageUrl("projects/wizardWars/img9.png"),
                        getImageUrl("projects/wizardWars/img10.png")
                    ]}/>
                <Contact/>
            </div>
    )
}