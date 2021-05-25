import React from "react";
// import { Jumbotron, Container, Row, Col, InputGroup, FormControl, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const Card = ({ imageUrl, rarity, set, type }) => {
    return (
        <div>
            <img className="databaseImage" src={imageUrl} alt="r"></img>
        </div>
    );
};

export default Card;