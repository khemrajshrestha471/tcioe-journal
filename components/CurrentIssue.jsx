"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { FaArrowRight } from "react-icons/fa6";

const Issued = styled.div`
padding: 1.3rem;
margin-left: auto;
margin-right: auto;
max-width: 90rem;

@media (max-width: 500px) {
  padding: 0.5rem;
}
`;

const IssueBody = styled.div`
background-color: #F1F1F1;
display: flex;
gap: 1.6rem;
margin-top: 2rem;

@media (max-width: 1200px) {
  gap: 0.5rem;
}

@media (max-width: 900px) {
  display: block;
  text-align: center;
  padding-top: 1rem;
}
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

const IssueDesc = styled.div`

`;

const ImageLoad = styled.div``;

const Description = styled.div`
align-self: center;

p {
  color: #616373;
  font-size: 1.3rem;
  padding: 0.3rem 0 0.5rem 0;
}

a {
  text-decoration: none;
  font-size: 1.1rem;

  svg {
    vertical-align: middle; 
  }
}

@media (max-width: 900px) {
  margin-top: 2rem;
  padding-bottom: 2rem;
}
`;

const CurrentIssue = () => {
  
  const [executiveData, setExecutiveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/images/"
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
    <Issued>
      <h2>Current Issue</h2>
      <Line width={"130px"} />    
        <IssueBody>
        {executiveData.map((verify) => (
          <IssueDesc key={verify.id}>
            {verify.id == 5 ? (
              <ImageLoad>
                <Image src={verify.image} width="320" height="400" />
              </ImageLoad>
            ) : (
              ""
            )}
          </IssueDesc>
          ))}
          <Description>
            <h2>Journal of</h2>
            <h2>Innovations in Engineering Education</h2>
            <p>Volume 5, Issue-1, March 2022</p>
            <a href="/all-issues">View all issues <FaArrowRight /></a>
          </Description>
        </IssueBody>     
    </Issued>
  );
};

export default CurrentIssue;
