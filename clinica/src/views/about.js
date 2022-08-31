import '../viewstyles/about.css'
import Menu from '../components/menu'
import Footer from '../components/footer'

export default function About(){


  return <div >
    <Menu></Menu>
    <div className='contenedor-about'>
      <div>
        <div>DATOS</div>
        <div>IMAGEN</div>
      </div>
      <div>
        <h2>Estamos para cuidar a ti y a los tuyos</h2>
        <p>esto es una descripcion sobre mas de la clinica</p>
      </div>
      <div></div>
        <div>
          <div>IMAGEN</div>
          <p>descripcion</p>
        </div>
        <div>
          <div>IMAGEN</div>
          <p>descripcion</p>
        </div>
        <div>
          <div>IMAGEN</div>
          <p>descripcion</p>
        </div>
        <div>
          <div>IMAGEN</div>
          <p>descripcion</p>
        </div>
      <div>
        <h2>Estamos cerca de ti y tu familia</h2>
        <p>esta es una descripcion</p>
      </div>
      <div>
        <div>IMAGEN 1</div>
        <div>IMAGEN 2</div>
      </div>
    </div>

    <Footer></Footer>
  </div>

}