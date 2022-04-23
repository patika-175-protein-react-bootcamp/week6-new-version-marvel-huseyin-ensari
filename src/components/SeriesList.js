import React from 'react';
import { useTranslation } from 'react-i18next';

const SeriesList = ({ series }) => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="container">
                <span className='cover__title bold'>{t("detailPage.series")}</span>
            </div>
            <div className="cover__list" >
                {
                    series.length > 0 ? series?.map(comic => (
                        <div className="cover__card" key={comic.id}>
                            <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} />
                            <span className='my-1'>{comic.title.split("(")[0]}</span>
                        </div>
                    ))
                        : <div className="cover__null">{t("detailPage.seriesNull")}</div>
                }
            </div>
        </div>
    );
};

export default SeriesList;