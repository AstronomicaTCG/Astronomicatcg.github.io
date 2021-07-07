import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import NewsArticle from "./NewsArticle";

const News = ({ heading, news }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="news">
        <Container className="p-5">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>
          <div className="newsArticleScrollContainer">
            {news.map((article, index) => (
              <NewsArticle class="newsArticle"
                date={news[index].date}
                title={news[index].title}
                body={news[index].body}
              ></NewsArticle>
            ))}
          </div>
        </Container>
    </Jumbotron>
    </div>
  );
};

export default News;
