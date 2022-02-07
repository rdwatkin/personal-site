import './App.css';
import { HomeView } from 'views'
import { Header } from 'components'

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
      <Header/>
      <body>
        <HomeView/>
      </body>
    </div>
  );
}

export default App;
