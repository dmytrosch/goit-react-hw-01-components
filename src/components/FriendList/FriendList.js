import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
    return (
        <section className={styles.container}>
            <ul>
                {friends.map((friend) => {
                    return (
                        <li className={styles.friend} key={friend.id}>
                            <span
                                className={
                                    friend.isOnline
                                        ? styles.isOnline
                                        : styles.isOffline
                                }
                            ></span>
                            <img
                                src={friend.avatar}
                                alt="users's avatar"
                                width={50}
                                className={styles.avatar}
                            />
                            <span className={styles.name}>{friend.name}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

FriendList.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/747/747376.svg",
    isOnline: false,
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;
