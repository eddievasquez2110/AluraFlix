
import "./Header.css";
import Boton from '../Boton/Index';
import Banner from "../Banner";

 const Header = () => {
    
    return (
        <>
        <div className="contenedor_header">
            <img src="/images/logo.png" alt="logo" />
                <Boton color="encabezado" tipo="outlined"></Boton>
                <Boton color="secundario" tipo="contained"></Boton>
                <Boton color="primario" tipo="contained"></Boton>
        </div>
        <Banner 
            imagenBanner="../images/banner.png"
            imagenSubBanner="../images/player.png"
            titulo="Front End"
            subtitulo="Challenge React"
            descripcion="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
        />
        </>


    )
}

export default Header;
