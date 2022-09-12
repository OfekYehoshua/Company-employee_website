const Socials = ({ href, paths, viewBox }) => {
  return (
    <a href={href} className="community-ref-container">
      <svg className="community-ref" fill="#FFFFFF" viewBox={viewBox}>
        {paths.map((path) => {
          return <path d={path} />;
        })}
      </svg>
    </a>
  );
};

export default Socials;
