import './App.css';
import logo from "./images/ezHire4me-dark.jpg";
import image from "./images/under-construction.gif"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="ezHire4me-logo" alt="logo"/>
        <img src={image} className="under-construction" alt="image"/>
        <p>
          Welcome to ezHire4me.com
        </p>
      </header>
    </div>
  );
}

export default App;
