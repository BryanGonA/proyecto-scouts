import { NextPage } from "next"
import RamaHeader from '~/components/ramas/RamaHeader'
import RamaContent from '~/components/ramas/RamaContent'
import RamaGallery from '~/components/ramas/RamaGallery'

// Corresponde a la ruta http://.../ramas/lobatos
const LobatosPage: NextPage = () => {
  const photos = [
    {
      src: "/img/ramas/lobatos/1.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/lobatos/2.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/3.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/lobatos/4.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/5.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/6.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/7.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/8.png",
      width: 4,
      height: 3
    },
    {
      src: "/img/ramas/lobatos/9.png",
      width: 4,
      height: 3
    },
  ];
  return (
    <>
      <RamaHeader color="#FAB60C" name="Lobatos" family="Manada Seeonee" motto="Mejor" logo="/img/ramas/lobatos/logo.png" />
      <RamaContent>
        <p>Los niños que pertenecen a esta rama, están entre los 7 y 10 años, La Manada Seeonee fue creada el día 05 de Mayo de 1.984.</p>
        <p>Después de un tiempo, empezó a surgir el deseo de tener esta nueva Rama en nuestro Grupo, entonces Rubén Darío Loaiza encontró en dos de sus compañeras de clase las personas indicadas para iniciarla, las invitaron y les plantearon la idea la cual aceptaron.</p>
        <p>Fue así que el día 05 de Mayo de 1.984, en una noche de lamparata en la Viga Pance, nació oficialmente la Manada Seeonee, y allí se asignaron los primeros cargos de nuestros Jefes de Manada,  los cuales quedaron de la siguiente manera: AKELA - Viviana Valderrama, BAGHEERA – Nancy Bastidas, BALOO – Rodrigo Vera Martínez.</p>
        <p>Se decidió ponerle el nombre de MANADA SEEONEE, como recuerdo de la Manada del libro de la selva, de donde se toma toda la filosofía de esta Rama menor de nuestro Movimiento Scout.</p>
      </RamaContent>
      <RamaGallery photos={photos}/>
    </>
  )
}

export default LobatosPage