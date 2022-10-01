import styles from '~/styles/noticias/Noticias.module.scss'

export default function Imgnotice() {
    return (
        <>
            <div className={styles.portada}>
                <div className={styles.fondo}>
                    <div className={styles.elementos_portada}>
                        <p className={styles.titulo}>
                            Eventos y Noticias
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
}