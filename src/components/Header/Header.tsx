import { Outlet } from "react-router-dom";
import headerStyles from './header.module.scss';

export const Header = () => {
    return (
        <>
        {/* V1 */}
            <main className={headerStyles.main}>
                <section className={headerStyles.container}>
                    <h3 className={headerStyles.text}>GIULIA LEONI</h3>
                    <h3 className={headerStyles.text}>CONTACT</h3>
                </section>
            </main>

            <Outlet />
        </>
    )
}
