function Header(props) {
  return (
    <header>
      <h3>{props.title} </h3>
     
      <nav>
      <button onClick={() => props.setPage("home")}>Home </button>
      <button onClick={() => props.setPage("contact")}>Contact </button>
      <button onClick={() => props.setPage("about")}>About </button>
      <button onClick={() => props.setPage("portfolio")}>Portfolio </button>
      <button onClick={() => props.setPage("links")}>Links </button>
    </nav>

    </header>
  )
}

export default Header;
