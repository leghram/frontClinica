import '../styles/footer.css'
import logo from '../media/logo.png'

export default function Footer(){

  return <div className="contenedor-footer">
    <div className='elemento'>
      <img src={logo} className='logo' alt='logo'></img>
      <p>Mauris non nisi semper, lacinia neque in, dapibus leo.<br/> 
        Curabitur sagittis libero tincidunt tempor finibus. <br/> 
        Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.
      </p>
    </div>
    <div className='elemento'>
      <div>
        1247/Plot No. 39, 15th Phase,<br/> 
        LHB Colony, Kanpur
      </div>
      <div>
        1800-121-3637<br/> 
        +91-7052-101-786
      </div>
      <div>
        info@example.com<br/> 
        help@example.com
      </div>
    </div>
  </div>
}