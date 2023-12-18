"use client"

import React, { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import FilterNavbar from "@/components/FilterNavbar";

const fetchData = async () => {
  try {
    // Fetch all articles
    const response = await fetch(
      "https://notices.tcioe.edu.np/api/journal/articles/"
    );
    const allArticles = await response.json();
    return allArticles;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const AllIssuesLayout = async ({ children }) => {
  const allArticles = await fetchData();

  return (
    <>
      <Navbar />
      <SubNavbar />
      <FilterNavbar allArticles={allArticles} />
      {children}
      <Footer />
    </>
  )
}

export default AllIssuesLayout;