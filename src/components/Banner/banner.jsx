import './banner.scss'

function Banner({ image, title }) {
    return(
        <div className='banner'>
            {image && <img src={image} alt="Banner" className='banner__image' />}
            {title && (
                <div className='banner__content'>
                    <h1 className='banner__title'>{title}</h1>
                </div>
            )}
        </div>
    )
}

export default Banner