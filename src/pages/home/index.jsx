import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/Footer"
import { announces } from '../../data/announces';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="banner_section">
          <Banner />
        </div>
        <div id="layout_grid--section">
          {announces.map((announce) =>(
            <Card key={announce.id} title={announce.title} id={announce.id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
