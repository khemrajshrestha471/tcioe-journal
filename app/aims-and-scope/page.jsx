"use client";

import styled from "styled-components";

import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";

const Information = styled.div`
  margin: 3rem 3rem 1rem 3rem;
  h3 {
    padding-left: 3rem;
  }

  h4 {
    padding-left: 3rem;
    margin-top: 1rem;
  }

  p {
    margin: 1rem 3rem;
    text-align: justify;
  }

  // @media (max-width: 800px) {
  //   margin: 1rem;
  // }

  @media (max-width: 800px) {
    margin: 1rem 0rem;
  }
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 3rem;
`;

const NextLink = styled.div`
h3 {
  text-align: center;
  margin-bottom: 2rem;
}
`;

const page = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Information>
        <h3>Aims and Scope</h3>
        <Line width={"100px"} />
        <p>
          The Journal of Innovation in Engineering Education is an open-access
          peer-reviewed journal in various engineering disciplines. The journal
          aims to provide an important platform for scientific discussions
          related to engineering and technology amongst national and
          international researchers. It seeks to publish original research
          papers of scientific quality to provide archival resources for
          researchers from all engineering backgrounds. The journal considers
          articles in the form of research articles, review articles, and short
          commentary. It is published annually by the Institute of Engineering,
          Thapathali Campus. The journal welcomes research articles from all
          engineering fields such as Engineering & Technology, Aerospace
          Engineering, Automotive Engineering, Biomedical Engineering, Chemical
          Engineering, Civil Engineering, Electrical Engineering, Electronics &
          Embedded Technology, Energy & Power Engineering, Environmental
          Engineering, Technology, Industrial & Systems Engineering, Materials
          Science & Engineering, Mechanical Engineering, Mechatronics, Robotics,
          Transportation Engineering and more.
        </p>

        <h4>Publication Frequency:</h4>
        <p>The journal publishes one volume annually.</p>

        <h4>Peer-Review Process:</h4>
        <p>
          This journal operates a single blind review process. All contributions
          will be initially assessed by the editor for suitability for the
          journal. Papers deemed suitable are then typically sent to a minimum
          of two independent expert reviewers to assess the quality of the
          paper. The first review usually takes one month. The Editor is
          responsible for the final decision regarding the acceptance or
          rejection of articles. The Editor's decision is final. Editors are not
          involved in decisions about papers that they have written themselves.
          Any such submission is subject to all of the journal's usual
          procedures, with peer review handled independently of the relevant
          editor and their research groups.
        </p>

        <h4>Open Access Policy:</h4>
        <p>This journal provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge.</p>

        <h4>Sources of Support:</h4>
        <p>Institutional funds of Thapathali Campus.</p>

        <h4>Publisher:</h4>
        <p>Institute of Engineering, Thapathali Campus, Tribhuvan University, Kathmandu, Nepal.</p>
      </Information>
      <NextLink>
        <h3>The journal is also available at Nepal Journals Online. <a href="https://www.nepjol.info/index.php/jiee/index" target="_blank">Click Here</a> to view individual articles</h3>
      </NextLink>
      <Footer />
    </>
  );
};

export default page;
