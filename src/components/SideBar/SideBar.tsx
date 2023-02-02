import sideBarStyles from './sideBar.module.scss';

export const SideBar = () => {
    return (
        <section className={sideBarStyles.container}>
            <button className={sideBarStyles.btn}>mode</button>
            <button className={sideBarStyles.btn}>party</button>
        </section>
    )
}
