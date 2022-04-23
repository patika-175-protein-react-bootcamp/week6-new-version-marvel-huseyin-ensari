import "../styles/components/Pagination.css";

const Pagination = ({ setOffset, total, limit, page }) => {
    const lastPageNumber = Math.round(total / limit);

    const handlePage = (event, info) => {
        const pageNumber = Number(event.target.innerHTML);
        if (info) {
            info === "previous" ? setOffset(prevState => prevState - limit) : setOffset(prevState => prevState + limit);
        } else {
            if (pageNumber <= page) {
                setOffset((prevState) => prevState - (limit * (page - pageNumber)));
            } else {
                setOffset((prevState) => prevState + (limit * (pageNumber - page)));
            }
        }
        window.scrollTo(0, 100);
    };
    return (
        <div id='pagination-section' className="row justify__end">
            <div id='pagination'>
                <div className="row justify__center align__center">
                    {
                        page > 4 && <button onClick={(e) => handlePage(e, "previous")}><i className="fa-solid fa-chevron-left"></i></button>
                    }
                    <button className={page === 1 ? "active" : undefined} onClick={handlePage}>1</button>
                    {
                        page < 4 && lastPageNumber > 4 && (
                            <div>
                                <button className={page === 2 ? "active" : undefined} onClick={handlePage}>2</button>
                                <button className={page === 3 ? "active" : undefined} onClick={handlePage}>3</button>
                                <button className={page === 4 ? "active" : undefined} onClick={handlePage}>4</button>
                                <button disabled>...</button>
                            </div>
                        )
                    }
                    {
                        page > 3 && page < (lastPageNumber - 2) && (
                            <div>
                                <button disabled>...</button>
                                <button onClick={handlePage}>{page - 1}</button>
                                <button className='active'>{page}</button>
                                <button onClick={handlePage}>{page + 1}</button>
                                <button disabled>...</button>
                            </div>
                        )
                    }
                    {
                        page > lastPageNumber - 3 && (
                            <div>
                                <button disabled>...</button>
                                <button className={page === lastPageNumber - 3 ? "active" : undefined} onClick={handlePage}>{lastPageNumber - 3}</button>
                                <button className={page === lastPageNumber - 2 ? "active" : undefined} onClick={handlePage}>{lastPageNumber - 2}</button>
                                <button className={page === lastPageNumber - 1 ? "active" : undefined} onClick={handlePage}>{lastPageNumber - 1}</button>
                            </div>
                        )
                    }
                    <button className={page === lastPageNumber ? "active" : undefined} onClick={handlePage}>{lastPageNumber}</button>
                    {
                        page < lastPageNumber - 3 && <button onClick={(e) => handlePage(e, "next")}><i className="fa-solid fa-chevron-right"></i></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;