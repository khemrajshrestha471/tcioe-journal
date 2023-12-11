"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

const Container = styled.div`
display: flex;
justify-content: space-around;
background: #f4f1f1;
margin-bottom: 1rem;

@media (max-width: 960px) {
  height: 7rem;
}
`;


const LeftImage = styled.div`
display: flex;
align-items: center;

@media (max-width: 960px) {
  display: none;
}
`;

const MiddleContent = styled.div`
display: flex;
align-items: center;

@media (max-width: 960px) {
  text-align: center;
}
`;

const RightImage = styled.div`
display: flex;
align-items: center;

@media (max-width: 960px) {
  display: none;
}
`;

const BodyContainer = styled.div``;

const ImageLoad = styled.div``;

const HelperNavbar = () => {
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
    <Container>
            <LeftImage>
        {executiveData.map((verify) => (
          <BodyContainer key={verify.id}>
            {verify.id == 5 ? (
              <ImageLoad>
                <Image src={verify.image} width="110" height="110" />
              </ImageLoad>
            ) : (
              ""
            )}
          </BodyContainer>
        ))}
      </LeftImage>
      <MiddleContent>
        <h2>Innovations in Engineering Education</h2>
      </MiddleContent>
      <RightImage>
        <Image src="https://notices.tcioe.edu.np/media/gallery/393213778_6957140874351362_3016770081925439275_n_RcV0jl0.png?fbclid=IwAR1MruVvgAnNTFP7m_4qAFQT3Ku01UMPrBZOHPYjd7wkE3x-ZU6qxa_85oY" height="100" width="240" />
      </RightImage>
    </Container>
  );
};

export default HelperNavbar;
