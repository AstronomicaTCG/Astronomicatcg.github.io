import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Shop = ({ heading }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white overflow-hidden pageHeading" id="shop">
        <Container className="">
          <h2 className="text-center">
            {heading}
          </h2>
          
          <div className="shopEmbedContainers">
            <iframe
            title="EE Booster Pack"
            className="shopItem"
            style={{
              border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
            }}
            src="https://www.tgcwidgets.com/widget.html#id=BE10418A-C861-11E9-AA51-07AEAB9B09E5&size=bar&buttons=two">
            </iframe>
            <iframe
              className="shopItem"
              style={{
                border:"none", background:"transparent", margin:0, padding:0, width:"740px", height: "163px"
              }}
              src="https://www.tgcwidgets.com/widget.html#id=ABEB204E-7C90-11EB-9666-7DD5C687CE59&size=bar&buttons=two">
            </iframe>
          </div>
          
        </Container>
    </Jumbotron>
  </div>
  );
};

export default Shop;
