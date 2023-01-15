import { Outlet } from "react-router-dom";
import headerStyles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <section className={headerStyles.container}>
                <h1 className={headerStyles.name}>Giulia Leoni</h1>
                <section className={headerStyles.btns}>
                    <button><span>mode</span></button>
                    <button><span>party</span></button>
                </section>
            </section>
            <Outlet />
        </>
    )
}
