"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

const ArticleBody = styled.div`
  padding: 1.3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 90rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const ArticlePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1115px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

const ArticleLists = styled.div``;

const IndividualCard = styled.div`
  padding: 1rem;
  text-align: justify;

  p {
    font-size: 1.2rem;
    white-space: nowrap;
    padding-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    color: #565555;
  }

  blockquote {
    font-size: 14px;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
  }

  @media (max-width: 770px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

const Articles = () => {
  const [executiveData, setExecutiveData] = useState([]);
  const [authorMap, setAuthorMap] = useState({});

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const data = await response.json();
        setExecutiveData(data);

        const newAuthorMap = {};
        data.forEach((article) => {
          const sortedAuthors = article.authors.sort((a, b) => a.id - b.id);

          sortedAuthors.forEach((author) => {
            newAuthorMap[
              author.id
            ] = `${author.given_name} ${author.family_name}`;
          });
        });
        setAuthorMap(newAuthorMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ArticleBody>
        <h2>Articles</h2>
        <Line width={"70px"} />
        <ArticlePosition>

          {executiveData.map((verify) => (
            <ArticleLists key={verify.id}>
              <IndividualCard>
                <p>{verify.title}</p>
                {verify.authors.length > 0 && (
                  <span>
                    {`${authorMap[verify.authors[0].id]} ... ... ... ${
                      authorMap[verify.authors[verify.authors.length - 1].id]
                    }`}
                  </span>
                )}
                <blockquote>{formatDate(verify.date_published)}</blockquote>

                <a
                  href={`https://nepjol.info/index.php/jiee/article/view/${verify.url_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegFilePdf /> View PDF
                </a>
              </IndividualCard>
            </ArticleLists>
          ))}

        </ArticlePosition>

        
      </ArticleBody>
    </>
  );
};

export default Articles;
