"use client";

import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
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
padding: 1rem 7rem;
display: flex;
transition: 0.5s ease-in-out;
border-right: 1px solid gray;
justify-content: center;


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
z-index: 2;

@media (max-width: 1000px) {
  position: fixed;
  top: 2rem;
  right: 0;
}
`;

const SubNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
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
        <CustomLink href="/aims-and-scope">
          <DropdownOption>Aims and Scope</DropdownOption>
          </CustomLink>
          <hr />
          <CustomLink href="/editorial-board">
          <DropdownOption>Editorial Board</DropdownOption>
          </CustomLink>
        </DropdownContent>
        </Buttons>
        
        <CustomLink href="/guide-for-authors">
        <Buttons>Guide for authors<Icons><IoIosArrowRoundForward /></Icons></Buttons>
        </CustomLink>
        
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
            <CustomLink href="/aims-and-scope">
          <DropdownOption>Aims and Scope</DropdownOption>
          </CustomLink>
          <hr />
          <CustomLink href="/editorial-board">
          <DropdownOption>Editorial Board</DropdownOption>
          </CustomLink>
        </DropdownContent>
            </ButtonShow>
            <CustomLink href="/guide-for-authors">
        <ButtonShow>Guide for authors</ButtonShow>
        </CustomLink>

          <ButtonShow>Nepal Journals Online <MdOutlineArrowOutward /></ButtonShow>
          <CustomLink href="https://tcioe.edu.np/">
          <ButtonShow>Submit your article <MdOutlineArrowOutward /></ButtonShow>
          </CustomLink>
      </ContainerLess>
    ) : ""}
    <hr />
    </>
  )
}

export default SubNavbar