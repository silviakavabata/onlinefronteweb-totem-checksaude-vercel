import "../styles/footer.style.css"
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
        <footer className="bg-azul">
          <div className="row bg-azul">
            <div>
              <h3 className="texto-vermelho">Links rapidos</h3>
              <Link to="/">
                Home
              </Link>
              <Link to="/login">Login</Link>

            </div>
            <div>
              <h3 className="texto-vermelho">Contato</h3>
              <p className="texto-branco">11 2424-2424</p>
              <p className="texto-branco">totem@checksaude.com</p>
            </div>
            <div className="column">
            <h3 className="texto-vermelho">Redes Sociais</h3>
            <img src="\assets\facebook.png"/>
            <img src="\assets\instagram.png"/>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
