import styles from '~/styles/nosotros/Nosotros.module.scss'

export default function Card({ title, description, image }: any) {
    return (
        <div className={styles.container}>
            <div className=''>
                <img src="img/about/curve.svg" alt="imagen" className={styles.image_svg} width="100%" />
                <div className={styles.cont_center}>
                    <h1 className={styles.subtittle_style}>{title}</h1>
                </div>
                <div className={styles.cont_center}>
                    <p className={styles.description_style}>{description}</p>
                </div>
                <div className={styles.cont_right}>
                    <img src={image} alt="imagen" className={styles.image} />
                </div>

            </div>
        </div>
    )
}