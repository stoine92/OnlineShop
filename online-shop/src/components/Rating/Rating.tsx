import css from "./Rating.module.scss";

interface RatingProps {
    rating: {
        rate: number;
        count: number;
    }
}

const Rating = ({ rating }: RatingProps) => {

    const { rate, count } = rating;

    const getStars = (rate: number) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={css[`${index < Math.round(rate) ? 'rating_stars-success' : 'rating_stars-fail'}`]}> &#9733;</span>
        ));
    };

    return (
        <div className={css['rating']}>
            <div className={css['rating_stars']}>
                {getStars(rate)}    
            </div>
            <span className={css['rating-info']}>{count} reviews</span>
        </div>
    );
};

export default Rating;