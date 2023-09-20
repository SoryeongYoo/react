import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? <h1 className={styles.load}>Loading...</h1> :
                (
                    <Carousel>{movies.map((movie) =>
                    (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />

                    ))}
                    </Carousel>
                )
            }
        </div>
    );
}

const MAX_VISIBILITY = 3;
function Carousel({ children }) {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    console.log(count);
    console.log(active);
    return (
        <div className={styles.carousel}>
            {active > 0 &&
                <button className={styles.left} onClick={() => setActive(i => i - 1)}>
                    <TiChevronLeftOutline />
                </button>
            }
            {React.Children.map(children, (child, i) => (
                <div className={styles.container} style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i), //부호를 나타내는 -1 또는 1반환
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointerEvents': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 &&
                <button className={styles.right} onClick={() => setActive(i => i + 1)}>
                    <TiChevronRightOutline />
                </button>
            }
        </div>
    );
}

export default Home;