import Trailer from "./trailer"
import '../styles/franja.css'

export default function Franja(){


  return <div className='contenedor-franja'>
    <div className='titulos-franja'>
      <h2>TIPS Y PROMOCIONES</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis</p>
    </div>
    <div className='trailers-franja'>
      <Trailer></Trailer>
      <Trailer></Trailer>
      <Trailer></Trailer>
    </div>
  </div>
}