import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile/Profile";
import user from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "../data/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";

const mainRootRef = document.querySelector("#root");
const AppContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#959cdb",
    margin: "0 auto",
};

function App() {
    return (
        <section style={AppContainerStyles}>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
        </section>
    );
}

ReactDOM.render(<App />, mainRootRef);
