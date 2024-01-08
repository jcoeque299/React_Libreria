import { Outlet } from "react-router-dom"

function LayoutPublic() {
    return (
      <>
        <header></header>
        <main><Outlet/></main>
        <footer></footer>
      </>
    )
  }
  
  export default LayoutPublic