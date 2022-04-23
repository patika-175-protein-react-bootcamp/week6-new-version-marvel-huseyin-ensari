import { useEffect, useState } from "react";
import { Header, HeroList, Loading, Pagination } from "../components";
import { OptionsBar } from "../components";
import { fetchHeros } from '../services/charactersServices';

const HomePage = () => {

    const [heros, setheros] = useState();
    const [offset, setOffset] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(true);
    const limit = 12;
    const page = offset / limit + 1;

    async function getData() {
        const data = await fetchHeros(limit, offset);
        setheros(data?.data?.results);
        setTotalData(data?.data?.total);
        sessionStorage.setItem(page, JSON.stringify(data?.data?.results));
        sessionStorage.setItem("total", data?.data?.total);
        setLoading(false);
    }

    const isExistSessionStorage = () => {
        const data = JSON.parse(sessionStorage.getItem(page));
        const total = sessionStorage.getItem("total");
        if (!data) return false;
        setheros(data);
        setTotalData(total);
        setLoading(false);
        return true;
    };

    useEffect(() => {
        setLoading(true);
        if (!isExistSessionStorage()) {
            getData();
        }
    }, [offset]);



    return (
        <div className="column justify__center align__center">

            <Header />

            <OptionsBar />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <HeroList heros={heros} />
                    <Pagination
                        offset={offset}
                        setOffset={setOffset}
                        limit={limit}
                        total={totalData}
                        page={page}
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;