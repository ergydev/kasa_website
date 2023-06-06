import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/banner"
import image from "../../assets/banner-about.png"

import './about.scss'


function About() {
    return(
        <div>
            <div className="banner__section">
                <Banner image={image}/>
            </div>
            <div className="collapse__section">
                <Collapse title="Fiabilité" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur vero, non eos voluptatem dicta sint reprehenderit! Qui, nisi porro veniam libero soluta sapiente expedita reprehenderit? Voluptatibus iure tempore amet?" />
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur vero, non eos voluptatem dicta sint reprehenderit! Qui, nisi porro veniam libero soluta sapiente expedita reprehenderit? Voluptatibus iure tempore amet?" />
                <Collapse title="Sécurité" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur vero, non eos voluptatem dicta sint reprehenderit! Qui, nisi porro veniam libero soluta sapiente expedita reprehenderit? Voluptatibus iure tempore amet?" />
            </div>
        </div>
    )
}

export default About

