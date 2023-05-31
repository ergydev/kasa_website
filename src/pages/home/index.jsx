import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="banner_section">
          <Banner />
        </div>
        <div id="layout_grid--section">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
