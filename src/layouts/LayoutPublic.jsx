import { Link, Outlet } from "react-router-dom"
import { createContext } from "react"
import { useState } from "react"

export const UserContext = createContext()

function LayoutPublic() {

    const [user, setUser] = useState(null)

    return (
      <UserContext.Provider value = {[user, setUser]}>
        <header>
        <nav>
            <figure>
                <img src="/logo.png"></img>
                <figcaption>MyBrary</figcaption>
            </figure>
            <ul className="links">
              <li><Link to={"/"}>Inicio</Link></li>
              <li><Link to={"/search"}>Búsqueda</Link></li>
              <li><Link to={"/forum"}>Foro</Link></li>
              <li><Link to={"/contact"}>Contacto</Link></li>
              {user? <li><Link to={"/favorites"}>Favoritos</Link></li>:null}
              {user? <li><Link to={"/user"}>Perfil</Link></li>:null}
              {user? <li><Link to={"/messages"}>Mensajes</Link></li>:null}
              {!user? <li><Link to={"/login"}>Log in</Link></li>:null}
              {!user? <li><Link to={"/register"}>Registrarse</Link></li>:null}
            </ul>
        </nav>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          <aside>
            <p className="footer-card-title">
            Información de contacto
            </p>
            <p className="footer-card-content" id="contactInfo">mybrary@mybrary.com<br/><br/>900100200</p>
          </aside>
          <aside>
            <p className="footer-card-title">
            Formulario de soporte
            </p>
            <p className="footer-card-content">¿Has encontrado un problema en nuestra página? ¿No tenemos el libro que buscas? Contacta con nuestro equipo usando el <Link to={"/contact"}>formulario de soporte</Link></p>
          </aside>
          <aside id="redesSociales">
            <p className="footer-card-title">
            Redes sociales
            </p>
            <figure>
              <img src="/twitter.png"></img>
              <img src="/instagram.png"></img>
            </figure>
          </aside>
        </footer>
      </UserContext.Provider>
    )
  }
  
  export default LayoutPublic