import descrStyles from './description.module.scss';

export const Description = () => {
    return (
        <>
            <section className={descrStyles.description}>
                    <section className={descrStyles.top}>
                        <p className={descrStyles.text}>Hi, I'm a </p>
                            <section className={descrStyles.interactiveText}>
                                <p><span>developer</span>,</p>
                                <p><span>designer</span>,</p>
                                <p><span>creative technologist</span>,</p>
                            </section>
                    </section>
                    <p className={descrStyles.text}>who finds joy in the challenge of creating for people.</p>
                </section>
        </>
    )
}
