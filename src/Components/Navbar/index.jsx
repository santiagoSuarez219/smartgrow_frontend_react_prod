import { NavLink } from "react-router-dom";
import { RiPlantLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className='bg-secondary rounded h-8 w-full flex items-center justify-center'>
        <ul>
          <li className='flex items-center'>
            <NavLink to="/">
                <h1 className='font-bold text-lg mr-1'>Smartgrow</h1>
            </NavLink>
            <RiPlantLine className="w-6 h-6 text-green-900" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar
