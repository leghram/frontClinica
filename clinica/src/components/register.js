import '../styles/register.css'


export default function Register(){

  return <div className='contenedor-register'>
    <form className='form-register'>
      <div className='datos'>
        <label>Nombre</label><input type='text' required></input>
      </div>
      <div className='datos'>
        <label>Apellido</label><input type='text' required></input>
      </div>
      <div className='datos'>
        <label>Correo</label><input type='text' required></input>
      </div>
      <div className='datos'>
        <label>Contrasena</label><input type='password' required></input>
      </div>
      <div className='datos'>
        <label>Usuario</label>
        <select className='entrada'>
          <option value='cliente' selected>Cliente</option>
          <option value ='doctor'>Doctor</option>
        </select>
      </div>

      <button className='boton'>REGISTRAR</button>
      <button className='boton'>YA TENGO CUENTA</button>
    </form>
  </div>
}