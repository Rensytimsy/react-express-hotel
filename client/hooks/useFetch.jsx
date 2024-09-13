import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get(url);
                setData(response.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    const refetchData = async () => {
        setLoading(true);
        try{
            const response = await axios.get(url);
            setData(response.data);
        }catch(err){
            setError(err);
        }
        setLoading(false);
    }

    return {data, error, loading, refetchData} ;
}

export default useFetch;