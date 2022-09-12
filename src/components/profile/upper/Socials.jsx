const Socials = (props) => {
  if (props.detail == "") {
    return;
  } else {
    return (
      <a className="socials" href={props.href} target="_blank">
        {props.icon}
        <p className="social-detail">{props.detail}</p>
      </a>
    );
  }
};

export default Socials;
