import logo from "./penguin.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Zootopia!!</p>
        <a
          className="App-link"
          href="https://youtu.be/jWM0ct-OLsM?si=u3-6Gf81fpgW2dW3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zootopia
        </a>
      </header>
    </div>
  );
}

export default App;
