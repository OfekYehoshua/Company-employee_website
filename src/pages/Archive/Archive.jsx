import ResponsiveAppBar from "../../components/navbar/Navbar";
import React, { useState } from "react";
import "./Archive.css";
import data from "./TemplteData.json";
import { useEffect } from "react";
import { useLocation } from "react-router";

function ArchiveMain() {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ResponsiveAppBar]);
  return (
    <>
      <ResponsiveAppBar />
      <h1 className="Archive-title">The company archive</h1>
      <h2 className="Archive-title2">looking for company data?</h2>
      <div className="template-container">
        <div className="search-input_Container">
          <input
            id="search-input"
            type="text"
            placeholder="Search in archive..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
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
                  <div className="cards-div">
                    <div className="template" key={val.id}>
                      <div className="img-div">
                        <img className="image" src={val.image} alt="" />
                        </div>
                        <h3>{val.title}</h3>
                        <p className="desctiption">{val.description}</p>
                        <div>
                          <button className="file-btn">open files</button>
                        </div>
                    </div> 
                  </div>
              );
            })}
        </div>
      </div>
      <div className="archive-fotter">
        <p>
          <h1
            style={{ lineHeight: 1.25, fontSize: "65px", paddingTop: "10vh" }}
            className="footer-top"
          >
            soccess is not final. failur is not fatal.
            <br />
            it is the courage to countinue that counts.
          </h1>
          <h3 className="footer-buttom">winston churchill</h3>
        </p>
      </div>
    </>
  );
}

export default ArchiveMain;
