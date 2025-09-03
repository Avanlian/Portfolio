import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";
import Markdown from "react-markdown";
import md from "./content/TheBoxDimension.md?raw"

export function TheBoxDimension()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Box Dimension"
                description={md}
                images={[
                    getImageUrl("projects/theBoxDimension/img1.png"),
                    getImageUrl("projects/theBoxDimension/img2.png"),
                    getImageUrl("projects/theBoxDimension/img3.png"),
                    getImageUrl("projects/theBoxDimension/img4.png"),
                    getImageUrl("projects/theBoxDimension/img5.png"),
                    getImageUrl("projects/theBoxDimension/img6.png"),
                    getImageUrl("projects/theBoxDimension/img7.png"),
                    getImageUrl("projects/theBoxDimension/img8.png")
                ]}/>
        </div>
    )
}