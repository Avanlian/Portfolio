import styles from "../../App.module.css";
import { PageNavbar } from "../../components/Navbar/PageNavbar";
import { ProjectPage } from "../../components/Projects/ProjectPage";
import { getImageUrl } from "../../utils";
import { Contact } from "../../components/Contact/Contact";

export function TheTowerOfAlbion()
{
    return(
        <div className={styles.App}>
            <PageNavbar />
            <ProjectPage
                title="The Tower of Albion"
                description="Hey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enoughHey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enough, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?Hey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enough, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?Hey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enough, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?Hey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enough, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?Hey, so I have a question. If a, um... So, if a portal... You'd help design the carousel. So my question is, if the text in the description next to the page goes long enough, is it going to wrap underneath the carousel? That might be what I want, by the way. So, you know, help me out here. Like, is that... Do I need to change any code? Or do you have my documents? So can you look at them and double-check?"
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