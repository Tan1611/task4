import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA />
        <ComponentB />
      </header>
    </div>
    </>
  );
}

export default App;
