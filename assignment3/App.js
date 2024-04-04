import React from "react";
import ReactDOM from "react-dom";
import loggo from "./google.png";
import usrr from "./user.png";

const logo = (<img src={loggo} style={{width: 100, height: 100}}/>);
const inp = (<input placeholder="Search here" style={{width: 700, height: 50}}/>);
const usr = (<img src={usrr} style={{widht:100, height:100}}/>);

const Header = () => (
    <div id="container">
        {logo}
        {inp}
        {usr}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);