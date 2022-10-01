import styles from '~/styles/nosotros/Nosotros.module.scss'

export default function Container({ children, image}: any) {
    return (
        <div className={styles.backcontainer}>
            
            <div className={styles.cont_right}>
                <img src={image} alt="imagen" className={styles.image}/>
            </div>
            <div className={styles.cont_center}>
                <h1 className={styles.tittle_style}>¿Quiénes Somos?</h1>
            </div>            
            <div className={styles.cont_cards}>
            { children }
            </div>
            <div className={styles.cont_left}>
                <img src={image} alt="imagen" className={styles.image}/>
            </div> 
         </div>        
    )
}