import { NavLink } from "react-router-dom";
import reactimg from '../../assets/react.svg'

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex">
        <ul>
          {" "}
          // Lado izquierdo
          <li>
            <NavLink to="/">Smartgrow</NavLink>
            <NavLink to="/graficas">Graficas</NavLink>
          </li>
        </ul>
        <ul>
          {" "}
          // Lado derecho
          <li>
            <NavLink to="/">Smartgrow</NavLink>
            <NavLink to="/graficas">Graficas</NavLink>
          </li>
        </ul>
      </nav>

      <nav className='bg-primary h-8 w-full flex items-center justify-center md:hidden'>
        <ul>
          <li className='flex'>
            <NavLink to="/">
                <h1 className='font-bold font-lg mr-1'>Smartgrow</h1>
            </NavLink>
            <img className='w-6 mx-0.5' src={reactimg} alt=""/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar
