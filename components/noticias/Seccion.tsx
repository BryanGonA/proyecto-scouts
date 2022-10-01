import styles from '~/styles/noticias/Noticias.module.scss'

export default function Seccion({ titulo, descripcion, imagen, tipo, fecha, linea }: any) {
    return (
        <section>
            <div className="container-fluid">
                <div className="content-center">
            <div className="row">
                <div className="col-md-8">
                    <div className={styles['productos-container']}>
                        <div className={styles.descripcion}>
                            <a>
                                {titulo}
                            </a>
                            <div className={styles.descripcion2}>
                                <a>
                                    {descripcion}
                                </a>
                            </div>
                            <div className={`${styles['text-aviso1']} ${styles['text-aviso-tipo']}`}>
                                <a>
                                    {tipo}
                                </a>
                            </div>
                            <div className={`${styles['text-aviso2']} ${styles['text-aviso-izq']}`}>
                                <a>
                                    {fecha}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles['productos-container']}>
                        <img src={imagen} alt="imagen"/>
                    </div>
                </div>
                <div className={styles.linea}>
                    {linea}
                </div>
            </div>
            </div>
            </div>
        </section>

    )
}