import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Shop = ({ heading, items, descriptions }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white overflow-hidden pageHeading" id="shop">
        <Container className="p-5">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>
          
          {/* First Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="S1 Booster Pack"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[0]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[0]}</div>
            </div>
            <div className="shopModule">
              <iframe
                title="S2 Booster Pack"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[1]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[1]}</div>
            </div>
          </div>

          {/* Second Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="S1 Cache Box"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[2]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[2]}</div>
            </div>
            <div className="shopModule">
              <iframe
                title="S2 Cache Box"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[3]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[3]}</div>
            </div>
          </div>

          {/* Third Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="Dyson Advent Starter Deck"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[4]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[4]}</div>
            </div>
            <div className="shopModule">
              <iframe
                title="Insect Oracle Starter Deck"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[5]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[5]}</div>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="Firestorm Starter Deck"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[6]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[6]}</div>
            </div>
            <div className="shopModule">
              <iframe
                title="Two Player Starter Kit"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[7]}>
              </iframe>
              <div className="shopDescriptionText">{descriptions[7]}</div>
            </div>
          </div>
          
        </Container>
    </Jumbotron>
  </div>
  );
};

export default Shop;
