// React Icons
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ cartSize }) => {
  return (
    <nav className='navbar-container'>
      <h1>Axense's Team</h1>
      <div className='navbar-container__cart'>
        <BsFillCartFill />
        <i>{cartSize}</i>
      </div>
    </nav>
  );
};

export default Navbar;
