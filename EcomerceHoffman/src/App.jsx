//import './App.css'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-dom'
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"} />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App