import ResponsiveAppBar from "../../components/navbar/Navbar";
import MultiActionAreaCard from "../../components/home/Publication";
import Blog from "../../components/home/Blog";
import ActionBarComponentProps from "../../components/caledarPayment/Calendar";
import Aboutcard from "../../components/home/Aboutcard";
import FolderList from "../../components/home/FolderList";
import Collabs from "../../components/footer/collabs";
import Footer from "../../components/footer/Footer";
import "./home.css";
import { Typography } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  let windoWidth = window.innerWidth;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="home">
      <ResponsiveAppBar />
      <div id="head">
        <p id="quote">
          "Coming together is a beginning. Keeping together is progress.
        </p>
        <p id="punchline">
          Working together is success." <span id="name">-Henry Ford</span>
        </p>
      </div>
      <div className="img-card-container">
        <Typography>
          <h1 id="welcome" data-aos="zoom-in-up">
            Welcom to our employee web!
          </h1>
        </Typography>
        <div className="img-card">
          <div className="graph-container">
            <img
              id="graph"
              alt="Infographic"
              data-id="1215165"
              data-animated-url="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif"
              skip_resize="true"
              srcset="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 320w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 400w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 450w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 640w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 700w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 800w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 768w"
              sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
              src="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif"
              width="732"
              height="558"
            />
          </div>
          <Aboutcard className="card" data-aos="zoom-in" ></Aboutcard>
        </div>
      </div>
      <Typography>
        <h1 className="pulications-title">
          Keeping you updated - All the latest news!
        </h1>
      </Typography>
      <MultiActionAreaCard />
      <Typography>
        <h1 className="events-title">Company's events</h1>
      </Typography>
      <div className="calendar-and-blog">
        <div data-aos="zoom-in-right" className="calendar">
          <ActionBarComponentProps />
        </div>
        <div data-aos="zoom-in" className="events-list">
          <FolderList />
        </div>
        <div data-aos="zoom-in-left">
          <Blog />
        </div>
      </div>
      <div id="box-archive">
        <h1 id="explain-archive">TO ARCHIVE</h1>
        <div className="archive-img">
          <Link to="/archive">
            <ArchiveIcon id="archive" />
          </Link>
        </div>
      </div>
      {windoWidth > 876 ? <Collabs /> : null}
      <Footer />
    </div>
  );
};

export default Home;
