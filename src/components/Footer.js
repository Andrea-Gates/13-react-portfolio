function Footer(props) {
  return (
   <footer>
      <nav>
        <button onClick={() => props.setPage("home")}>Home </button>
        <button onClick={() => props.setPage("contact")}>Contact </button>
        <button onClick={() => props.setPage("about")}>About </button>
        <button onClick={() => props.setPage("portfolio")}>Portfolio </button>
        <button onClick={() => props.setPage("links")}>Links </button>
      </nav>
      </footer>
  );
}

export default Footer;
