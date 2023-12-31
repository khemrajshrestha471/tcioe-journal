"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { SiOrcid } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa";

const ContainerEditorial = styled.div`
h4 {
  margin: 1rem 3rem 0rem 6rem;
}

@media (max-width: 1000px) {
  h4 {
    margin: 1rem 3rem 0rem 1rem;
  }

}
`;

const EditorialDetails = styled.div`
margin: 3rem 3rem 0rem 3rem;
  padding-left: 3rem;
  
  @media (max-width: 1000px) {
    margin: 3rem 3rem 0rem 0rem;
    padding-left: 1rem;
  }
`;

const Information = styled.div`
margin-left: 2rem;
  h3 {
    padding-left: 3rem;
  }

  h4 {
    margin: 0 3rem;
  }

  @media (max-width: 850px) {
    margin: 1rem 0rem;
    h4 {
      text-align: center;
      margin-bottom: 0.3rem;
    }
  }
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin-top: 5px;
`;

const WholeLine = styled.div`
  height: 1px;
  width: 90%;
  background-color: rgb(170, 170, 172);
  margin-left: 6rem;
  margin-top: 5px;

  @media (max-width: 1000px) {
    margin: 3px 1rem;
    width: 95%;
  }

  @media (max-width: 400px) {
    margin: 3px 1rem;
    width: 90%;
  }
`;

const Details = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
    display: block;
  }
`;

const Photo = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  margin: 1rem 1rem 1rem 4rem;

  @media (max-width: 850px) {
    display: block;
    text-align: center;
    margin: 1rem auto -2rem auto;
  }
`;

const CircularImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 850px) {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const Desc = styled.div`
  margin-top: 2rem;
  text-align: center;
  blockquote {
    margin-left: 2rem;
    font-weight: bold;
    font-size: 18px;
    padding: 0.3rem 0;
    display: flex;
  }

  p {
    margin: 0 2rem;
    text-align: justify;
    padding: 1px 0;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 850px) {
    text-align: center;

    blockquote {
      margin-left: 0;
      justify-content: center;
    }

    p {
      text-align: center;
      padding: 2px 0;
    }
  }
`;

const Icon = styled.div`
  padding-left: 0.4rem;

  a {
    color: #76b200;
    font-size: 1.2rem;
  }

  span {
    a {
      color: rgb(80, 80, 228);
    }

    span {
      a {
        color: black;
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 700px) {
    a {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

`;

import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";

const page = () => {
  const [executiveData, setExecutiveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/board-members/"
        );
        const data = await response.json();
        setExecutiveData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContainerEditorial>
      <Navbar />
      <SubNavbar />
      <EditorialDetails>
        <h3>Editorial Board</h3>
        <Line width={"100px"} />
      </EditorialDetails>

      <h4>Editor-In-Chief</h4>
      <WholeLine />
      {executiveData.map((member) => (
        <Information key={member.id}>
          {member.role === "Editor-In_Chief" ? (
            <>
              <Details>
                <Photo>
                  <CircularImage
                    src={member.image}
                    alt={`${member.name}'s Photo`}
                    width="150"
                    height="150"
                  />
                </Photo>
                <Desc>
                  <blockquote>
                  {member.name}
                    {member.orcid_id ? (
                    <Icon>
                    <a href={`${member.orcid_id}`} target="_blank">
                      <SiOrcid />
                    </a>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.google_scholar_link ? (
                    <Icon>
                      <span>
                    <a href={`${member.google_scholar_link}`} target="_blank">
                      <SiGooglescholar />
                    </a>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.research_gate_link ? (
                    <Icon>
                      <span>
                        <span>
                        <a href={`${member.research_gate_link}`} target="_blank">
                      <FaResearchgate />
                    </a>
                        </span>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}
                  </blockquote>
                  <p>{member.designation}</p>
                  <p>{member.department}</p>
                  <p>{member.organization}</p>
                  <p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </Desc>
              </Details>
            </>
          ) : (
            ""
          )}
        </Information>
      ))}

      <h4>Editors</h4>
      <WholeLine />
      {executiveData.map((member) => (
        <Information key={member.id}>
          {member.role === "Editors" ? (
            <>
              <Details>
                <Photo>
                  <CircularImage
                    src={member.image}
                    alt={`${member.name}'s Photo`}
                    width="150"
                    height="150"
                  />
                </Photo>
                <Desc>
                  <blockquote>
                    {member.name}
                    {member.orcid_id ? (
                    <Icon>
                    <a href={`${member.orcid_id}`} target="_blank">
                      <SiOrcid />
                    </a>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.google_scholar_link ? (
                    <Icon>
                      <span>
                    <a href={`${member.google_scholar_link}`} target="_blank">
                      <SiGooglescholar />
                    </a>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.research_gate_link ? (
                    <Icon>
                      <span>
                        <span>
                        <a href={`${member.research_gate_link}`} target="_blank">
                      <FaResearchgate />
                    </a>
                        </span>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}
                  </blockquote>
                  <p>{member.designation}</p>
                  <p>{member.department}</p>
                  <p>{member.organization}</p>
                  <p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </Desc>
              </Details>
            </>
          ) : (
            ""
          )}
        </Information>
      ))}

      <h4>Patron</h4>
      <WholeLine />
      {executiveData.map((member) => (
        <Information key={member.id}>
          {member.role === "Patron" ? (
            <>
              <Details>
                <Photo>
                  <CircularImage
                    src={member.image}
                    alt={`${member.name}'s Photo`}
                    width="150"
                    height="150"
                  />
                </Photo>
                <Desc>
                  <blockquote>
                    {member.name}
                    {member.orcid_id ? (
                    <Icon>
                    <a href={`${member.orcid_id}`} target="_blank">
                      <SiOrcid />
                    </a>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.google_scholar_link ? (
                    <Icon>
                      <span>
                    <a href={`${member.google_scholar_link}`} target="_blank">
                      <SiGooglescholar />
                    </a>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}
                    {member.research_gate_link ? (
                    <Icon>
                      <span>
                        <span>
                        <a href={`${member.research_gate_link}`} target="_blank">
                      <FaResearchgate />
                    </a>
                        </span>
                    </span>
                  </Icon>
                    ) : (
                      ""
                    )}

                  </blockquote>
                  <p>{member.designation}</p>
                  <p>{member.department}</p>
                  <p>{member.organization}</p>
                  <p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </Desc>
              </Details>
            </>
          ) : (
            ""
          )}
        </Information>
      ))}

      <Footer />
    </ContainerEditorial>
  );
};

export default page;