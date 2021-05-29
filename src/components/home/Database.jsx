import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import Card from "./Card";

const Database = ({ heading, cards, cardNames, cardInfo }) => {

  const [displayedCardInfo, setDisplayedCardInfo] = useState(["", "", "", ""]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showCardURL, setShowCardURL] = useState("");

  const [filterByType, setFilterByType] = useState({units: true, munitions: true, events: true, planets: true}); // Units, Munitions, Events, Planets
  const [filterByRarity, setFilterByRarity] = useState({ar: true, sr: true, cr: true, r: true, uc: true, c: true, fp: true, p: true}); // AR, SR, CR, R, UC, C, FP, P
  const [filterBySet, setFilterBySet] = useState({ee: true, hf: true, sd: true}); // EE, HF, SD
  const [filterByName, setFilterByName] = useState("");

  // Turn all checkboxes on or off, and update states accordingly.
  const toggleAllSelections = (val) => {
    let checkboxes = document.getElementsByClassName("checkBox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = val;
    }
    setFilterByType({units: val, munitions: val, events: val, planets: val});
    setFilterByRarity({ar: val, sr: val, cr: val, r: val, uc: val, c: val, fp: val, p: val});
    setFilterBySet({ee: val, hf: val, sd: val});
  }

  // Turn a specific checkbox on or off, and update state accordingly.
  const toggleFilter = (filterType, subtype) => {
    if (filterType === "type") {
      let items = {...filterByType};
      items[subtype] = !items[subtype];
      setFilterByType(items);
    }
    else if (filterType === "rarity") {
      let items = {...filterByRarity};
      items[subtype] = !items[subtype];
      setFilterByRarity(items);
    }
    else {
      let items = {...filterBySet};
      items[subtype] = !items[subtype];
      setFilterBySet(items);
    }
  }

  // Clear the name filter and its contents.
  const clearTextFilter = () => {
    setFilterByName("");
    document.getElementById("cardTextFilter").value = "";
  }

  // Callback function used for filtering cards.
  function cardFilter(element, index) {
    let checkBoxFilters = 
      filterByType[cardInfo[index].type.toLowerCase()] && 
      filterByRarity[cardInfo[index].rarity.toLowerCase()] && 
      filterBySet[cardInfo[index].set.toLowerCase()];
    if (filterByName !== "") {
      return checkBoxFilters && cardNames[index].toLowerCase().includes(filterByName.toLowerCase());
    }
    return checkBoxFilters;
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
                  id="cardTextFilter"
                  placeholder="Search for a card..."
                  aria-label="Search for a card..."
                  aria-describedby="basic-addon2"
                  onKeyUp={(e) => setFilterByName(e.target.value)}
                ></FormControl>
                &nbsp; <Button variant="dark" onClick={clearTextFilter}>Clear</Button>
              </InputGroup>
              <div className="howToPlayTextHeading">Filter By</div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "units")}/>Units</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "munitions")}/>Munitions</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "events")}/>Events</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "planets")}/>Planets</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "ar")}/>AR</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "sr")}/>SR</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "cr")}/>CR</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "r")}/>R</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "uc")}/>UC</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "c")}/>C</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "fp")}/>FP</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "p")}/>P</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "ee")}/>Elysium Expedition</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "hf")}/>Hyperius Fallen</label>
              </div>
              <div>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "sd")}/>Starter Decks</label>
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
              {cards.filter(cardFilter).map((card, index) => (
                <Col>
                  <Card
                    index={index}
                    imageUrl={card} 
                    cardName={cardNames.filter(cardFilter)[index]}
                    rarity={cardInfo.filter(cardFilter)[index].rarity} 
                    set={cardInfo.filter(cardFilter)[index].set} 
                    type={cardInfo.filter(cardFilter)[index].type}
                    setDisplayedCardInfo={setDisplayedCardInfo}
                    setShowCardModal={setShowCardModal}
                    setShowCardURL={setShowCardURL}
                  ></Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Modal className="cardModal"
            show={showCardModal}
            onHide={() => setShowCardModal(false)}
            animation={false}
          >
            <div className="cardModalImageContainer">
              <img className="cardModalImage" src={showCardURL} alt="r"></img>
            </div>
          </Modal>
  
        </div>

      </Container>
    </Jumbotron>
  </div>
  );
};

export default Database;
