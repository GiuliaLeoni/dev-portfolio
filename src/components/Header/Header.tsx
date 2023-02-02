import { Outlet } from "react-router-dom";
import headerStyles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <main className={headerStyles.main}>
                <section className={headerStyles.container}>
                    <h3 className={headerStyles.text}>Giulia Leoni (ɔ◔‿◔)ɔ ♥</h3>
                </section>
            </main>

            <Outlet />
        </>
    )
}
