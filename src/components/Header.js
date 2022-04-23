import { MarvelHeros, Logo } from "../constants/assets";
import "../styles/components/Header.css";

const Header = () => {
    return (
        <div id='header'>
            <img id='allheros' src={MarvelHeros} alt='marvel all heros' />
            <img id='marvel-logo-img' src={Logo} alt='marvel logo' />
        </div>
    );
};

export default Header;