import "./profilePic.css"

const Banner = ({src}) => {
    return(
        <img className="banner" src={src} alt="profile" />
    )
}

export default Banner