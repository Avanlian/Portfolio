import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import Markdown from "react-markdown";
import md from "./content/Insta485/Insta485.md?raw"
import subTitle from "./content/Insta485/SubTitle.md?raw"

export function Insta485()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="Insta 485 (Instagram Clone)"
                subTitle={subTitle}
                description={md}
                images={[
                ]}/>
        </div>
    )
}