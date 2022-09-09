
import ResponsiveAppBar from "../../components/navbar/Navbar"
import MultiActionAreaCard from "../../components/home/Publication"
import Blog from "../../components/home/Blog"
import ActionBarComponentProps from "../../components/caledarPayment/calander"
import Aboutcard from "../../components/home/Aboutcard"
import FolderList from "../../components/home/FolderList"


import "./home.css"

import { Typography } from "@mui/material"
import ArchiveIcon from '@mui/icons-material/Archive';

const Home = () => {
    return(
        <div className="home">
            <ResponsiveAppBar/>
            <div id="head">
                <p id="quote">"Coming together is a beginning. Keeping together is progress.</p>
                <p id="punchline"> Working together is success."</p>
                <p id="name">-Henry Ford</p>
            </div>
            <Typography><h1 id="h1">Welcom to our employee web!</h1></Typography> 
            <div className="imgAndCard">
                <img id="graph" alt="Infographic" data-id="1215165" data-animated-url="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif" skip_resize="true" srcset="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 320w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 400w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 450w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 640w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 700w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 800w, https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif 768w" sizes="(max-width: 919px) 100vw, max(768px, 98vh)" src="https://cdn.dribbble.com/users/14356/screenshots/1215165/media/1f109d7b20b3c2228a6e9f24b044d8e7.gif" width="732" height="558"/>            
                <Aboutcard className="card"></Aboutcard>
            </div>
            <MultiActionAreaCard/>
            <div className="calendarAndBlog">
                <ActionBarComponentProps className="calendar"></ActionBarComponentProps>
                <FolderList></FolderList>
                <Blog></Blog>
            </div>
            <div id="boxArchive">
                <p id="explainArchive">TO ARCHIVE</p>
                <ArchiveIcon id="archive"></ArchiveIcon>
            </div>
            
        </div>
    )
}

export default Home