"use client";

import styled from "styled-components";
import logo from "@/assets/logo.svg";
import Image from "next/legacy/image";
import Link from "next/link";

const Container = styled.div`
  background: #444aca;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  margin-bottom: -2rem;

  @media (max-width: 1000px) {
      display: grid;
      margin-bottom: 0rem;
    }
`;

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
    padding: 1rem;
`;

const Logo = styled.div`
  width: 70px;
  height: 85px;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiniSubtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #f7f4f4;
`;

const Subtitle = styled("h2")`
  font-size: 16px;
  font-weight: 400;
  color: #f7f4f4;
`;

const Title = styled("h1")`
  font-size: 16px;
  font-weight: 700;
  color: #f7f4f4;

  @media (max-width: 760px) {
    font-weight: 500;
  }
`;

const TitleHeader = styled.div`
  text-align: center;
  padding-top: 2.2rem;
  color: #f7f4f4;

  span {
    border: 2px solid transparent;
    padding: 0.3rem 0.3rem;
    background: #f97a00;
    border-radius: 0.2rem;
    font-weight: bold;
  }

  h3 {
    padding-top: 0.5rem;
  }

  @media (max-width: 1000px) {
    margin-top: -2rem;
    margin-bottom: 1rem;
  }
`;

const UNumber = styled.div`
  padding: 3rem 0;
  font-weight: bold;
  color: #f7f4f4;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Container>
      <CustomLink href="https://tcioe.edu.np/">
        <Flexbox>
          <Logo>
            <Image src={logo} layout="fill" objectFit="contain" alt="" />
          </Logo>
          <TextContainer>
            <MiniSubtitle>Tribhuvan University</MiniSubtitle>
            <Subtitle>Institute of Engineering</Subtitle>
            <Title>Thapathali Campus</Title>
          </TextContainer>
        </Flexbox>
      </CustomLink>
      <TitleHeader>
        <span>Journal of</span>
        <h3>Innovations in Engineering Education</h3>
      </TitleHeader>
      <UNumber>
        <p>ISSN 2594-343X</p>
      </UNumber>
    </Container>
  );
};

export default Navbar;
