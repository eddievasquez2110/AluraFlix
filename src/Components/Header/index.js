
import "./Header.css";
import Boton from '../Boton/Index';
import { Link } from "@mui/material";

 const Header = () => {
    
    return (
        <>
        <div className="contenedor_header">
            <img src="/images/logo.png" alt="logo" />
                <Boton color="encabezado" tipo="outlined"></Boton>
                <Boton color="secundario" tipo="contained"></Boton>
                <Boton color="primario" tipo="contained"></Boton>
        </div>
        <div className="contenedor_banner">
            <img src="/images/banner.png" alt="banner"/>
            <div className="contenedor_subBanner">
                <div className="contenedor_titulo">
                    <h1 className="titulo">Front End</h1>
                    <h2>Challenge React</h2>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <Link>
                    <img src="/images/player.png"></img>
                </Link>

            </div>
        </div>
        </>


    )
}

export default Header;
