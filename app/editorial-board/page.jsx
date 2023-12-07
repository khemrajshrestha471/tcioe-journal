"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { SiOrcid } from "react-icons/si";

const Information = styled.div`
  margin: 3rem 3rem 1rem 3rem;
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
  margin: 5px 3rem 1.5rem 3rem;
`;

const WholeLine = styled.div`
  height: 1px;
  width: 93%;
  background-color: rgb(170, 170, 172);
  margin: 3px 3rem;

  @media (max-width: 850px) {
    margin: 3px 1rem;
    width: 91%;
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

    a {
      color: #76b200;
      font-size: 1.2rem;
      padding-left: 0.2rem;
    }
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
  padding-left: 0.3rem;

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
    <>
      <Navbar />
      <SubNavbar />
      {executiveData.map((member) => (
        <Information key={member.id}>
          <h3>Editorial Board</h3>
          <Line width={"100px"} />

          {member.role === "Editor-in-chief" ? (
            <>
              <h4>{member.role}</h4>
              <WholeLine />

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
                    {member.name}{" "}
                    <Icon>
                      <a href={`${member.link}`} target="_blank">
                        <SiOrcid />
                      </a>
                    </Icon>{" "}
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
            <>
            <h3>Loading...</h3>
            <WholeLine />
            </>
            
          )}


          {member.role === "Editors" ? (
            <>
              <h4>{member.role}</h4>
              <WholeLine />

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
                    {member.name}{" "}
                    <Icon>
                      <a href={`${member.link}`} target="_blank">
                        <SiOrcid />
                      </a>
                    </Icon>{" "}
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
            <>
            <h3>Loading...</h3>
            <WholeLine />
            </>
            
          )}



          {member.role === "Patron" ? (
            <>
              <h4>{member.role}</h4>
              <WholeLine />

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
                    {member.name}{" "}
                    <Icon>
                      <a href={`${member.link}`} target="_blank">
                        <SiOrcid />
                      </a>
                    </Icon>{" "}
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
            <>
            <WholeLine />
            <h3>Loading...</h3>
            <WholeLine />
            </>
            
          )}
        </Information>
      ))}
      <Footer />
    </>
  );
};

export default page;
