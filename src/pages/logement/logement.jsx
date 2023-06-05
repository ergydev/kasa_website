import { useParams } from 'react-router-dom'
import './logement.scss'
import { announces } from '../../data/announces'
import Slider from '../../components/Slider/Slider'

function Logement() {
    const { id } = useParams()

    // use id to find current announce in the data file
    const currentAnnounce = announces.find((announce) => announce.id === id)
    return(
        <div>
            <h1>{currentAnnounce ? currentAnnounce.title : 'Logement'}</h1>
            <Slider photos={currentAnnounce.pictures} announceId={currentAnnounce.id} />
        </div>
    )
}
export default Logement