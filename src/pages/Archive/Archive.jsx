import ResponsiveAppBar from "../../components/navbar/Navbar"
import React, {useState} from "react";
import './Archive.css';

import data from './TemplteData.json'
 

function ArchiveMain() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <ResponsiveAppBar/>
    <h1 className="ArchiveTitle">company archive:</h1>
    <h2 className="ArchiveTitle2">looking for comany data?</h2>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search in archive..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="cardsdiv">
                  <div className="template" key={val.id}>
                    <div className="imgdiv">
                      <img src={val.image} alt="" className="image"/>
                      </div>
                      <h3>{val.title}</h3>
                      <p className="desctiption">{val.description}</p>
                      <div className="popup">
                        <button className="filebtn">open files</button>
                        </div>
                  </div> 
                  </div>
                )
              })
          }
      </div>
      </div>
      <div className="archivefotter">
           <p>
           <h1 style={{lineHeight: 1.25, fontSize: "65px", paddingTop:"10vh",}} className="footertop">soccess is not final. failur is not fatal.
           <br/>it is the courage to countinue that counts.</h1>
           <h3 className="footerbuttom">winston churchill</h3>
           </p>
      </div>
    </>
  )
}

export default ArchiveMain;