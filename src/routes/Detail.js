import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

function Detail() {
    const { id } = useParams(); //파라미터 값 반환
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovies(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div className={styles.container}>
            {loading ? <h1 className={styles.load}>Loading...</h1> :
                (
                    <div>
                        <h1 className={styles.title}>{movies.title}</h1>
                        <img src={movies.medium_cover_image} alt={movies.title} />
                        <p>{movies.year}년•{movies.runtime}분</p>
                        <p> rate: {movies.rating} downloaded: {movies.download_count} like: {movies.like_count} {movies.genres.map(g=><li>{g}</li>)}</p>
                        <hr />
                        <p>{movies.description_full}</p>
                    </div>
                )
            }

        </div>

    );
}

export default Detail;