import { Link, Outlet } from "react-router-dom"


function LayoutPublic() {
    return (
      <>
        <header>
        <nav>
            <figure>
                <img src="../images/logo.png"></img>
                <figcaption>MyBrary</figcaption>
            </figure>
            <ul className="links">
              <li><Link to={"/"}>Inicio</Link></li>
              <li><Link to={"/search"}>Búsqueda</Link></li>
              <li><Link to={"/favorites"}>Favoritos</Link></li>
              <li><Link to={"/forum"}>Foro</Link></li>
            </ul>
        </nav>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer></footer>
      </>
    )
  }
  
  export default LayoutPublic