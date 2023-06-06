import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import { announces } from '../../data/announces';

import image from "../../assets/banner-home.png"
import './home.scss'


function App() {
  return (
    <div className="App">
        <div className="banner__section">
          <Banner image={image} title={"Chez vous, partout et ailleurs"}/>
        </div>
        <div id="layout_grid--section">
          {announces.map((announce) =>(
            <Card key={announce.id} title={announce.title} id={announce.id} cover={announce.cover} />
          ))}
        </div>
    </div>
  );
}

export default App;
