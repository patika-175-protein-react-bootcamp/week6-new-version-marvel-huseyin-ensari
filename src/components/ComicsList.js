import React from 'react';
import { useTranslation } from 'react-i18next';

const ComicsList = ({ comics }) => {

    const { t } = useTranslation();


    return (
        <div>
            <div className="container">
                <span className='cover__title bold'>{t("detailPage.comics")}</span>
            </div>
            <div className="cover__list" >
                {
                    comics.length > 0 ? comics?.map(comic => (
                        <div className="cover__card" key={comic.id}>
                            <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} />
                            <span className='my-1 bold'>{comic.title.split("(")[0]}</span>
                        </div>
                    ))
                        : <div className="cover__null">{t("detailPage.comicsNull")}</div>
                }
            </div>
        </div>
    );
};

export default ComicsList;