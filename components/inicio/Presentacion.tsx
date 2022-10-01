import styles from '~/styles/inicio/Presentacion.module.scss'

export default function presentacion() {

    return (
        <div className={styles.portada}>
            <div className={styles.elementos_portada}>

                <div className={styles.titulo}>
                    <p>Grupo Scout Centinelas 113 - Cali</p>
                </div>
                <div className={styles.subtitulo}>
                    <p>Scout A.C.E</p>
                </div>
            </div>
        </div>

    )
}