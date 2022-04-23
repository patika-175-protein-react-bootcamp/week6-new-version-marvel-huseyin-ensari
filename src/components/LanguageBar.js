import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageBar = () => {

    const { i18n } = useTranslation();
    const [language, setLanguage] = useState();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
        setLanguage(lng);
    };

    useEffect(() => {
        currentLanguage();
    }, []);

    const currentLanguage = async () => {
        const localLanguage = await localStorage.getItem("lang");
        if (!localLanguage) {
            await localStorage.setItem("lang", "tr");
        }
        i18n.changeLanguage(localLanguage);
        setLanguage(localLanguage);
    };

    return (
        <div id="localization" className="col">
            <div className="row">
                <button className={`language__button ${language === 'fr' && 'active'}`} onClick={() => changeLanguage("fr")} >FR</button>
                <button className={`language__button ${language === 'en' && 'active'}`} onClick={() => changeLanguage("en")}>EN</button>
                <button className={`language__button ${language === 'tr' && 'active'}`} onClick={() => changeLanguage("tr")}>TR</button>
            </div>
        </div>
    );
};

export default LanguageBar;