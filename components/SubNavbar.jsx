"use client"

import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";

const ContainerFull = styled.div`
border-bottom-color: black;
display: flex;
`;

const ContainerLess = styled.div`
display: none;

@media (max-width: 1000px) {
  display: block;
  
}
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  min-width: 160px;
  border-radius: 4px;
  padding: 0.5rem;
  color: black;
`;

const DropdownOption = styled.div`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    color: green;
  }
`;

const Buttons = styled(DropdownContainer)`
width: 100%;
white-space: nowrap;
padding: 1rem 5.1rem;
display: flex;
transition: 0.5s ease-in-out;
border-right: 1px solid gray;

&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    ${DropdownContent} {
      display: block;
      margin-top: 2rem;
      margin-left: -2rem;
    }
}

@media (max-width: 1500px) {
  padding: 1rem 4rem;
}

@media (max-width: 1320px) {
  padding: 1rem 2rem;
}

@media (max-width: 1000px) {
  display: none;
}
`;

const ButtonShow = styled(DropdownContainer)`
display: flex;
align-items: center;
padding: 1rem 5.29rem;
transition: 0.5s ease-in-out;

&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    ${DropdownContent} {
      display: block;
    }
}

@media (max-width: 1000px) {
  display: block;
  text-align: center;
}
`;

const Icons = styled.div`
margin-top: 1px;
margin-left: 2px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ShowMenu = styled.div`
font-size: 1.5rem;
color: white;
padding: 0 1rem;
font-weight: bold;

@media (max-width: 1000px) {
  position: fixed;
  top: 2rem;
  right: 0;
}
`;

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

const SubNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const ToggleText = () => {
    setShowMore(!showMore);
  }
  return ( 
    <>
    {showMenu ? (
          <ShowMenu onClick={ToggleMenu}>
          <ImCross />
        </ShowMenu>
    ) : <ShowMenu onClick={ToggleMenu}>
    <FiMenu />
  </ShowMenu>}
    <ContainerFull>
        <Buttons>
          About <Icons><IoIosArrowDown /></Icons>
        <DropdownContent>
        <CustomLink href="https://tcioe.edu.np/">
          <DropdownOption>Aims and Scope</DropdownOption>
          </CustomLink>
          <hr />
          <CustomLink href="https://tcioe.edu.np/">
          <DropdownOption>Editorial Board</DropdownOption>
          </CustomLink>
        </DropdownContent>
        </Buttons>
        <Buttons>Guide for authors</Buttons>
        <Buttons>Guide for reviewers</Buttons>
        <Buttons>Nepal Journals Online <Icons><MdOutlineArrowOutward /></Icons></Buttons>
        <CustomLink href="https://tcioe.edu.np/">
        <Buttons>Submit your article <Icons><MdOutlineArrowOutward /></Icons></Buttons>
        </CustomLink>
    </ContainerFull>

{showMenu ? (
          <ContainerLess>
          <ButtonShow>
            About <IoIosArrowDown />
            <DropdownContent>
            <CustomLink href="https://tcioe.edu.np/">
          <DropdownOption>Aims and Scope</DropdownOption>
          </CustomLink>
          <hr />
          <CustomLink href="https://tcioe.edu.np/">
          <DropdownOption>Editorial Board</DropdownOption>
          </CustomLink>
        </DropdownContent>
            </ButtonShow>
          <ButtonShow>Guide for authors</ButtonShow>
          <ButtonShow>Guide for reviewers</ButtonShow>
          <ButtonShow>Nepal Journals Online <MdOutlineArrowOutward /></ButtonShow>
          <CustomLink href="https://tcioe.edu.np/">
          <ButtonShow>Submit your article <MdOutlineArrowOutward /></ButtonShow>
          </CustomLink>
      </ContainerLess>
    ) : ""}
    <hr />
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
    </>
  )
}

export default SubNavbar