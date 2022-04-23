import "../styles/components/OptionsBar.css";
import LanguageBar from "./LanguageBar";
import SearchBar from './SearchBar';
import { useTranslation } from "react-i18next";
import "../styles/components/OptionsBar.css";


const OptionsBar = () => {

    const { t } = useTranslation();
    return (
        <div id="option__box" className="">
            <div className="col">
                <div id="searchbar__text" className="row">{t("homePage.searchCharacter")}</div>
                <div id="option__bar" className="row justify__between align__center" >
                    <SearchBar />
                    <LanguageBar />
                </div>
            </div>
        </div>
    );
};

export default OptionsBar;