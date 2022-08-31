import Trailer from "./trailer"
import '../styles/franja.css'

export default function Franja(){


  return <div className='contenedor-franja'>
    <div className='titulos-franja'>
      <h1>TITULO DE LA FRANJA TIPS PROMOCIONES</h1>
      <p>Breve descripcion</p>
    </div>
    <div className='trailers-franja'>
      <Trailer></Trailer>
      <Trailer></Trailer>
      <Trailer></Trailer>
    </div>
  </div>
}