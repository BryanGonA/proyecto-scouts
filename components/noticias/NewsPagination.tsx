import styles from '~/styles/noticias/Noticias.module.scss'

export default function NewsPagination()  {
    return (
        <section>
            <div className={styles.pagination}>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>
        </section>
    )
}