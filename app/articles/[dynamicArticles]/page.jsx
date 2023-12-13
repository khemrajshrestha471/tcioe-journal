"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Footer from "@/components/Footer";
import { FaRegFilePdf } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
// import HelperNavbar from "../HelperNavbar";

const ContainerIssues = styled.div`
  h1 {
    text-align: justify;
  }
  a {
    text-decoration: none;
  }

  h3 {
    color: #dc4350;
  }

  span {
    a {
      font-size: 1.3rem;
      margin-top: 5rem;
      padding-top: 5rem;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 1.4rem;
      text-align: left;
    }
  }
`;

const IssuesBody = styled.div`
  padding-bottom: 5px;
  blockquote {
    display: flex;
    gap: 2rem;
  }

  p {
    margin-top: 0.7rem;
    &:hover {
      cursor: pointer;
    }
  }

  pre {
    white-space: wrap;
  }
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

const WholeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  gap: 3rem;
  margin: 2rem 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div`
  padding-left: 4rem;

  @media (max-width: 1100px) {
    padding-right: 4rem;
  }

  @media (max-width: 800px) {
    padding: 0 2rem;
  }
`;

const RightContainer = styled.div`
  margin-right: 2rem;

  padding: 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: 5px 0 5px rgba(0.1, 0.1, 0.1, 0.1),
    -5px 0 5px rgba(0.1, 0.1, 0.1, 0.1), 0 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
  margin-top: 10px;

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2f2f2f;
  }

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

const NameAuthor = styled.div`
  padding: 0.5rem 0;
`;

const DoiPdf = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Doi = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const Pdf = styled.div`
  button {
    padding: 0.5rem 2rem;
    border-radius: 0.3rem;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 0;
  }
`;

const DisciplineGenre = styled.div`
padding-bottom: 0.5rem;
span {
  font-size: 0.6rem;
  color: green;
  padding: 0 0.5rem;
}
`;

const Keywords = styled.div`
  display: flex;
  p {
    font-style: italic;
  }

  @media (max-width: 550px) {
    padding: 0.8rem 0;
  }
`;

const AbstractContent = styled.div`
  padding: 1rem 0 2rem 0;

  p {
    text-align: justify;
  }
`;

const FetchLatest = styled.div`
  padding: 1rem 0;
`;

const Title = styled.div`
  a {
    text-decoration: none;
    font-size: 18px;
    text-align: justify;
    color: blue;
  }

  a:active {
    color: red;
  }
`;

const Name = styled.div`
  padding: 0.3rem 0;
  span {
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const PubDate = styled.div`
  blockquote {
    font-size: 1rem;
    text-align: justify;
  }
`;

const WholeUnderline = styled.div`
  margin-top: 10px;
  height: 0.5px;
  background-color: red;
  border-radius: 2px;
`;

const DetailInfo = styled.div`
  span {
    display: flex;
    padding: 0.1rem 0;
  }
