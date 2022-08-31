import '../styles/menu.css'
import logo from '../media/logo.png'

export default function Menu(){
  return<div className='contenedor-menu'>
    <div>
      <img className='logo' src={logo}/>
    </div>
    <div className='enlaces-menu'>
      <div>HOME</div>
      <div>SERVICIOS</div>
      <div>NOSOTROS</div>
      <div>MIS RESERVACIONES</div>
      <div>MI CUENTA</div>
    </div>
  </div>
}



