import { NextPage } from "next"
import RamaHeader from '~/components/ramas/RamaHeader'
import RamaContent from '~/components/ramas/RamaContent'
import RamaGallery from '~/components/ramas/RamaGallery'

// Corresponde a la ruta http://.../ramas/cachorros
const CachorrosPage: NextPage = () => {
  const photos = [
    {
      src: "/img/ramas/cachorros/1.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/2.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/3.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/4.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/5.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/6.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/7.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/8.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/9.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/10.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/11.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/12.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/13.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/14.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/15.png",
      width: 1,
      height: 1
    },
    {
      src: "/img/ramas/cachorros/16.png",
      width: 1,
      height: 1
    },
  ];
  return (
    <>
      <RamaHeader color="#FFD770" name="Cachorros" family="Familia Jessy" motto="Amigos" logo="/img/ramas/cachorros/logo.png" />
      <RamaContent>
        <p>Los cachorros son la rama menor de nuestro grupo, está compuesta por niños y niñas con edades entre los 5 y 7 años.</p>
        <p>Los cachorros del Grupo Scout Centinelas 113, inician el 04 de Octubre del año 1.995.</p>
        <p>Teniendo como único fin que los niños y niñas mas pequeños de nuestro grupo tuvieran un programa que les brindara un mundo lleno de fantasía en el mágico mundo del bosque encantado.</p>
        <p>Su fundadora la Primera Raksha, Yolanda Montenegro de Bonilla.</p>
        <p>El Nombre de la FAMILIA JESSI, surge por el nombre del libro “la fantasía de los gnomos” uno de ellos es JESSI quien es el que siempre está atento es el consejero de los cachorros le encanta escuchar los problemas que tiene todos los amigos del bosque para así juntos buscar siempre una solución. Nombre acorde al cuidado, protección y amor a la naturaleza y los bosques.</p>
      </RamaContent>
      <RamaGallery photos={photos}/>
    </>
  )
}

export default CachorrosPage