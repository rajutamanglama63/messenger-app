import "./App.css";
import Router from "./Router";
import DarkModeToggle from "./component/darkModeToggle/DarkModeToggle";
import Notification from "./component/notification/Notification";

function App() {
  return (
    <div className="App">
      <Notification />
      <div className="toggle-tab">
        <DarkModeToggle />
      </div>
      <Router />
    </div>
  );
}

export default App;
