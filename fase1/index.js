function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" alt="React logo" className="nav-logo"></img>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MyContent({ name }) {
  return (
    <div className="content">
      <h1>Why I want to Learn React</h1>
      <h3>My name is {name}.</h3>
      <p>React is a powerful library for building user interfaces.</p>
      <p>Here we have some reasons to learn React:</p>
      <ol>
        <li>It's component-based</li>
        <li>It's widely used in the industry</li>
        <li>It has a strong community</li>
      </ol>
    </div>
  );
}

function MyFooter() {
  return (
    <footer className="footer">
      <small>© 2024 Why I want to Learn React. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MyContent name="Victor Leonel" />
      <MyFooter />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
