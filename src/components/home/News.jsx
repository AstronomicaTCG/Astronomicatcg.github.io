import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import SkillsCard from "./SkillsCard";

const News = ({ heading, news }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0" id="news">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>

        <div className="d-flex flex-wrap justify-content-center">
          {news.map((newsItem, index) => (
            <SkillsCard key={`${newsItem}-${index}`} name={newsItem} />
          ))}
        </div>
      </Container>
    </Jumbotron>
    </div>
  );
};

export default News;
