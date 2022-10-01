import { NextPage } from "next"
import RamaHeader from '~/components/ramas/RamaHeader'
import RamaContent from '~/components/ramas/RamaContent'
import RamaGallery from '~/components/ramas/RamaGallery'

// Corresponde a la ruta http://.../ramas/rovers
const RoversPage: NextPage = () => {
  const photos = [
    {
      src: "/img/ramas/rovers/1.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/2.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/3.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/4.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/5.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/6.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/7.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/8.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/9.png",
      width: 3,
      height: 4
    },
    {
      src: "/img/ramas/rovers/10.png",
      width: 3,
      height: 4
    },
  ];
  return (
    <>
      <RamaHeader color="#BC2934" name="Rovers" family="Clan Rover Impeesa Lili" motto="Servir" logo="/img/ramas/rovers/logo.png" />
      <RamaContent>
        <p>Esta rama está constituida por jóvenes de los 16 a los 18 años, y esta es la historia…</p>
        <p>La tropa llevaba ya nueve meses de trabajo y la mayoría de los guías, al igual que algunos troperos ya estaban grandecitos y empezaban a sentirse incomodos trabajando con muchachos mucho mas pequeños que ellos. Era necesario pues, brindarles algo mas atractivo que les diera nuevos ánimos para seguir en nuestro Grupo Scout.</p>
        <p>Fue así, que en enero de 1.984 empezó a funcionar nuestro Clan con los siguientes integrantes: Aureliano Samboní, Milton Marino Vélez, Cesar Franco, Jesús Eduardo Loaiza, Nayil Alvis, Raúl Olave, Ricardo Romero y Jairo Linar Flor, teniendo como Jefe de Clan a nuestro fundador Jairo Restrepo.</p>
        <p>De esa manera, adoptaron la costumbre de hacer las reuniones todos los sábados, después de la reunión de Tropa, en la casa de alguno de los muchachos para crear un ambiente mas informal y de camaradería.</p>
      </RamaContent>
      <RamaGallery photos={photos}/>
    </>
  )
}

export default RoversPage