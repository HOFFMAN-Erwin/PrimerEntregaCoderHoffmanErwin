import CartWidget from '../CardWidget/CardWidget';
import { Link } from "react-dom";
function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent:"space-between", alignItems: 'center' }}>
      <h1>Ecomerce</h1>
      <section>
        <Link to="/category/celular"> Celulares </Link>
        <Link to="/category/tablet"> Tablets </Link>
        <Link to="/category/computer"> Computers </Link>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar