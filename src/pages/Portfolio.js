import Album from "../components/Album";

function Portfolio(props) {
  return (
<div>
      <h1>Portfolio Page</h1>

      <Album title={props.title} />
  </div>
  );
}

export default Portfolio;
