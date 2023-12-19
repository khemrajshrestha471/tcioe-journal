"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";


const ContainerFull = styled.div`
border-bottom-color: black;
display: flex;
//margin-top: 1rem;
width: 100 hw;  
height: 4rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
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
  width: 20rem;
  border-radius: 4px;
  padding: 0.5rem;
  color: black;
  transition: 0.5s ease-in-out;
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
justify-content: center;


&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    ${DropdownContent} {
      display: flex;
      flex-direction: column;
      top: 4rem;
      left: 0rem;
    }
}

@media (max-width: 1500px) {
  padding: 1rem 6rem;
}

@media (max-width: 1320px) {
  padding: 1rem 5rem;
}

@media (max-width: 1170px) {
  padding: 1rem 3rem;
}

@media (max-width: 1024px) {
  padding: 1rem 2px;
`;


const Icons = styled.div`
margin-top: 1px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const VolumeLink = styled.div`
  color: black;
  display: flex;
  width: 100%;
`;

const FilterNavbar = ({ allArticles }) => {
  const [volumes, setVolumes] = useState([]);
  const [issues, setIssues] = useState({});
  const [showMenu, setShowMenu] = useState([]);

  const toggleShowMenu = (index) => {
    const newShowMenu = [...showMenu];
    newShowMenu[index] = !newShowMenu[index];
    setShowMenu(newShowMenu);
  }

  useEffect(() => {
    if (Array.isArray(allArticles)) {
      const volumesSet = new Set();
      const issuesMap = {};

      allArticles.forEach((article) => {
        volumesSet.add(article.volume);

        if (!issuesMap[article.volume]) {
          issuesMap[article.volume] = new Set();
        }
        issuesMap[article.volume].add(article.number);
      });

      setVolumes(Array.from(volumesSet));
      setIssues(issuesMap);

      // sort the volumes in descending order
      setVolumes(Array.from(volumesSet).sort((a, b) => b - a));

      // sort the issues in ascending order
      Object.keys(issuesMap).forEach((volume) => {
        issuesMap[volume] = Array.from(issuesMap[volume]).sort((a, b) => a - b);
      });

      // initialize the showMenu state to false for each volume
      setShowMenu(Array.from(volumesSet).map(() => false));
    }
  }, [allArticles]);

  return ( 
    <>
      <ContainerFull>
        {volumes.map((volume) => (
          <VolumeLink key={volume}>
            <Buttons>
              Volume {volume}
              <DropdownContent>
                {issues[volume].map((issue) => (
                  <CustomLink key={issue} href={`/all-issues/${volume}/${issue}`}>
                    <DropdownOption>
                      Issue {issue}
                    </DropdownOption>
                  </CustomLink>
                ))}
              </DropdownContent>
            </Buttons>
          </VolumeLink>
        ))}
      </ContainerFull>
    </>
  );
};

export default FilterNavbar;