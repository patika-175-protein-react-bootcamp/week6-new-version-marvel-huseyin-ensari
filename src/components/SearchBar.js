import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { fetchFilterHeros } from "../services/charactersServices";
import "../styles/components/SearchBar.css";


const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState(false);
    const searchRef = useRef();
    const { t } = useTranslation();


    const isTyping = search.replace(/\s+/, '').length > 1;

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearch("");
        }
    };

    useEffect(() => {
        isTyping ? getFilterHeros() : setResult(false);
    }, [search]);

    const getFilterHeros = async () => {
        const response = await fetchFilterHeros(search);
        const filteredHeros = response.data.results;
        if (filteredHeros.length > 0) setResult([...response.data.results]);
    };

    const handleChange = (e) => setSearch(e.target.value);

    return (
        <div id="search__box" ref={searchRef}>
            <input type="text" value={search} placeholder={t("homePage.searchInputPlaceHolder")} id="search__bar" onChange={handleChange} />
            {
                isTyping && (
                    <div className="search__result">
                        {
                            result && result.map(item => (
                                <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <div key={item.id} className="search__result_item">
                                        {t("homePage.characterName")}:  {item.name}
                                    </div>
                                </Link>
                            ))
                        }
                        {
                            !result && (
                                <div className="search__result__not_found">
                                    {t("homePage.searchNotFound")}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default SearchBar;