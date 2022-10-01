import styles from '~/styles/ramas/RamaHeader.module.scss'

interface Props {
    color: string,
    name: string,
    family: string,
    motto: string,
    logo: string,
}

export default function RamaHeader({ color, name, family, motto, logo }: Props) {
    return (
        <div className={styles.block} style={{ backgroundColor: color}}>
            <div className={styles.block_text}>
                <p className={styles.title}>{name}</p>
                <p className={styles.family}>{family}</p>
                <p className={styles.motto}>"{motto}"</p>
            </div>
            <div className={styles.block_logo}>
                <img className={styles.logo} src={logo} alt={name} />
            </div>
        </div>
    )
}