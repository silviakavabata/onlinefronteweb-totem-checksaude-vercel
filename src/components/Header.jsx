import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.style.css';

function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [userIcon, setUserIcon] = useState(null);

  useEffect(() => {
    try {
      const userFromStorage = JSON.parse(sessionStorage.getItem('usuarioLogado'));

      if (userFromStorage) {
        setUsuarioLogado(userFromStorage);
        setUserIcon(userFromStorage.foto);
      }
    } catch (error) {
      console.log('no login');
    }
  }, []);

  const logout =()=>{
    sessionStorage.removeItem("usuarioLogado");
    console.log("saindo")
    window.location="/login"
  }

  return (
    <>
      <header className="navbar">
        <Link to="/">
          <img src="\assets\totem-check-saude-logo.png" alt="" className="brand" />
        </Link>

        
        {usuarioLogado ? (
          <div style={{ display: 'flex' , alignItems:'center' }}>
            <div>
            <p>Bem vindo {usuarioLogado.nome}</p>
            <p>{usuarioLogado.email}</p>
            </div>
            <div>
                <a href='#' onClick={logout}>Log Out</a>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;