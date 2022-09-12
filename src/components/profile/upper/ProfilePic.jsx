import Avatar from "@mui/material/Avatar";

const ProfilePic = (props) => {
  return (
    <div className="container">
      <div className="profile-pic-container background-creme">
        <Avatar className="profile-pic" alt="Remy Sharp" src={props.src} />
      </div>
    </div>
  );
};

export default ProfilePic;
