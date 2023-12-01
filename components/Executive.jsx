"use client"

import styled from "styled-components";
import img from "@/assets/khemsir.jpg";
import Image from "next/legacy/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContainerExecutive = styled.div`
background: #4B50B8;
height: 18rem;
color: white;
padding: 0 2rem;

h3 {
    padding: 1.5rem 5rem;
    white-space: nowrap;
}

span {
    float: right;
    margin-right: 5rem;
}

span:hover {
    cursor: pointer;
}

@media (max-width: 1000px) {
    display: grid;

    span {
        padding-bottom: 2rem;
        text-align: right;
    }
  }

  @media (max-width: 500px) {
    height: 25rem;

    h3 {
        padding: 1.5rem 2rem;
        text-align: center;
    }

    span {
        text-align: right;
        padding-bottom: 0rem;
    }
  }
`;

const Information = styled.div`
padding: 0.5rem 5rem;
display: flex;
  align-items: center;

  @media (max-width: 500px) {
    display: block;
    margin-top: -3rem;
  }
`;

const Photo = styled.div`
width: 10rem;
  height: 10rem; /* Ensure a square container for a circular image */
  overflow: hidden;
  border-radius: 50%;
  margin-right: 1rem; /* Adjust spacing as needed */
`;

const CircularImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Desc = styled.div`

h4 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    white-space: nowrap;
}
p {
    font-style: italic;
    white-space: nowrap;
}

@media (max-width: 500px) {
    h4 {
        padding-top: 1rem;
    }
  }
`;

const Executive = () => {
  return (
    <ContainerExecutive>
        <h3>Managing Executive Editor</h3>
        <Information>
        <Photo>
        <CircularImage src={img} alt="Executive Photo" />
        </Photo>
        <Desc>
            <h4>Dr. Khem Gyawali</h4>
            <p>Campus Chief</p>
            <p>IOE, Thapathali Campus</p>
        </Desc>
        </Information>
        <span>View full editorial board <MdOutlineArrowOutward /></span>
    </ContainerExecutive>
  )
}

export default Executive