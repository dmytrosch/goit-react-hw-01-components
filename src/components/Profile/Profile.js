import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile(props) {
    const { name, tag, location, avatar, stats } = props;
    const { views, followers, likes } = stats;
    return (
        <div className={styles.container}>
            <img
                className={styles.avatarImg}
                src={avatar}
                alt="user-avatar"
                width="250"
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
            <ul className={styles.stats}>
                <li className={styles.statsItem}>
                    <p className={styles.statItemKey}>Followers:</p>
                    <p className={styles.statItemValue}>{followers}</p>
                </li>
                <li className={styles.statsItem}>
                    <p className={styles.statItemKey}>Views:</p>
                    <p className={styles.statItemValue}>{views}</p>
                </li>
                <li className={styles.statsItem}>
                    <p className={styles.statItemKey}>Likes:</p>
                    <p className={styles.statItemValue}>{likes}</p>
                </li>
            </ul>
        </div>
    );
}

Profile.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/747/747376.svg",
    followers: 0,
    views: 0,
    likes: 0,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;
