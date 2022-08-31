import '../styles/service.css'


export default function Service({imagen,titulo,descripcion}){


  return <div className='contenedor-service'>
    <div className='imagen-service'>{imagen}</div>

    <h2>{titulo}</h2>

    <p>{descripcion}</p>

    <div className='boton-service'>MAS INFORMACION</div>
  </div>
}