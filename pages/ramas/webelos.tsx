import { NextPage } from "next"
import RamaHeader from '~/components/ramas/RamaHeader'
import RamaContent from '~/components/ramas/RamaContent'
import RamaGallery from '~/components/ramas/RamaGallery'

// Corresponde a la ruta http://.../ramas/webelos
const WebelosPage: NextPage = () => {
  const photos = [
    {
      src: "/img/ramas/webelos/1.png",
      width: 5,
      height: 4
    },
    {
      src: "/img/ramas/webelos/2.png",
      width: 5,
      height: 4
    },
    {
      src: "/img/ramas/webelos/3.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/webelos/4.png",
      width: 5,
      height: 4
    },
    {
      src: "/img/ramas/webelos/5.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/webelos/6.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/7.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/8.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/9.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/10.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/11.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/12.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/webelos/13.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/14.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/15.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/webelos/16.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/webelos/17.png",
      width: 4,
      height: 3
    },
  ];
  return (
    <>
      <RamaHeader color="#213E8C" name="Webelos" family="Aldea iLama" motto="Seremos Scout Leales" logo="/img/ramas/webelos/logo.png" />
      <RamaContent>
        <p>Esta rama es una rama  de transición entre la  manada y la tropa, conformada por niños entre 11 y 12 años.</p>
        <p>La Aldea ilama del Grupo Scout Centinelas 113, nace tiempo después de hacer nuestro traslado de la Asociación Scout de Colombia a la Asociación Colombiana de Escultismo Scout A.C.E., como respuesta a la necesidad de tener una rama intermedia entre la Manada y la Tropa.</p>
        <p>Para que los niños y niñas que partían de la Manada tuvieran un programa que les brindara la fantasía que aún tenían como niños y los fuera encaminando a la aventura de la Tropa. </p>
        <p>Fue por ello que Sara María Colmenares Restrepo y Charles Fernando Ortiz Ñañez, empezaron a trabajar con la Manada de nuestro Grupo, a fin de ir conociendo a los lobatos y lobatas que ingresarían tiempo después a la Rama Webelos.</p>
        <p>La Aldea ilama, nace oficialmente el día 19 de Febrero del 2011, con el apoyo de la Cacique Mayor Alma Yolanda Gil de Aldea Petecuy del Grupo 101.</p>
      </RamaContent>
      <RamaGallery photos={photos}/>
    </>
  )
}

export default WebelosPage