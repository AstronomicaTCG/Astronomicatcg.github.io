import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const Shop = ({ heading, items }) => {
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
                title="EE Booster Pack"
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[0]}>
              </iframe>
              <p>description text</p>
            </div>
            <div className="shopModule">
              <iframe
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[1]}>
              </iframe>
              <p>description text</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="EE Booster Pack"
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[2]}>
              </iframe>
              <p>description text</p>
            </div>
            <div className="shopModule">
              <iframe
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[3]}>
              </iframe>
              <p>description text</p>
            </div>
          </div>

          {/* Third Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="EE Booster Pack"
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[4]}>
              </iframe>
              <p>description text</p>
            </div>
            <div className="shopModule">
              <iframe
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[5]}>
              </iframe>
              <p>description text</p>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="shopEmbedContainers">
            <div className="shopModule">
              <iframe
                title="EE Booster Pack"
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[6]}>
              </iframe>
              <p>description text</p>
            </div>
            <div className="shopModule">
              <iframe
                className="shopItem"
                style={{
                  border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
                }}
                src={items[7]}>
              </iframe>
              <p>description text</p>
            </div>
          </div>
          
        </Container>
    </Jumbotron>
  </div>
  );
};

export default Shop;
