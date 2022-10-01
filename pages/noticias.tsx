import { NextPage } from "next"
import Seccion from "~/components/noticias/Seccion";
import Imgnotice from "~/components/noticias/Imgnotice";
import NewsPagination from '~/components/noticias/NewsPagination'
import styles from '~/styles/noticias/Noticias.module.scss'
// Corresponde a la ruta http://.../info/about
const NewsPage: NextPage = () => {
  return (
    
    <>
    <Imgnotice />
    <div className={styles.center_frame}>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fscoutcentinelas113%2F&tabs=timeline&width=500&height=1000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true" width="500" height="1000" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    </>
  )
    }

export default NewsPage