import logo from "../assets/Untitled.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="flex items-center justify-between py-6">
=======
    <nav className="mb-20 flex items-center justify-between py-6">
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sheikrizwan27/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sheikrizwan27?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
