import styled from "styled-components";

export const ArticleBody = styled.div`
  padding: 1.3rem;
`;

export const ArticlePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1115px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    padding: 2rem auto;
  }
`;

export const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

export const ArticleLists = styled.div``;

export const IndividualCard = styled.div`
  padding: 1rem;
  text-align: justify;
  /* Other styles for IndividualCard */

  p {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;

    a {
      color: black;
    }
  }

  span {
    font-size: 0.9rem;
    color: #565555;
  }

  blockquote {
    font-size: 14px;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
  }

  @media (max-width: 770px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

export const PDFLink = styled.a`
  margin-top: 0.5rem;
  text-decoration: none;
`;
