"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

import { ArticleBody, ArticlePosition, ArticleLists, Line, IndividualCard, PDFLink } from "@/components/ArticleCardStyles";

const ViewButton = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  background-color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  // width enough to fit the text
  width: fit-content;

  &:active {
    color: red;
}`;

const VolumePage = () => {
  const [articlesByVolume, setArticlesByVolume] = useState({});
  const [showAllArticles, setShowAllArticles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const data = await response.json();

        const articlesGroupedByVolume = {};
        data.forEach((article) => {
          const { volume } = article;
          if (!articlesGroupedByVolume[volume]) {
            articlesGroupedByVolume[volume] = [];
          }
          articlesGroupedByVolume[volume].push(article);
        });

        setArticlesByVolume(articlesGroupedByVolume);
        setShowAllArticles(Object.fromEntries(Object.keys(articlesGroupedByVolume).map(volume => [volume, false])));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleReadMore = (volume) => {
    setShowAllArticles(prevState => ({ ...prevState, [volume]: !prevState[volume] }));
  };

  return (
    <>
      <ArticleBody>
        {Object.keys(articlesByVolume).map((volume) => (
          <div key={volume}>
            <h2>Volume {volume}</h2>
            <Line width={"70px"} />
            <ArticlePosition>
            {articlesByVolume[volume].slice(0, showAllArticles[volume] ? articlesByVolume[volume].length : 3).map((article) => (
                <ArticleLists key={article.id}>
                  <IndividualCard>
                    <p>
                      <a href={`/articles/${article.id}`}>{article.title}</a>
                    </p>
                    {article.authors.map((author, index) => (
                      // if index is greater than 0, add a comma before the author name
                      index > 0 ? <span key={index}>, {`${author.given_name} ${author.family_name}`}</span> :
                      <span key={index}>{`${author.given_name} ${author.family_name}`}</span>
                    ))}
                    <blockquote>{article.date_published}</blockquote>
                    <PDFLink
                      href={`https://nepjol.info/index.php/jiee/article/view/${article.url_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaRegFilePdf /> View PDF
                    </PDFLink>
                  </IndividualCard>
                </ArticleLists>
              ))}
            </ArticlePosition>
            {articlesByVolume[volume].length > 3 && (
              <ViewButton onClick={() => handleReadMore(volume)}>
                {showAllArticles[volume] ? "Show Less" : "Show More"}
              </ViewButton>
            )}
          </div>
        ))}
      </ArticleBody>
    </>
  );
};

export default VolumePage;