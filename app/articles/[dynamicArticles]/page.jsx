"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";

const ContainerIssues = styled.div``;

const page = ({ params }) => {

    const [executiveData, setExecutiveData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://notices.tcioe.edu.np/api/journal/articles/"
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
    <>
<Navbar />
<SubNavbar />
    {executiveData.map((verify) => (
    
    <ContainerIssues key={verify.id}>
        {verify.id === params.dynamicArticles ? (
            <h1>{verify.title}</h1>
        ) : (
            ""
    )}

    </ContainerIssues>
    ))}
    </>
  )
}

export default page