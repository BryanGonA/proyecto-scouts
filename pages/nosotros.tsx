import { NextPage } from "next"
import BigCard from '~/components/sobre_nosotros/BigCard'
import Card from '~/components/sobre_nosotros/Card'
import Container from '~/components/sobre_nosotros/Container'
import styles from '~/styles/nosotros/Nosotros.module.scss'

//import { Container } from "next/app"
// Corresponde a la ruta http://.../nosotros
const AboutPage: NextPage = () => {
  return (
    <>

      <Container image='/img/antorcha.svg'>
        <BigCard className="card " title="Historia" image="img/about/history.png" button_description="Ver más" document='/documents/LIBRODEOROSCOUT-CENTINELAS113CALI.pdf'>
            <p>Hacia finales de 1.982 el grupo de monaguillos de la Iglesia San Juan Bautista tenía más de 30 acólitos; razón por la cual el sacerdote encargado pidió a quien dirigía los monaguillos que redujeran el número a 8 o 10 máximo.</p>
            <p>Al presentar esta propuesta al grupo de monaguillos se produjo un gran desconsuelo ya que habían logrado tener un ambiente de camaradería.</p>
            <p>Entonces, que hacer para no acabar esa unión y para no perder todos esos muchachos?, pensó el padre, en ese momento y se le ocurrió crear un grupo de oración pre juvenil con los más grandecitos y dejar a los pequeños sirviendo en el altar, pero esa idea no gusto demasiado.</p>
            <p>Así, que a uno de los presentes se le ocurrió proponer que formaran un grupo scout, pues esto no sería difícil ya que estaban acostumbrados a ir de paseo y salir de campamento.</p>
            <p>La idea gusto a casi todos; y el entonces párroco de la época Octavio Martínez, acepto y se ofreció ayudar en lo que más pudiera para sacar adelante tal idea… </p>
        </BigCard>
        <div className={styles.cont_subcards}>
          <Card className="card" title="Misión" description="El Grupo Scout Centinelas 113 tiene como Misión formar el carácter de los niños, niñas, jóvenes y adolescentes, inculcándoles el  cumplimiento de sus deberes; así como principios de disciplina, lealtad y ayuda al prójimo, a través de un sistema de valores basados en la Promesa y la Ley Scout, con el apoyo de adultos dispuestos y preparados para llevar a cabo su función educativa no formal." image="img/about/mision.svg">
          </Card>
          <Card className="card" title="Visión" description="Como Grupo Scout, vemos en el Escultismo un influyente para nuestros niños, niñas, jóvenes y adolescentes, basado en valores educativos, centrados en el logro de nuestra misión, involucrando a los integrantes de nuestro grupo a trabajar en conjunto para desarrollar en pleno el potencial de cada individuo, y lograr con ello construir un mundo mejor donde cada uno juegue un papel constructivo en nuestra sociedad." image="img/about/ojo.svg">
          </Card>
        </div>
      </Container>

    </>
  )

}

export default AboutPage