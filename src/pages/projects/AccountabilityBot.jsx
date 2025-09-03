import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";

export function AccountabilityBot()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
        </div>
    )
}