import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Modal } from "react-bootstrap";
import Card from "./Card";
import ReactPaginate from 'react-paginate';

const Database = ({ heading, cards, cardNames, cardInfo }) => {

  const ITEMS_PER_PAGE = 32;
  const [cardsList, setCardsList] = useState([]);

  // Create objects for each card
  if (cardsList.length === 0) {
    for (let i = 0; i < cards.length; i++) {
      cardsList.push({
        image: cards[i],
        name: cardNames[i],
        rarity: cardInfo[i].rarity,
        set: cardInfo[i].set,
        type: cardInfo[i].type,
        faction: cardInfo[i].faction,
        visible: true,
      })
    }
  }

  const [displayedCardInfo, setDisplayedCardInfo] = useState(["", "", "", ""]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showCardURL, setShowCardURL] = useState("");

  // Taken from React Paginate API
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  let currentCards = cardsList.slice(itemOffset, endOffset);
  let pageCount = Math.ceil(cardsList.length / ITEMS_PER_PAGE);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % cardsList.length;
    setItemOffset(newOffset);
  };

  // Turn all checkboxes on or off, and update states accordingly.
  const toggleAllSelections = val => {
    let checkboxes = document.getElementsByClassName("checkBox");
    for (let i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = val;
    }
    for (let i = 0, n = cardsList.length; i < n; i++) {
      cardsList[i].visible = val
    }
  }

  // Turn a specific checkbox on or off, and update state accordingly.
  const toggleFilter = (filterType, subType) => {
    for (let i = 0, n = cardsList.length; i < n; i++) {
      if (cardsList[i][filterType] === subType) {
        cardsList[i].visible = !cardsList[i].visible
      }
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
                <div className="howToPlayTextHeading">Filter By</div>
                <br></br>
                <div className="databaseFilters">
                  <div className="checkBoxColumn">
                    <b className="databaseCheckboxHeader">Type</b>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "Units")} />Units</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "Munitions")} />Munitions</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "Events")} />Events</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("type", "Planets")} />Planets</label>
                  </div>
                  <br></br>
                  <div className="checkBoxColumn">
                    <b className="databaseCheckboxHeader">Rarity</b>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "AR")} />Astral Rare</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "SR")} />Super Rare</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "CR")} />Crossover Rare</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "R")} />Rare</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "UC")} />Uncommon</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "C")} />Common</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "FP")} />Full-Art Planet</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("rarity", "P")} />Planet</label>
                  </div>
                  <br></br>
                  <div className="checkBoxColumn">
                    <b className="databaseCheckboxHeader">Set</b>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "ee")} />Elysium Expedition</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "hf")} />Hyperius Fallen</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("set", "sd")} />Starter Decks</label>
                  </div>
                  <br></br>
                  <div className="checkBoxColumn">
                    <b className="databaseCheckboxHeader">Faction</b>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "LC")} />Legion Corps</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "KC")} />Kakytos Council</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "BF")} />Babylon Force</label>
                    <label className="checkBoxLabel"><input defaultChecked className="checkBox" type="checkbox" onChange={() => toggleFilter("faction", "VY")} />Factionless</label>
                  </div>
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

            <div className='databaseRightSideContainer'>
              <Container className="databaseScrollContainer">
                <Row xs={2} md={4}>
                  {currentCards.map((card, index) => (
                    card.visible ?
                      <Col className="databaseCol">
                        <Card
                          index={index}
                          imageUrl={card.image}
                          cardName={card.name}
                          rarity={card.rarity}
                          faction={card.faction}
                          set={card.set}
                          type={card.type}
                          setDisplayedCardInfo={setDisplayedCardInfo}
                          setShowCardModal={setShowCardModal}
                          setShowCardURL={setShowCardURL}
                        >
                        </Card>
                      </Col> : ''
                  ))}
                </Row>
              </Container>
              <p className="centeredText">Page {(itemOffset / ITEMS_PER_PAGE) + 1}</p>
              <ReactPaginate
                className='databasePagination'
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
              />
            </div>

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
