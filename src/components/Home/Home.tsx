import { Test } from "../../test";
import { Info } from "../Info/Info"
import { Main } from "../Main/Main";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { SideBar } from "../SideBar/SideBar";
import homeStyles from './home.module.scss';

export const Home = () => {
    return (
        <>
            <main className={homeStyles.container}>
                <Main />
            </main>
            {/* <Test /> */}
        </> 
    )
}
