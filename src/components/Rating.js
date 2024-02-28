import starRegular from '../assets/star-regular.svg';
import starSolid from '../assets/star-solid.svg';

const Rating = ({ value }) => {
    const maxRating = 5; // Maximum rating value

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            const starIcon = i <= value ? starSolid : starRegular;
            stars.push(
                <img
                    key={i}
                    src={starIcon}
                    width="20px"
                    height="20px"
                    alt={`Star ${i}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className='rating' style={{ display: 'flex', alignItems: 'center' }}>
            {renderStars()}
        </div>
    );
};

export default Rating;
