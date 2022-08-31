import '../styles/register.css'


export default function Register(){

  return <div className='contenedor-register'>
    <form className='form-register'>
      <div>
        <label>TEXTO</label><input type='text' required></input>
      </div>
      <div>
        <label>TEXTO</label><input type='text' required></input>
      </div>
      <div>
        <label>TEXTO</label><input type='text' required></input>
      </div>
      <div>
        <label>TEXTO</label><input type='text' required></input>
      </div>

      <button>REGISTRAR</button>
      <button>YA TENGO CUENTA</button>
    </form>
  </div>
}