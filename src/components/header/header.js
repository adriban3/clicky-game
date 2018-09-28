import React from "react";
import "./header.css";

const header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {props.children}
    </nav>
);

export default header;