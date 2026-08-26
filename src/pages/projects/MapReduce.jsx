import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import Markdown from "react-markdown";
import md from "./content/MapReduce/MapReduce.md?raw"
import subTitle from "./content/MapReduce/SubTitle.md?raw"

export function MapReduce()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="MapReduce"
                subTitle={subTitle}
                description={md}
                images={[
                ]}/>
        </div>
    )
}