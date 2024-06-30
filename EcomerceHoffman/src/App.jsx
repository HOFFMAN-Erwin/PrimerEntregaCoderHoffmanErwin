import { useState } from "react"

import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


function App() {
  const [cartCount, setCartCount] = useState(5)

  const handleCount = () => {
    setCartCount( x => x+1)
  }
  return (
    <>
      <NavBar cartCount={cartCount} title="Memazon"/>
      <button className="btn btn-primary" onClick={handleCount}>Click</button>
      <ItemListContainer greetings="Bienvenidos a tu ecomerce de confianza" />
{/*       <h1>dd</h1> */}
    </>
  )
}

export default App