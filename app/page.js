import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Description from "@/components/Description";
import Executive from "@/components/Executive";
import CurrentIssue from "@/components/CurrentIssue";
import Articles from "./articles/page";
import Footer from "@/components/Footer";

export default function Home({ params }) {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Description />
      <Executive />
      <CurrentIssue />
      <Articles />
      <Footer />
    </>
  )
}
