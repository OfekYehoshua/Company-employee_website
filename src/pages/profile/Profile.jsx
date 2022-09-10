import "./profile.css";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import Banner from "../../components/profile/upper/Banner";
import ProfilePic from "../../components/profile/upper/ProfilePic";
import WorkerDetails from "../../components/profile/middle/WorkerDetail";
import Feedbacks from "../../components/profile/middle/Feedbacks";
import NameAndEdit from "../../components/profile/upper/EditAndName";
import Socials from "../../components/profile/upper/Socials";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WorkIcon from '@mui/icons-material/Work';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';



import { Grid, Box } from "@mui/material";
import { selectProfile, selectSocials } from "../../ProfileSlice";
import { useSelector } from "react-redux";
import { useState } from "react";


const Profile = () => {
  const values = useSelector(selectProfile)
  const socials = useSelector(selectSocials)
  
  let linkedinCopy = socials.linkedIn && socials.linkedIn.slice(28).replace(/[0-9]/g, '')

  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <Banner src={"https://thumbs.dreamstime.com/b/green-nature-banner-spring-sommer-content-183216944.jpg"}/>
        <ProfilePic src={values.photo} />
        <NameAndEdit profileName={values.firstName + " " + values.lastName}/>
        <p className="profile-details">Advisor and consultant at DosimPro</p>
        <div className="socials-container">
            <Socials detail={socials.address} icon={<LocationOnIcon className="details-icon"/>} className="location"/>
            <Socials detail={socials.facebook && socials.facebook.slice(25)} icon={<FacebookIcon className="details-icon"/>} href={socials.linkedIn}/>
            <Socials detail={linkedinCopy && linkedinCopy.slice(0, -2)} icon={<LinkedInIcon className="details-icon"/>} href={socials.facebook}/>
            <Socials detail={socials.twitter && socials.twitter.slice(20)} icon={<TwitterIcon className="details-icon"/>} href={socials.twitter}/>
            <Socials detail={socials.instegram && socials.instegram.slice(26)} icon={<InstagramIcon className="details-icon"/>} href={socials.instegram}/>
        </div>
      </div>
      <div className="body-profile">
      <Grid container className="">
        <Grid className="">
            <WorkerDetails detail={values.phone} icon={<PhoneIcon className="details-icon"/>}/>
            <WorkerDetails detail={values.email} icon={<EmailIcon className="details-icon"/>}/>
            <WorkerDetails detail={values.date} icon={<CakeIcon className="details-icon"/>}/>
            <WorkerDetails detail={values.rule} icon={<WorkIcon className="details-icon"/>}/>
        </Grid>
        <Grid className="">
            <Feedbacks></Feedbacks>
        </Grid>
        <Grid className="">

        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Profile;
