import { NextPage, NextPageContext, GetServerSideProps, GetStaticProps } from 'next';
import Header from '~/components/layout/header/Header'
import Inicio from '~/components/inicio/InicioAnimacion';
import Presentacion from '~/components/inicio/Presentacion'
import Container from '~/components/inicio/Container'
import Card from '~/components/inicio/Card'
import {parseCookies} from '~/lib/parseCookies'

// Esta interfaz permite controlar los datos que pueden ser recibidos 
interface Props {
  visited: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const cookies = parseCookies(context.req)
  return {
    props: {
      visited: cookies.visited ? cookies.visited : "false"
    }
  }
}

/*
// La vista puede implementar alguno de estos dos metodos, para hacer SSG o SSR, no se deben usar los dos
// Si la vista no implementa ninguna, se considera que es SSG sin alimentación de datos

// La vista actua como estatica (Static Side Generation), obtiene la información al momento de compilar
export const getStaticProps: GetStaticProps<> = async (context) => {
  //Se hace fetch (por default en metodo GET) a la api
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      //Se pasan los datos en alguna variable como propiedad, a la vista o a los componentes
      datos: data
    },
  }
}

// Hace Server Side Render, obtiene la información al momento de consultar la vista
export const getServerSideProps: GetServerSideProps<> = async (context) => {
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      datos: data
    },
  }
} 
*/

// Corresponde al contenido de la vista (Recibe las propiedades, si pasaramos una propiedad llamada datos sería: { query, datos}: Props)
const HomePage: NextPage<Props> = ({ visited }: Props) => {
  return (
    
    <div>
      <Inicio visited={visited}/>
      <Presentacion />
      <Container imagen='/img/antorcha.svg'>
        <Card titulo='Promesa y ley' descripcion='La educación en valores expresados en una promesa y ley a los que se adhiere de manera voluntaria.' imagen='/img/jurar.png'/>
        <Card titulo='Aprender haciendo' descripcion='La educación activa a través del aprender haciendo, el aprender jugando y el aprender por medio del servicio.' imagen='/img/equipo.png'/>
        <Card titulo='Vida en pequeños grupos' descripcion='La pertenencia a pequeños grupos, con el acompañamiento responsable de adultos.' imagen='/img/trabajo-en-equipo.png'/>
        <Card titulo='Adulto no interferente' descripcion='La participación indirecta del adulto, en forma estimulante y no interferente, con la oportunidad de ayudar a los muchachos en la organización y dirección de actividades y en la toma de decisiones.' imagen='/img/familia.png'/>
        <Card titulo='Vida al aire libre' descripcion='Programas progresivos, atrayentes y estimulantes, basados en los intereses de los participantes compuestos por un marco simbólico sugerente y un sistema progresivo de objetivos y actividades educativas variadas, incluyendo juegos, habilidades útiles y servicios a la comunidad, que ocurren en gran parte al aire libre en contacto con la naturaleza.' imagen='/img/leisure.png' ultimo/>
      </Container>
    </div>
    

  )
}

export default HomePage
