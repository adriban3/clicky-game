import React from "react";
import "./characterCard.css";

const characterCard = props => (
    <div className="card">
        <div className="img-container" onClick={() => props.scoreUpdate(props.id)}>
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default characterCard;