import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";
import Markdown from "react-markdown";
import md from "./content/TheLegendOfZelda.md?raw"

export function TheLegendOfZeldaRemake()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Legend of Zelda - Unity Remake"
                description={md}
                images={[
                    getImageUrl("projects/theLegendOfZelda/img1.png"),
                    getImageUrl("projects/theLegendOfZelda/img2.png"),
                    getImageUrl("projects/theLegendOfZelda/img3.png"),
                    getImageUrl("projects/theLegendOfZelda/img4.png"),
                    getImageUrl("projects/theLegendOfZelda/img5.png"),
                    getImageUrl("projects/theLegendOfZelda/img6.png"),
                    getImageUrl("projects/theLegendOfZelda/img7.png")
                ]}/>
        </div>
    )
}