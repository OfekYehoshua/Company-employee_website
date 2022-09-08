import Avatar from "@mui/material/Avatar";
import "./profilePic.css"

const ProfilePic = () => {
    return(
        <div className="container">
            <div className="profile-pic-container">
                <Avatar className="profile-pic" alt="Remy Sharp" src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"/>
            </div>
        </div>
    )
}

export default ProfilePic