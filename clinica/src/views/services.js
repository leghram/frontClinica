import Menu from '../components/menu'
import Footer from '../components/footer'
import Service from '../components/service'
import '../viewstyles/services.css'

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
    <div className= 'list-services'>
      {
        listaServicios.map((elemento, indice)=>{
          return <Service key={indice} imagen={'IMAGEN'} titulo={'EJEMPLO DE TITULO'} descripcion={'Esta es la descripcion'}>
          </Service>
        })
      }
    </div>
    <Footer></Footer>
  </div>
}