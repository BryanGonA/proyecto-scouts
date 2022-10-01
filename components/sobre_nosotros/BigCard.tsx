import styles from '~/styles/nosotros/Nosotros.module.scss'

export default function BigCard({ title, image, document, button_description, children }: any) {
    return (
        <div className={styles.container}>
            <div className=''>
                <img src="img/about/curve.svg" alt="imagen" className={styles.image_svg}/>
                <div className={styles.cont_center}>
                    <h1 className={styles.subtittle_style}>{title}</h1>
                </div>
                <div className={styles.cont_center}>
                    <div className={styles.description_style}>{children}</div>
                </div>
                <div className={styles.cont_center}>
                    <a href={document} target="_blank">
                        <button className={styles.custom_button}>{button_description}</button>
                    </a>
                </div>
                <div className={styles.cont_right}>
                    <img src={image} alt="imagen" className={styles.image} />
                </div>
            </div>
        </div>
    )
}