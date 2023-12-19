"use client";

import React, { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import styled from "styled-components";
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

const Page = ({ params }) => {
  const [articles, setArticles] = useState([]);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [latestVolume, setLatestVolume] = useState(5);
  const { volume, issue } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all articles
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const allArticles = await response.json();
        setArticles(allArticles);

        // Calculate latest volume
        const latestVolume = Math.max(
          ...allArticles.map((article) => article.volume)
        );
        setLatestVolume(latestVolume);

        // Only show articles from latest volume
        const filteredArticles = allArticles.filter(
          (article) => article.volume === latestVolume
        );
        
        // sort articles by date
        setArticles((articles) =>
          articles.sort((a, b) => {
            return new Date(b.date_published) - new Date(a.date_published);
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [volume, issue]);

  const handleShowMore = () => {
    setShowAllArticles(true);
  };

  const handleShowLess = () => {
    setShowAllArticles(false);
  };

  return (
    <>
      <ArticleBody>
        <h2>Volume {latestVolume}</h2>
        <Line width={"70px"} />
        <ArticlePosition>
        {articles.slice(0, showAllArticles ? articles.length : 9).map(
            (article) => (
            <ArticleLists key={article.id}>
              <IndividualCard>
                <p>
                  <a href={`/articles/${article.id}`}>{article.title}</a>
                </p>
                <span>{`${article.authors[0].given_name} ${article.authors[0].family_name}`}</span>
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
        {articles.length > 9 && (
          <>
            {showAllArticles ? (
              <ViewButton onClick={handleShowLess}>Show Less</ViewButton>
            ) : (
              <ViewButton onClick={handleShowMore}>Show More</ViewButton>
            )}
          </>
        )}
      </ArticleBody>
    </>
  );
};

export default Page;
