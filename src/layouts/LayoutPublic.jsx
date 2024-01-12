import { Outlet } from "react-router-dom"


function LayoutPublic() {
    return (
      <>
        <header>
        <nav>
            <figure>
                <img src="../images/logo.png"></img>
                <figcaption>MyBrary</figcaption>
            </figure>
            {/*Añadir menu de hamburguesa*/}
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