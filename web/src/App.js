import logo from './logo.svg';
import './App.css';

/* 
-- Personal Info --
INSERT INTO rybald.personalInfo (id, name, position, description, headshotKey, email)
VALUES(
  UUID(),
  "Ryan Watkins",
  "Software Engineer",
  "I spend my time playing video games, playing basketball, video editing, coding and (occasionally) trying new things!",
  "fakeFileKey",
  "rdwatkin@outlook.com"
);
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
