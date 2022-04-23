import md5 from "js-md5";
import axios, { URL } from '../constants/api/axios';


const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
const FULL_KEY = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;

export const fetchHeros = async (limit, offset) => {
    try {
        const res = await axios.get(
            `${URL.characters}${FULL_KEY}&offset=${offset}&limit=${limit}`
        );

        if (res.statusText === 'OK') return res.data;
        else return { error: "Data error" };

    } catch (err) {
        console.log('fetch error : ', err);
    }
};

export const fetchHeroById = async (characterID) => {
    try {
        const res = await axios.get(
            `${URL.characters}/${characterID}${FULL_KEY}`
        );

        if (res.statusText === 'OK') return res.data;
        else return { error: "Data error" };

    } catch (err) {
        console.log('fetch error : ', err);
    }
};

export const fetchComicsByHero = async (characterID) => {
    try {
        const res = await axios.get(
            `${URL.characters}/${characterID}/comics${FULL_KEY}&limit=10`
        );

        if (res.statusText === 'OK') return res.data;
        else return { error: "Data error" };

    } catch (err) {
        console.log('fetch error : ', err);
    }
};

export const fetchSeriesByHero = async (characterID) => {
    try {
        const res = await axios.get(
            `${URL.characters}/${characterID}/series${FULL_KEY}&limit=10`
        );

        if (res.statusText === 'OK') return res.data;
        else return { error: "Data error" };

    } catch (err) {
        console.log('fetch error : ', err);
    }
};

export const fetchFilterHeros = async (nameStartsWith) => {
    try {
        const res = await axios.get(
            `${URL.characters}${FULL_KEY}&limit=${3}&nameStartsWith=${nameStartsWith}`
        );

        if (res.statusText === 'OK') return res.data;
        else return { error: "Data error" };

    } catch (err) {
        console.log('fetch error : ', err);
    }
};