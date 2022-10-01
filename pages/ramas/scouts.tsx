import { NextPage } from "next"
import RamaHeader from '~/components/ramas/RamaHeader'
import RamaContent from '~/components/ramas/RamaContent'
import RamaGallery from '~/components/ramas/RamaGallery'

// Corresponde a la ruta http://.../ramas/scouts
const ScoutsPage: NextPage = () => {
  const photos = [
    {
      src: "/img/ramas/scouts/1.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/scouts/2.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/scouts/3.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/scouts/4.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/scouts/5.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/scouts/6.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/scouts/7.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/scouts/8.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/scouts/9.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/scouts/10.png",
      width: 1,
      height: 1
    },
  ];
  return (
    <>
      <RamaHeader color="#159969" name="Scouts" family="Tropa Lobos" motto="Siempre Listos" logo="/img/ramas/scouts/logo.png" />
      <RamaContent>
        <p>Es de mencionar, que fue con esta rama que nació nuestro Grupo Scout, que acoge en sus patrullas a los jóvenes entre 13 y 15 años.</p>
        <p>La primera reunión de los monaguillos interesados en conformar un Grupo Scout se realizo el día 05 de Febrero de 1.983 a las 3:00 p.m en la casa cural de la Parroquia San Juan Bautista del barrio el Guabal de la ciudad de Santiago de Cali, con la presencia de 16 muchachos.</p>
        <p>El sábado 12 de Febrero se reunieron 25 muchachos y con ellos empezaron a trabajar. Como el número ideal para una tropa Scout era de 32 integrantes, avisaron en las misas y para el día 05 de Marzo del mismo año ya eran 103 muchachos.</p>
        <p>Como no se esperaba esa cantidad y no se podían rechazar esos jóvenes, los dirigentes se vieron obligados a conformar las patrullas.</p>
        <p>Se reunían, dos veces por semana con los nuevos troperos, los miércoles en la noche y los sábados en la tarde, en el Colegio Parroquial San Juan Bautista, fuera de eso con los guías de Patrulla, los días viernes para programar las reuniones y adiestrarlos en la dirección de sus muchachos.</p>
      </RamaContent>
      <RamaGallery photos={photos}/>
    </>
  )
}

export default ScoutsPage