import sideBarStyles from './sideBar.module.scss';

export const SideBar = () => {
    return (
        <section className={sideBarStyles.container}>
            <button>mode</button>
            <button>party</button>
        </section>
    )
}
