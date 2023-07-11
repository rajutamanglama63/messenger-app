import "./App.css";
import Router from "./Router";
import DarkModeToggle from "./component/darkModeToggle/DarkModeToggle";

function App() {
  return (
    <div className="App">
      <div className="toggle-tab">
        <DarkModeToggle />
      </div>
      <Router />
    </div>
  );
}

export default App;
