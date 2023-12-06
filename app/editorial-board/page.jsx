"use client";

import styled from "styled-components";
import img from "@/assets/khemsir.jpg";
import Image from "next/legacy/image";

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
  margin: 0 auto;
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
  blockquote {
    margin-left: 2rem;
    font-weight: bold;
    font-size: 18px;
    padding: 0.3rem 0;
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

    p {
      text-align: center;
      padding: 2px 0;
    }
  }
`;

import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Information>
        <h3>Editorial Board</h3>
        <Line width={"100px"} />
        <h4>Editor-in-chief</h4>
        <WholeLine />
        <Details>
          <Photo>
            <CircularImage src={img} alt="Executive Photo" />
          </Photo>
          <Desc>
            <blockquote>Khem Gyawali, PhD</blockquote>
            <p>Assistant Professor</p>
            <p>Department of Automobile and Mechanical Engineering</p>
            <p>Thapathali Campus , Tribhuvan University, Nepal</p>
            <p>
              <a href="mailto:gyanwalikhem@ioe.edu.np">
                gyanwalikhem@ioe.edu.np
              </a>
            </p>
          </Desc>
        </Details>
        <h4>Editors</h4>
        <WholeLine />

        <Details>
          <Photo>
            <CircularImage src={img} alt="Executive Photo" />
          </Photo>
          <Desc>
            <blockquote>Khem Gyawali, PhD</blockquote>
            <p>Assistant Professor</p>
            <p>Department of Automobile and Mechanical Engineering</p>
            <p>Thapathali Campus , Tribhuvan University, Nepal</p>
            <p>
              <a href="mailto:gyanwalikhem@ioe.edu.np">
                gyanwalikhem@ioe.edu.np
              </a>
            </p>
          </Desc>
        </Details>

        <Details>
          <Photo>
            <CircularImage src={img} alt="Executive Photo" />
          </Photo>
          <Desc>
            <blockquote>Khem Gyawali, PhD</blockquote>
            <p>Assistant Professor</p>
            <p>Department of Automobile and Mechanical Engineering</p>
            <p>Thapathali Campus , Tribhuvan University, Nepal</p>
            <p>
              <a href="mailto:gyanwalikhem@ioe.edu.np">
                gyanwalikhem@ioe.edu.np
              </a>
            </p>
          </Desc>
        </Details>

        <Details>
          <Photo>
            <CircularImage src={img} alt="Executive Photo" />
          </Photo>
          <Desc>
            <blockquote>Khem Gyawali, PhD</blockquote>
            <p>Assistant Professor</p>
            <p>Department of Automobile and Mechanical Engineering</p>
            <p>Thapathali Campus , Tribhuvan University, Nepal</p>
            <p>
              <a href="mailto:gyanwalikhem@ioe.edu.np">
                gyanwalikhem@ioe.edu.np
              </a>
            </p>
          </Desc>
        </Details>

        <h4>Patron</h4>
        <WholeLine />
        <Details>
          <Photo>
            <CircularImage src={img} alt="Executive Photo" />
          </Photo>
          <Desc>
            <blockquote>Khem Gyawali, PhD</blockquote>
            <p>Assistant Professor</p>
            <p>Department of Automobile and Mechanical Engineering</p>
            <p>Thapathali Campus , Tribhuvan University, Nepal</p>
            <p>
              <a href="mailto:gyanwalikhem@ioe.edu.np">
                gyanwalikhem@ioe.edu.np
              </a>
            </p>
          </Desc>
        </Details>
      </Information>
      <Footer />
    </>
  );
};

export default page;
