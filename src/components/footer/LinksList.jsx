const LinksList = ({ links }) => {
  return (
    <ul className="p-0" style={{ listStyleType: "none" }}>
      {links.map((e) => {
        return (
          <li className="list">
            <a href="" className="footer-links">
              {e}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LinksList;
