import Menu from '../components/menu'
import Footer from '../components/footer'
import Service from '../components/service'
import Evento from '../components/evento'
import '../viewstyles/services.css'
import Franja from '../components/franja'

const listaServicios = [
  {
    titulo:"titulo 1",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 2",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 3",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 4",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 5",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 6",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 7",
    descripcion : "ejemplo de descripcion"
  },
  {
    titulo:"titulo 8",
    descripcion : "ejemplo de descripcion"
  }
]






export default function Services(){
  return <div>
    <Menu></Menu>
    <Evento></Evento>
    <Franja></Franja>
    <div className= 'list-services'>
      {
        listaServicios.map((elemento, indice)=>{
          return <Service key={indice} imagen={'https://www.webfulcreations.com/envato/webful_dental_care/images/help/general_dentistry.jpg'} titulo={'EJEMPLO DE TITULO'} descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis'}>
          </Service>
        })
      }
    </div>
    <Footer></Footer>
  </div>
}