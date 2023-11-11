import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4224c9c4cfmshf5c9c55d360124cp19ef68jsnf53197c38ba4',
        'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com'
    }
};

fetch('https://shazam-api6.p.rapidapi.com/shazam/recognize/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
});