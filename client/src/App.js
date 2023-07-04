import "./App.css";
import Router from "./Router";
import DarkModeToggle from "./component/darkModeToggle/DarkModeToggle";

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Router />
    </div>
  );
}

export default App;
