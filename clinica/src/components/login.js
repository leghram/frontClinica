import '../styles/login.css'

export default function Login(){

  return <div className='contenedor-login'>
    <form className='form-login'>
      <input type='text' placeholder='email' required></input>
      <input type='password' placeholder='password' required></input>
      <button className='boton'>Ingresar</button>
      <button className='boton'>Registrarse</button>
    </form>
  </div>
}