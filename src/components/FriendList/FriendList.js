import React from "react";
import styles from "./FriendList.module.css";

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

export default FriendList;
