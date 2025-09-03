import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";
import Markdown from "react-markdown";
import md from "./content/theTowerOfAlbion.md?raw"

export function TheTowerOfAlbion()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Tower of Albion"
                description={md}
                images={[
                    getImageUrl("projects/theTowerOfAlbion/img1.png"),
                    getImageUrl("projects/theTowerOfAlbion/img2.png"),
                    getImageUrl("projects/theTowerOfAlbion/img3.png"),
                    getImageUrl("projects/theTowerOfAlbion/img4.png"),
                    getImageUrl("projects/theTowerOfAlbion/img5.png"),
                    getImageUrl("projects/theTowerOfAlbion/img6.png"),
                    getImageUrl("projects/theTowerOfAlbion/img7.png")
                ]}/>
        </div>
    )
}