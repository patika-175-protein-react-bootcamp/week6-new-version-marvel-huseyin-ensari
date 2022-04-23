import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchComicsByHero, fetchHeroById, fetchSeriesByHero } from '../services/charactersServices';
import "../styles/pages/CharacterDetailPage.css";
import { ComicsList, Loading, SeriesList } from '../components';
import { useTranslation } from 'react-i18next';

const CharacterDetailPage = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [characterImage, setCharacterImage] = useState("");
    const [description, setDescription] = useState("");
    const [comics, setComics] = useState([]);
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const getHeroDetail = async () => {
        const response = await fetchHeroById(id);
        const data = response.data.results[0];
        return data;
    };

    const getComicsByHero = async () => {
        const response = await fetchComicsByHero(id);
        return response.data.results;
    };

    const getSeriesByHero = async () => {
        const response = await fetchSeriesByHero(id);
        return response.data.results;
    };


    const fillProperties = async () => {
        const characterDetail = await getHeroDetail();
        setName(characterDetail.name);
        setDescription(characterDetail.description);
        setCharacterImage(`${characterDetail.thumbnail.path}/standard_xlarge.${characterDetail.thumbnail.extension}`);
        const comicList = await getComicsByHero();
        setComics([...comicList]);
        const seriesList = await getSeriesByHero();
        setSeries([...seriesList]);
        setLoading(false);
    };


    useEffect(() => {
        fillProperties();
    }, []);

    if (loading) return <Loading />;

    return (
        <div>
            <div className="container row gap h-100">
                <img src={characterImage} />
                <div className="column align__start w-100 h-100">
                    <div className="row justify__between w-100">
                        <span id='hero__title' className='bold'>{name}</span>
                        <div className='back__button' onClick={() => navigate(-1)}>
                            <i class="fa-solid fa-house"></i>
                        </div>
                    </div>
                    <span>{description ? description : t("detailPage.descriptionNull")}</span>
                </div>
            </div>
            <ComicsList comics={comics} />
            <SeriesList series={series} />

        </div >

    );
};

export default CharacterDetailPage;