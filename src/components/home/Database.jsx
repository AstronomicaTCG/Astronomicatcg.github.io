import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Card from "./Card";

const Database = ({ heading, cards, cardInfo }) => {

  const [displayedCardInfo, setDisplayedCardInfo] = useState(["", "", "", ""])

  const toggleAllSelections = (val) => {
    let checkboxes = document.getElementsByClassName("checkBox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = val;
    }
  }

  return (
  <div>
    <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="database">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>

        <div className="database">
          <Container className="databaseInfoPanel">
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for a card..."
                  aria-label="Search for a card..."
                  aria-describedby="basic-addon2"
                ></FormControl>
              </InputGroup>
              <div className="howToPlayTextHeading">Filter By</div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Units</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Munitions</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Events</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Planets</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>ARs</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>SRs</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>CRs</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Rs</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>UCs</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Cs</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Elysium Expedition</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Hyperius Fallen</label>
              </div>
              <div>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox"/>Starter Decks</label>
              </div>
              <Button variant="dark" onClick={() => toggleAllSelections(true)}>Select All</Button> &nbsp;
              <Button variant="dark" onClick={() => toggleAllSelections(false)}>Clear All</Button>
              <div className="cardInfoContainer">
                <p className="cardInfo">Name: {displayedCardInfo[0]}</p>
                <p className="cardInfo">Rarity: {displayedCardInfo[1]}</p>
                <p className="cardInfo">Set: {displayedCardInfo[2]}</p>
                <p className="cardInfo">Type: {displayedCardInfo[3]}</p>
              </div>
            </div>
          </Container>

          <Container className="databaseScrollContainer">
          <Row xs={1} md={3}>
            {cards.map((card, index) => (
              <Col>
                <Card
                  index={index}
                  imageUrl={card} 
                  rarity={cardInfo[index].rarity} 
                  set={cardInfo[index].set} 
                  type={cardInfo[index].type}
                  setDisplayedCardInfo={setDisplayedCardInfo}
                ></Card>
              </Col>
            ))}
          </Row>
        </Container>
        </div>

      </Container>
    </Jumbotron>
  </div>
  );
};

export default Database;
