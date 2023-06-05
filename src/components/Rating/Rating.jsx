import './rating.scss'
import starEmpty from '../../assets/star.png'
import starFilled from '../../assets/fullstar.png'

function Rating ({ rating }) {

    const totalStars = 5

    const getStarImage = (index) => {
        if(index < rating) {
            return starFilled
        } else {
            return starEmpty
        }
    }

    return(
        <div className='rating'>
            {Array.from({ length: totalStars}, (_, index) => (
                <img
                    key={index}
                    src={getStarImage(index)}
                    alt={index < rating ? 'Star filled' : 'Star empty'}
                    className='star'
                />
            ))}
        </div>
    )
}

export default Rating