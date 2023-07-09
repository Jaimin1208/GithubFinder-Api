import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

 function Navbar({title}) {
   return (
       <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
           <div className="container flex justify-between mx-auto">
               <div className=" mx-2 px-2">
                   <FaGithub className="inline text-3xl pr-2" />
                   <Link to="/" className="text-lg font-bold align-middle">
                       {title}
                   </Link>
               </div>
               <div className=" px-2 mx-2">
                       <Link to="/" className="btn btn-sm btn-ghost rounded-btn">
                           Home
                       </Link>
                       <Link to="/about" className="btn btn-sm btn-ghost rounded-btn">
                           About
                       </Link>
        
               </div>
           </div>
           
       </nav>
   )
}

Navbar.defaultProps = {
     title:"Github Finder"
 }

Navbar.propTypes = {
    title:PropTypes.string 
}
 export default Navbar