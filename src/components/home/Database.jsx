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
  const [filterByFaction, setFilterByFaction] = useState({lc: true, kc: true, bf: true, vy: true}) // LC, KC, BF, VY

  // cards.reverse()
  // cardNames.reverse()
  // cardInfo.reverse()

  // Turn all checkboxes on or off, and update states accordingly.
  const toggleAllSelections = (val) => {
    let checkboxes = document.getElementsByClassName("checkBox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = val;
    }
    setFilterByType({units: val, munitions: val, events: val, planets: val});
    setFilterByRarity({ar: val, sr: val, cr: val, r: val, uc: val, c: val, fp: val, p: val});
    setFilterBySet({ee: val, hf: val, sd: val});
    setFilterByFaction({lc: val, kc: val, bf: val, vy: val});

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
    else if (filterType === "faction") {
      let items = {...filterByFaction};
      items[subtype] = !items[subtype];
      setFilterByFaction(items);
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
      filterBySet[cardInfo[index].set.toLowerCase()] &&
      filterByFaction[cardInfo[index].faction.toLowerCase()];
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
              <br></br>
              <b className="databaseCheckboxHeader">Type</b>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "units")}/>Units</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "munitions")}/>Munitions</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "events")}/>Events</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "planets")}/>Planets</label>
              </div>
              <br></br>
              <b className="databaseCheckboxHeader">Rarity</b>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "ar")}/>Astral Rare</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "sr")}/>Super Rare</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "cr")}/>Crossover Rare</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "r")}/>Rare</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "uc")}/>Uncommon</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "c")}/>Common</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "fp")}/>Full-Art Planet</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "p")}/>Planet</label>
              </div>
              <br></br>
              <b className="databaseCheckboxHeader">Set</b>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "ee")}/>Elysium Expedition</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "hf")}/>Hyperius Fallen</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "sd")}/>Starter Decks</label>
              </div>
              <br></br>
              <b className="databaseCheckboxHeader">Faction</b>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "lc")}/>Legion Corps</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "kc")}/>Kakytos Council</label>
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "bf")}/>Babylon Force</label>
              </div>
              <div className="checkBoxes">
                <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "vy")}/>Factionless</label>
              </div>
              <div>
                
              </div>
              <Button variant="dark" onClick={() => toggleAllSelections(true)}>Select All</Button> &nbsp;
              <Button variant="dark" onClick={() => toggleAllSelections(false)}>Clear All</Button>
              <div className="cardInfoContainer">
                  {displayedCardInfo[0] ? 
                    `${displayedCardInfo.toString().replaceAll(',', ' / ')}` :
                    'Select a card to view its attributes.'
                  }
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
                    faction={cardInfo.filter(cardFilter)[index].faction} 
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
              <img className="cardModalImage" src={showCardURL} alt="card"></img>
            </div>
          </Modal>
  
        </div>

      </Container>
    </Jumbotron>
  </div>
  );
};

export default Database;
