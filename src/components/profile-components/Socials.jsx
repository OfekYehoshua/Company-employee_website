
const Socials = (props) =>{

    return(
        <a className="socials" href={props.href} target="_blank">
              {/* <LocationOnIcon className="social-icon" />  */}
              {props.icon}
              <p className="social-detail">{props.detail}</p>
          </a>
    )
}

export default Socials