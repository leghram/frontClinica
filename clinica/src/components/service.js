import '../styles/service.css'


export default function Service({imagen,titulo,descripcion}){


  return <div className='contenedor-service'>
    <div className='imagen-service' ><img className='imagen' src={imagen} alt='imagen'></img></div>
    

    <h2>{titulo}</h2>

    <p className='descripcion'>{descripcion}</p>

    <div className='boton-service'><a href='./'>MAS INFORMACION</a></div>
  </div>
}



