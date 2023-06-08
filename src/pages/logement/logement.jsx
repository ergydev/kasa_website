import { useParams } from 'react-router-dom'
import { announces } from '../../data/announces'
import Slider from '../../components/Slider/Slider'
import Collapse from "../../components/Collapse/Collapse"
import Rating from "../../components/Rating/Rating"
import Tags from "../../components/Tags/Tags"

import './logement.scss'

function Logement({ rating }) {
    const { id } = useParams()

    // use id to find current announce in the data file
    const currentAnnounce = announces.find((announce) => announce.id === id)
    return(
        <div>
            <Slider photos={currentAnnounce.pictures} announceId={currentAnnounce.id} />

            <section className="logement__title">
                <div className='logement__title--wrapper'>
                    <div className="logement__title--adress">
                        <h1 className='logment__title'>{currentAnnounce ? currentAnnounce.title : 'Logement'}</h1>
                        <p className='logement__adress'>{currentAnnounce.location}</p>
                        <Tags tags={currentAnnounce.tags} />
                    </div>

                </div>



                <div className='logement__info--wrapper'>
                    <div className='logement__host'>
                        <p className='logement__host--name'>{currentAnnounce ? currentAnnounce.host.name : 'Nom'}</p>
                        <img src={currentAnnounce ? currentAnnounce.host.picture : 'Avatar'} alt="Host" className='logement__host--avatar' />
                    </div>
                    <Rating rating={currentAnnounce.rating} />
                </div>
            </section>

            <section className='logement__description--wrapper'>
                <Collapse title="Description" content={currentAnnounce.description} />
                <Collapse title="Équipements" content={currentAnnounce.equipments} isList={true} />
            </section>

        </div>
    )
}
export default Logement