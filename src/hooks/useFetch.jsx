import { useEffect, useState } from "react";
import {fetchDataFromApi} from '../utils/api'

const useFetch = (endpoint) => {
    const [data, setData] = useState()

    useEffect(() => {
        makeApiCall()
    },[endpoint])

    const makeApiCall = async() => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }

    return {data}
}

export default useFetch;

/* 

This is a custom hook created for making the api call
const makeApiCall = async() => {
    const res = await fetchDataFromApi(endpoint)
    setData(res)
}

this will make the api call and the response received from the strapi cms will be stored inside setData
and then the useFecth returns data that is received from the api at line 16
*/