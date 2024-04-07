import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDBlOTg4YTYzMGQwMmMwNTU0MGEyN2JlYjI4MThjMSIsInN1YiI6IjY2MTAzNmZkYjk3NDQyMDE1NmM4MjM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o4tBabWQ3xsJHnIhawo-Uiiu2jEqGdn10DFNQzTIRFg";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};