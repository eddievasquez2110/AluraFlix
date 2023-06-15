
import "./Footer.css"
import { Link } from "react-router-dom";
import {VscGithub} from "react-icons/vsc"
import {BsLinkedin} from "react-icons/bs"


export default function Banner({
    
    logo,
    descripcion
  
  }) {
    return (   
      
        <div className="contenedor_footer">
            <div className="contenedor_redes">
                <Link to='https://github.com/eddievasquez2110' target="_blank">
                    <VscGithub className="icon"/>
                </Link>
                <Link to='https://www.linkedin.com/in/eddie-omar-vasquez-espinoza-041a45233' target="_blank">
                    <BsLinkedin className="icon"/>
                </Link>
            </div>
            <img src={logo} alt="logo"/>
            <p>{descripcion}</p>
        </div>
      
    );
  }