import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";

export function TheBoxDimension()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
        </div>
    )
}