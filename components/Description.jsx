"use client";

import { useState } from "react";
import styled from "styled-components";

const ContainerBody = styled.div`
padding: 1.3rem;
margin-left: auto;
margin-right: auto;
max-width: 90rem;

@media (max-width: 500px) {
  padding: 0.5rem;
}
`;

const AboutJournal = styled.div`
  margin-bottom: 1.3rem;
  padding: 1.5rem 2.5rem;
  background: #f4f1f1;
  h3 {
    font-size: 1.5em;
    padding-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    text-align: justify;
    color: gray;
  }

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const VisibleButton = styled.div`
button {
  color: #20068E;
  border: none;
  font-size: 0.9rem;
}

button:hover {
  cursor: pointer;
}

@media (max-width: 500px) {
  padding-top: 0.5rem;
}
`;

const AllEngineering = styled.div`
h3 {
  text-align: justify;
  padding: 0 2rem;
}

@media (max-width: 550px) {
  h3 {
    padding: 0 0.7rem;
  }
`;

const List = styled.div`
display: flex;
justify-content: space-around;
padding: 1rem 0;
color: gray;
white-space: nowrap;
li {
  padding: 0.3rem;
}

@media (max-width: 800px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: justify;
  padding: 0 3rem;
}

@media (max-width: 550px) {
  grid-template-columns: 1fr;
  text-align: justify;
  padding: 0 2rem;
}
`;

const List1 = styled.div`
@media (max-width: 800px) {
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-right: 3rem;
}

@media (max-width: 400px) {
  padding: 0 3rem;
}
`;

const List2 = styled.div`
@media (max-width: 800px) {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 550px) {
  margin-top: 0;
  margin-bottom: 2rem;
}

@media (max-width: 400px) {
  padding: 0 3rem;
}
`;

const List3 = styled.div`
@media (max-width: 400px) {
  padding: 0 3rem 2rem 3rem;
}
`;

const Description = () => {
    const [showMore, setShowMore] = useState(false);
    const ToggleText = () => {
        setShowMore(!showMore);
      }
  return (
    <ContainerBody>
    <AboutJournal>
      <h3>About the Journal</h3>
      <p>
        The Journal of Innovations in Engineering Education is an open-access
        peer-reviewed journal in various engineering disciplines. The journal
        aims to provide an important platform for scientific discussions
        related to engineering and technology amongst national and
        international researchers. It seeks to publish original research
        papers of scientific quality to provide archival resources for
        researchers from all engineering backgrounds. The journal considers
        articles in the form of research articles, review articles, and short
        commentary. It is published annually by the Institute of Engineering,
        Thapathali Campus. 
        {showMore ? (
            <>
            The journal welcomes research articles from all
            engineering fields such as Engineering & Technology, Aerospace
            Engineering, Automotive Engineering, Biomedical Engineering, Chemical
            Engineering, Civil Engineering, Computer Engineering, Electrical
            Engineering, Electronics & Embedded Technology, Energy & Power
            Engineering, Environmental Engineering, Technology, Industrial &
            Systems Engineering, Materials Science & Engineering, Mechanical
            Engineering, Mechatronics, Robotics, Transportation Engineering and
            more.</>
        ) : ("")}      
      </p>
      {showMore ? (
        <VisibleButton onClick={ToggleText}><button>Read Less...</button></VisibleButton>
      ) : (
        <VisibleButton onClick={ToggleText}><button>Read More...</button></VisibleButton>
      )}
    </AboutJournal>
    <AllEngineering>
      <h3>The journal welcomes research articles from all engineering fields such as:</h3>
      <List>
      <List1>
        <ul>
          <li>Engineering & Technology</li>
          <li>Electronics & Embedded Technology</li>
          <li>Energy & Power Engineering</li>
          <li>Environment Engineering</li>
          <li>Materials Science & Engineering</li>
          <li>Industrial & Systems Engineering</li>
          <li>Transportation Engineering and more.</li>
        </ul>
      </List1>
      <List2>
        <ul>
          <li>Aerospace Engineering</li>
          <li>Automotive Engineering</li>
          <li>Biomedical Engineering</li>
          <li>Electrical Engineering</li>
          <li>Energy & Power Engineering</li>
          <li>Mechatronics</li>
        </ul>
      </List2>
      <List3>
        <ul>
          <li>Automotive Engineering</li>
          <li>Chemical Engineering</li>
          <li>Civil Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Environmental Engineering</li>
          <li>Robotics</li>
        </ul>
      </List3>
      </List>
    </AllEngineering>
    </ContainerBody>
  )
}

export default Description