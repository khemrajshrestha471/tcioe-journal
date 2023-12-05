"use client";

import styled from "styled-components";

import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";

const Information = styled.div`
  margin: 3rem 3rem 1rem 3rem;

  h4 {
    padding-left: 3rem;
    margin-top: 1rem;
    margin-right: 3rem;
  }

  p {
    margin: 0.5rem 3rem;
    text-align: justify;
  }

  strong {
    padding-left: 3rem;
  }

  @media (max-width: 800px) {
    margin: 1rem;
  }

  @media (max-width: 800px) {
    margin: 1rem 0rem;
  }

  ul {
    padding-left: 6rem;
  }

  li {
    padding: 0.2rem 0;
    text-align: justify;
    max-width: 88%;
  }

  span {
    font-style: italic;
  }

  blockquote {
    margin-left: -4rem;
  }
`;

const page = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Information>
        <h4>1. Introduction:</h4>
        <p>
          The “Journal of Innovation in Engineering Education (JIEE)” is an
          open-access peer-reviewed journal in various engineering disciplines.
          The journal aims to provide an important platform for scientific
          discussions related to engineering and technology amongst national and
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

        <h4>2. Types of paper:</h4>
        <p>JIEE considers the following types of articles for publication.</p>
        <ul>
          <li>
            <span>Research article:</span> Research articles (5000-8000 words)
            are original, high-quality, research papers presenting significant
            research findings.
          </li>
          <li>
            <span>Review article:</span> Review articles (7000-9000 words)
            should present a state-of-the-art overview of a specific area or
            topic presenting a comprehensive review of the relevant research.
          </li>
          <li>
            <span>Short commentary:</span> A short commentary (1000-3000 words)
            discussing an article previously published in the JIEE.
          </li>
        </ul>
        <p>
          <strong>Note: </strong>
          <span>
            All text, tables, figures, and appendixes are counted for the word
            limits per guideline of each article type, but references,
            acknowledgements, or supplementary materials are not counted.
            Manuscripts exceeding word limits may be rejected before peer
            review.
          </span>
        </p>

        <h4>3. Submission checklist:</h4>
        <p>
          Authors can use the below list to carry out a final check of their
          submission before sending it to the journal for review.
        </p>
        <h4>Ensure that the following items are present:</h4>
        <p>
          One author has been designated as the corresponding author with
          contact details:
        </p>
        <ul>
          <li>E-mail address</li>
          <li>Full postal address</li>
        </ul>
        <p>All necessary files have been uploaded:</p>
        <ul>
          <li>
            Manuscript:
            <ul>
              <blockquote>
              <li>Include keywords,</li>
              <li>All figures (include relevant captions),</li>
              <li>All tables (including titles, description, footnotes),</li>
              <li>
                Ensure all figure and table citations in the text match the
                files provided,
              </li>
              <li>
                Indicate clearly if color should be used for any figures in
                print.
              </li>
              </blockquote>
            </ul>
          </li>
          <li>Graphical Abstracts (where applicable)</li>
          <li>Supplemental files (where applicable)</li>
        </ul>
        <p>Further considerations</p>
        <ul>
          <li>Manuscript has been 'spell checked' and 'grammar checked',</li>
          <li>
            All references mentioned in the Reference List are cited in the
            text, and vice versa,
          </li>
          <li>
            Permission has been obtained for use of copyrighted material from
            other sources (including the Internet),
          </li>
          <li>
            A competing interest’s statement is provided, even if the authors
            have no competing interests to declare,
          </li>
          <li>Journal policies detailed in this guide have been reviewed.</li>
        </ul>

        <h4>4. Declaration of competing interest:</h4>
        <ul>
          <li>
            All authors must disclose any financial and personal relationships
            with other people or organizations that could inappropriately
            influence (bias) their work. Examples of potential conflicts of
            interest include employment, consultancies, stock ownership,
            honoraria, paid expert testimony, patent applications/registrations,
            and grants or other funding. Authors should provide the declaration
            of competing interest statement during the submission.
          </li>
          <li>
            If there are no interests to declare, please mention it during the
            submission.
          </li>
        </ul>

        <h4>5. Submission declaration and verification:</h4>
        <p>
          Submission of an article implies that the work described has not been
          published previously (except in the form of an abstract, a published
          lecture or academic thesis, see 'Multiple, redundant or concurrent
          publication' for more information), that it is not under consideration
          for publication elsewhere, that its publication is approved by all
          authors and tacitly or explicitly by the responsible authorities where
          the work was carried out, and that, if accepted, it will not be
          published elsewhere in the same form, in English or in any other
          language, including electronically without the written consent of the
          copyright-holder.
        </p>

        <h4>6. Use of inclusive language:</h4>
        <p>
          Inclusive language acknowledges diversity, conveys respect to all
          people, is sensitive to differences, and promotes equal opportunities.
          Content should make no assumptions about the beliefs or commitments of
          any reader; contain nothing which might imply that one individual is
          superior to another on the grounds of age, gender, race, ethnicity,
          culture, sexual orientation, disability, or health condition; and use
          inclusive language throughout. Authors should ensure that writing is
          free from bias, stereotypes, slang, reference to dominant culture
          and/or cultural assumptions. We advise to seek gender neutrality by
          using plural nouns ("clinicians, patients/clients") as
          default/wherever possible to avoid using "he, she," or "he/she." We
          recommend avoiding the use of descriptors that refer to personal
          attributes such as age, gender, race, ethnicity, culture, sexual
          orientation, disability, or health condition unless they are relevant
          and valid. These guidelines are meant as a point of reference to help
          identify appropriate language but are by no means exhaustive or
          definitive.
        </p>

        <h4>7. Author contributions:</h4>
        <p>
          For transparency, we encourage authors to submit an author statement
          file outlining their individual contributions to the paper using the
          relevant CRediT roles: Conceptualization; Data curation; Formal
          analysis; Funding acquisition; Investigation; Methodology; Project
          administration; Resources; Software; Supervision; Validation;
          Visualization; Roles/Writing - original draft; Writing - review &
          editing. Authorship statements should be formatted with the names of
          authors first and CRediT role(s) following.
        </p>

        <h4>8. Copyright:</h4>
        <p>
          Upon acceptance of an article, the copyright for the published works
          remains in the JIEE, Thapathali Campus and the authors.
        </p>

        <h4>9. Role of the funding source:</h4>
        <p>
          Authors are requested to identify who provided financial support for
          the conduct of the research and/or preparation of the article and to
          briefly describe the role of the sponsor(s), if any, in study design;
          in the collection, analysis and interpretation of data; in the writing
          of the report; and in the decision to submit the article for
          publication. If the funding source(s) had no such involvement, then
          this should be stated.
        </p>

        <h4>10. Submission and peer review:</h4>
        <ul>
          <li>
            Our online submission system guides you stepwise through the process
            of entering your article details and uploading your files. The
            system converts your article files to a single PDF file used in the
            peer-review process. Editable files (e.g., Word, LaTeX) are required
            to typeset your article for final publication. All correspondence,
            including notification of the Editor's decision and requests for
            revision, is sent by e-mail.
          </li>
          <li>
            Please submit your article via{" "}
            <a href="https://journal.tcioe.edu.np" target="_blank">
              https://journal.tcioe.edu.np
            </a>
            .
          </li>
          <li>
            The Editors first evaluate all submitted manuscripts. Those rejected
            at this stage are insufficiently original, have serious scientific
            flaws, have poor grammar, or English language, or are outside the
            Aims and Scope of the journal. Those that meet the minimum criteria
            are passed on to two subject matter experts for review. Referees
            advise the Editors, who are responsible for the final decision to
            accept or reject the article. Note: The Editor decision is final.
          </li>
          <li>
            Regardless of the file format of the original submission, at
            revision you must provide us with an editable file of the entire
            article. Keep the layout of the text as simple as possible.
          </li>
          <li>
            To avoid unnecessary errors, authors are strongly advised to use the
            'spell-check' and 'grammar-check' functions of your word processor.
          </li>
        </ul>

        <h4>11. Article structure:</h4>
        <ul>
          <li>
            <span>Subdivision - numbered sections:</span> Divide your article
            into clearly defined and numbered sections. Subsections should be
            numbered 1.1 (then 1.1.1, 1.1.2, ...), 1.2, etc. (the abstract is
            not included in section numbering).
          </li>
          <li>
            <span>Appendices:</span> If there is more than one appendix, they
            should be identified as A, B, etc. Formulae and equations in
            appendices should be given separate numbering: Eq. (A.1), Eq. (A.2),
            etc.; in a subsequent appendix, Eq. (B.1) and so on. Similarly, for
            tables and figures: Table A.1; Fig. A.1, etc.
          </li>
          <li>
            <span>Essential title page information:</span>
            <ul>
              <blockquote>
              <li>Title</li>
              <li>Author names and affiliations</li>
              <li>Corresponding author email address</li>
              <li>Abstract (should not exceed 200 words)</li>
              <li>Abbreviations (if any)</li>
              </blockquote>
            </ul>
          </li>
        </ul>

        <h4>12. Formatting requirements:</h4>
        <ul>
          <li>
            <span>Manuscript structure:</span> All manuscripts must contain the
            essential elements needed to convey your manuscript, for example
            Abstract, Keywords, Introduction, Materials and Methods, Results,
            Conclusions, Figures and Tables with Captions. Divide the article
            into clearly defined sections.
          </li>
          <li>
            <span>Figure:</span> Please make sure that all the figures are in an
            acceptable format and with the correct resolution.
          </li>
          <li>
            <span>Tables:</span> Please submit tables as editable text and not
            as images. Number tables consecutively in accordance with their
            appearance in the text and place any table notes below the table
            body. Be sparing in the use of tables and ensure that the data
            presented in them do not duplicate results described elsewhere in
            the article. Please avoid using vertical rules and shading in table
            cells.
          </li>
          <li>
            <span>Captions:</span> Ensure that each illustration (figure and
            table) has a caption. A caption should comprise a brief title (not
            on the figure itself) and a description of the illustration. Keep
            text in the illustrations themselves to a minimum but explain all
            symbols and abbreviations used.
          </li>
          <li>
            <span>Math formulae:</span> Please submit math equations as editable
            text and not as images. Present simple formulae in line with normal
            text where possible and use the solidus (/) instead of a horizontal
            line for small fractional terms, e.g., X/Y. In principle, variables
            are to be presented in italics. Powers of e are often more
            conveniently denoted by exp. Number consecutively any equations that
            have to be displayed separately from the text (if referred to
            explicitly in the text).
          </li>
          <li>
            <span>Footnotes:</span> Footnotes should be used sparingly. Number
            them consecutively throughout the article. Many word processors
            build footnotes into the text, and this feature may be used. Should
            this not be the case, indicate the position of footnotes in the text
            and present the footnotes themselves separately at the end of the
            article.
          </li>
          <li>
            <span>Acknowledgements:</span> Collate acknowledgements in a
            separate section at the end of the article before the references and
            do not, therefore, include them on the title page, as a footnote to
            the title or otherwise. List here those individuals who provided
            help during the research (e.g., providing language help, writing
            assistance, or proofreading the article, etc.).
          </li>
          <li>
            <span>Funding sources:</span> List funding sources in this standard
            way to facilitate compliance to funder's requirements:
            <ul>
              <blockquote>
              <li>
                <span>Funding:</span> This work was supported by the National
                Institutes of Health [grant numbers xxxx, yyyy]; the Bill &
                Melinda Gates Foundation, Seattle, WA [grant number zzzz]; and
                the United States Institutes of Peace [grant number aaaa]. If no
                funding has been provided for the research, please include the
                following sentence: This research did not receive any specific
                grant from funding agencies in the public, commercial, or
                not-for-profit sectors.
              </li>
              </blockquote>
            </ul>
          </li>
          <li>
            <span>Supplementary material:</span> If your article includes any
            Supplementary material, this should be included in your initial
            submission for peer review purposes.
          </li>
          <li>
            <span>References:</span> Please ensure that every reference cited in
            the text is also present in the reference list (and vice versa). Any
            references cited in the abstract must be given in full. Unpublished
            results and personal communications are not recommended in the
            reference list but may be mentioned in the text. If these references
            are included in the reference list, they should follow the standard
            reference style of the journal and should include a substitution of
            the publication date with either 'Unpublished results' or 'Personal
            communication'. Citation of a reference as 'in press' implies that
            the item has been accepted for publication.
          </li>
          <li>
            <span>Reference style:</span>
            <ul>
            <blockquote>
              <li>
                <span>Text:</span> Indicate references by number(s) in square
                brackets in line with the text. The actual authors can be
                referred to, but the reference number(s) must always be given.
              </li>
              <li>
                <span>List:</span> Number the references (numbers in square
                brackets) in the list in the order in which they appear in the
                text.
              </li>
              </blockquote>
            </ul>
          </li>
        </ul>

        <strong><i>Examples:</i></strong>

        <p>Reference to a journal publication:</p>
        <p>[1] Van der Geer J, Hanraads JAJ, Lupton RA. The art of writing a scientific article. J Sci Commun 2010; 163:51–9. <a href="https://doi.org/10.1016/j.Sc.2010.00372" target="_blank">https://doi.org/10.1016/j.Sc.2010.00372</a>.</p>

        <p>Reference to a journal publication with an article number:</p>
        <p>[2] Van der Geer J, Hanraads JAJ, Lupton RA. The art of writing a scientific article. Heliyon. 2018;19: e00205. <a href="https://doi.org/10.1016/j.heliyon.2018.e00205">doi.org</a>.</p>

        <p>Reference to a book:</p>
        <p>[3] Strunk Jr W, White EB. The elements of style. 4th ed. New York: Longman; 2000.</p>

        <p>Reference to a chapter in an edited book:</p>
        <p>[4] Mettam GR, Adams LB. How to prepare an electronic version of your article. In: Jones BS, Smith RZ, editors. Introduction to the electronic age, New York: E-Publishing Inc; 2009, p. 281–304.</p>

        <p>Reference to a website:</p>
        <p>[5] Cancer Research UK. Cancer statistics reports for the UK, <a href="http://www.cancerresearchuk.org/aboutcancer/statistics/cancerstatsreport/" target="_blank">cancer-researchuk</a>; 2003 [accessed 13 March 2003].</p>

        <strong><span>Note:</span></strong>
        <p><i>This journal follows the referencing style adopted by the ENERGY journal. Users of Mendeley Desktop can easily install the reference style for this journal by clicking the following link: <a href="http://open.mendeley.com/use-citation-style/energy">http://open.mendeley.com/use-citation-style/energy</a>.</i></p>
        <p><i>When preparing your manuscript, you will then be able to select this style using the Mendeley plug-ins for Microsoft Word or LibreOffice.</i></p>
      </Information>
      <Footer />
    </>
  );
};

export default page;
