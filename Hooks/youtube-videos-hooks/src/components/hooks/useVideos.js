import { useState, useEffect } from "react";
import youtube from "../../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        try {
            let response = await youtube.get("/search", {
                params: {
                    q: term,
                },
            });
            setVideos(response.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    return [videos, search];
};

export default useVideos;
