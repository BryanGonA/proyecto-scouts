import styles from '~/styles/ramas/RamaContent.module.scss'


export default function RamaHeader({ children }: any) {
    return (
        <div className={styles.block}>
            <div className={styles.block_text}>
                {children}
            </div>
        </div>
    )
}