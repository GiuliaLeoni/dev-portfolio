import headerStyles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <section className={headerStyles.container}>
                <h1 className={headerStyles.name}>Giulia Leoni</h1>
                <section className={headerStyles.btns}>
                    <span>mode</span>
                    <span>party</span>
                </section>
            </section>
        </>
        
        
    )
}
