import React from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";

const NewsArticle = (props) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="news">
        <Container className="p-5 ">
            <div className="newsArticle" md={3}>
                <div className="articleDate">{props.date}</div>
                <div className="articleTitle">{props.title}</div>
                <p>{props.body}</p>
            </div>
        </Container>
    </Jumbotron>
    </div>
  );
};

export default NewsArticle;
