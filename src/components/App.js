import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile/Profile";
import user from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "../data/statistical-data.json";

const mainRootRef = document.querySelector("#root");

// ReactDom.render(
//     <Profile
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//     />,
//     mainRootRef
// );

ReactDOM.render(
    <Statistics title="Upload stats" stats={statisticalData} />,
    mainRootRef
);


