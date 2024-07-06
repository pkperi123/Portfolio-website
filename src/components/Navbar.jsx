import logo from "../assets/pklogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-cneter justify-between py-6">
    <div className = "flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src = {logo} alt = "logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-2 text-2xl">
        <FaGithub/><a href="https://github.com/pkperi123">Github</a>
        <FaLinkedin /><a href="https://www.linkedin.com/in/periakaruppan-palaniappan/">Linkedin</a>
    </div>
  </nav>
};

export default Navbar;
