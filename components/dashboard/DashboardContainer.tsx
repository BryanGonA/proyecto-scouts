import styles from '~/styles/dashboard/DashboardContainer.module.scss'
import Navigation from './Navigation'

export default function DashboardContainer({children}: any) {

    return (
        <>
            <Navigation/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}