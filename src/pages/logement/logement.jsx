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

            <div className='logement__title--wrapper'>
                <h1 className='logment__title'>{currentAnnounce ? currentAnnounce.title : 'Logement'}</h1>
                <div className='logement__host'>
                    <p className='logement__host--name'>{currentAnnounce ? currentAnnounce.host.name : 'Nom'}</p>
                    <img src={currentAnnounce ? currentAnnounce.host.picture : 'Avatar'} alt="Host" className='logement__host--avatar' />
                </div>
            </div>

            <p className='logement__adress'>{currentAnnounce.location}</p>

            <div className='logement__info--wrapper'>
                <Tags tags={currentAnnounce.tags} />
                <Rating rating={currentAnnounce.rating} />
            </div>

            <section className='logement__description--wrapper'>
                <Collapse title="Description" content={currentAnnounce.description} />
                <Collapse title="Équipements" content={currentAnnounce.equipments} />
            </section>

        </div>
    )
}
export default Logement