import { useState } from 'react';
import "../styles/Login.style.css"

function Login() {
  //hooks
  const [usuarios, setUsuarios] = useState({
    usuario: '',
    senha: '',
  });
  console.log(usuarios);

  // funções
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://onlinefronteweb-totem-checksaude.vercel.app/user");
      if (response.ok) {
        const users = await response.json();
        console.log(users);
        const foundUser = users[usuarios.usuario];
        console.log("usuario", foundUser)
        if (foundUser && foundUser.senha === usuarios.senha) {
          const { senha, ...userDetails } = foundUser;
          console.log("User Details:", userDetails);
          console.log("oi")
  
          sessionStorage.setItem("usuarioLogado", JSON.stringify(userDetails));
          const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
          console.log("user", usuarioLogado);
  
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else {
          alert("Usuario e/ou senha incorretos!")
          setUsuarios({
            usuario: "",
            senha: "",
          });
        }
      } else {
        setUsuarios({
          usuario: "",
          senha: "",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <main>
        <section className='central-box'>
          <div className='login bg-azul'>
            <form onSubmit={handleSubmit}>
              <div>
                <h2 className='texto-preto'>Login</h2>
                <input
                  type="text"
                  name="usuario"
                  value={usuarios.usuario}
                  placeholder="  Digite seu usuario"
                  onChange={handleChange}
                />
              </div>

              <div>
                <h2 className='texto-preto'>Senha</h2>
                <input
                  type="password"
                  name="senha"
                  value={usuarios.senha}
                  placeholder="  Digite sua senha"
                  onChange={handleChange}
                />
              </div>
              <img src="" alt="" />
              <button type="submit" className='botao-vermelho'>Logar</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
