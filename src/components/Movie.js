import PropTypes, { func } from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";


function Movie({ id, coverImg, title, summary }) {

    return (
        <div>
            <div className={styles.card}>
                <img src={coverImg} alt={title} />
                <h2 className={styles.h2}>
                    <Link style={{'text-decoration-line': 'none'}}to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p className={styles.p}>{summary}</p>
            </div>
        </div>
    );
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;