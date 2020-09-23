import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randomColor from "../../js/randomColor";

function Statisctics(props) {
    const { title, stats } = props;
    return (
        <section className={styles.container}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statsList}>
                {stats.map((el) => {
                    return (
                        <li
                            style={{ backgroundColor: randomColor() }}
                            className={styles.statsItem}
                            key={el.id}
                        >
                            <p className={styles.label}>{el.label}</p>
                            <p>{el.percentage}%</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

Statisctics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Statisctics;
