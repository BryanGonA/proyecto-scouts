import styles from "~/styles/login/Login.module.scss";

export default function Title({text}:any)  {
    return (
        <div className={styles.area_titulo}>
            <div className={styles.title}>
                <label>{text}</label>
            </div>
        </div>
    )
}