
import "./Banner.css"
import { Link } from "react-router-dom";

export default function Banner({
    
    imagenBanner,
    imagenSubBanner,
    titulo,
    subtitulo,
    descripcion
  
  }) {
    return (   
      
        <div className="contenedor_banner">
            <img src={imagenBanner} alt="banner"/>
            <div className="contenedor_subBanner">
                <div className="contenedor_titulo">
                    <h1 className="titulo">{titulo}</h1>
                    <h2>{subtitulo}</h2>
                    <p>{descripcion}</p>
                </div>
                <Link>
                    <img src={imagenSubBanner} alt="Sub Banner" />
                </Link>

            </div>
        </div>
      
    );
  }

