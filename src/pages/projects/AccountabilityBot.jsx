import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import Markdown from "react-markdown";
import md from "./content/AccountabilityBot/AccountabilityBot.md?raw"
import subTitle from "./content/AccountabilityBot/SubTitle.md?raw"

export function AccountabilityBot()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="AI Accountability Bot"
                subTitle={subTitle}
                description={md}
                images={[
                    getImageUrl("projects/AIChatBot/img1.png"),
                    getImageUrl("projects/AIChatBot/img2.png"),
                    getImageUrl("projects/AIChatBot/img3.png"),
                    getImageUrl("projects/AIChatBot/img4.png"),
                    getImageUrl("projects/AIChatBot/img5.png"),
                    getImageUrl("projects/AIChatBot/img6.png"),
                    getImageUrl("projects/AIChatBot/img7.png"),
                    getImageUrl("projects/AIChatBot/img8.png"),
                    getImageUrl("projects/AIChatBot/img9.png")
                ]}/>
        </div>
    )
}