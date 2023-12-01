"use client"

import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const ContainerFooter = styled.div`
height: 10rem;
background: #f4f1f1;
display: flex;
justify-content: space-between;
padding: 2rem 5rem;
text-align: center;

@media (max-width: 820px) {
    display: block;
  }

  @media (max-width: 565px) {
    padding: 1rem;
    height: 12rem;
  }
`;

const LeftPortion = styled.div`
padding: 1rem 0;

h3 {
    padding-bottom: 0.1rem;
}

p {
    padding-bottom: 0.2rem;
}

@media (max-width: 820px) {
    padding: 0.1rem 0;
  }

  @media (max-width: 565px) {
    padding: 0 -6rem;

    p {
        padding-top: 0.1rem;
    }
  }
`;

const RightPortion = styled.div`
p {
    font-weight: bold;
    margin-top: 1rem;
}

@media (max-width: 820px) {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
        <LeftPortion>
        <h3>Journal of Innovations in Engineering Education</h3>
        <p>journal@tcioe.edu.np</p>
        <p><FaRegCopyright /> All Rights Reserved By IOE, Thapathali Campus, Kathmandu</p>
        </LeftPortion>
        <RightPortion>
            <p>ISSN 2594-343X</p>
        </RightPortion>
    </ContainerFooter>
  )
}

export default Footer