`;

const page = ({ params }) => {
  const [executiveData, setExecutiveData] = useState([]);
  const [show, setShow] = useState(false);
  const [randomArticles, setRandomArticles] = useState([]);
  const [authorMap, setAuthorMap] = useState({});

  const ToggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const data = await response.json();
        setExecutiveData(data);

        const shuffledData = shuffleArray(data);
        setRandomArticles(shuffledData.slice(0, 4));

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

  const getSortedAuthorNames = (article) => {
    const sortedAuthors = article.authors.sort((a, b) => a.id - b.id);
    return sortedAuthors;
  };

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <>
      <Navbar />
      <SubNavbar />
      {/* <HelperNavbar /> */}
      <WholeContainer>
        <LeftContainer>
          {executiveData.map((article) => (
            <ContainerIssues key={article.id}>
              {article.id === params.dynamicArticles ? (
                <>
                  <h1>{article.title}</h1>
                  <NameAuthor>
                    {article.authors.length > 0 && (
                      <span>
                        {getSortedAuthorNames(article).map((author, index) => (
                          <React.Fragment key={index}>
                            {index > 0 && "\u00A0\u00A0\u00A0\u00A0"}
                            {author.given_name} {author.family_name}
                            <sup>{String.fromCharCode(97 + index)}&nbsp;</sup>
                            <a href={`mailto:${author.email}`}>
                              <IoIosMail />
                            </a>
                          </React.Fragment>
                        ))}
                      </span>
                    )}
                  </NameAuthor>
                  <DetailInfo>
                    <span>
                      <span>
                        <blockquote>Vol.&nbsp;</blockquote>
                        <p>{article.volume},</p>
                      </span>
                      &nbsp;
                      <span>
                        <blockquote>Issue&nbsp;</blockquote>
                        <p>{article.number},</p>
                      </span>
                      &nbsp;
                      <span>
                        <blockquote>pp&nbsp;</blockquote>
                        <p>{article.pages},</p>
                      </span>
                      &nbsp;
                      <span>
                        <p>{formatDate(article.date_published)}.</p>
                      </span>
                    </span>
                  </DetailInfo>
                  <IssuesBody>
                    {show ? (
                      <>
                        <span>
                          {getSortedAuthorNames(article).map(
                            (author, index) => (
                              <>
                              <br />
                                <pre key={index}>
                                  <strong>{String.fromCharCode(97 + index)}:</strong>&nbsp;
                                  <>
                                  {author.bio ? (
                                    author.bio + ", "
                                  ) : (
                                    ""
                                  )}
                                  {author.affiliation ? (
                                    author.affiliation + ", "
                                  ) : (
                                    ""
                                  )}
                                  {author.country ? (
                                    author.country
                                  ) : (
                                    ""
                                  )}
                                  </>
                                </pre>
                              </>
                            )
                          )}
                        </span>
                        <p onClick={ToggleShow}>
                          Show Less <IoIosArrowUp />
                        </p>
                      </>
                    ) : (
                      <p onClick={ToggleShow}>
                        Show More <IoIosArrowDown />
                      </p>
                    )}
                  </IssuesBody>

                  <hr />

                  <DoiPdf>
                    <Doi>
                      <strong>DOI: &nbsp;</strong>
                      <a
                        href={`https://doi.org/${article.doi_id}`}
                        target="_blank"
                      >
                        https://doi.org/{article.doi_id} <MdArrowOutward />
                      </a>
                    </Doi>
                    <Pdf>
                      <a
                        href={`https://nepjol.info/index.php/jiee/article/view/${article.url_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <FaRegFilePdf /> View PDF
                        </button>
                      </a>
                    </Pdf>
                  </DoiPdf>

                  <DisciplineGenre>
                    {article.genre ? (
                      article.genre
                    ) : (
                      ""
                    )} 
                    {article.genre && article.discipline ? (
                      <span><FaCircle /></span> 
                    ) : (
                      ""
                    )}
                    
                    {article.discipline ? (
                      article.discipline
                    ) : (
                      ""
                    )}
                  </DisciplineGenre>

                  <Keywords>
                    <strong>Keywords: &nbsp;</strong> <p>{article.keywords}</p>
                  </Keywords>
                  <AbstractContent>
                    <h2>Abstract</h2>
                    <Line width={"80px"} />
                    <p>{article.abstract}</p>
                  </AbstractContent>
                  <h3>Disclaimer:</h3>
                  <p>
                    This page may contain partial information. For more details,
                    please refer to 
                    <a
                      href={`https://nepjol.info/index.php/jiee/article/view/${
                        article.url_id.split("/")[0]
                      }`}
                      target="_blank"
                    >
                      &nbsp;this link.
                    </a>
                  </p>
                </>
              ) : (
                ""
              )}
            </ContainerIssues>
          ))}
        </LeftContainer>
        <RightContainer>
          <p>More Articles</p>
          <Line width={"100px"} />
          {randomArticles.map((article) => (
            <FetchLatest key={article.id}>
              {article.id != params.dynamicArticles ? (
                <>
                  <Title>
                    <span>
                      <a href={`/articles/${article.id}`}>{article.title}</a>
                    </span>
                  </Title>

                  <Name>
                    {article.authors.length > 2 && (
                      <span>
                        {`${authorMap[article.authors[0].id]} .... ${
                          authorMap[
                            article.authors[article.authors.length - 1].id
                          ]
                        }`}
                      </span>
                    )}
                    {article.authors.length == 1 && (
                      <span>{`${authorMap[article.authors[0].id]}`}</span>
                    )}
                    {article.authors.length == 2 && (
                      <span>
                        {`${authorMap[article.authors[0].id]}, ${
                          authorMap[article.authors[1].id]
                        }`}
                      </span>
                    )}
                  </Name>

                  <PubDate>
                    <blockquote>
                      {formatDate(article.date_published)}
                    </blockquote>
                  </PubDate>
                  <WholeUnderline />
                </>
              ) : (
                ""
              )}
            </FetchLatest>
          ))}
        </RightContainer>
      </WholeContainer>

      <Footer />
    </>
  );
};

export default page;
