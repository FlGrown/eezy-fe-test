import Filter from "./Components/Filter";
import "./Styles/style.scss";

function App() {
  const optionsArr = ["All", "Free", "Pro"];
  return (
    <div className="App">
      <Filter options={optionsArr} filtertype="Vectors" />
    </div>
  );
}

export default App;
