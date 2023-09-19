// Review: A text review a user can leave on a movie.
import PropTypes from "prop-types"

// take props from form submitted, format it here before adding to ReviewList

export default function Review(props) {
    // const getDataFromForm = data => {
    //     console.log('review data', data)
    // }
    return (
        <div>
            <h5><em>reviewed by</em> {props.name} <span>{props.stars}</span></h5>
            <p>{props.review}</p>   
        </div>
    )
}

Review.propTypes = {
    name: PropTypes.string,
    stars: PropTypes.string,
    review: PropTypes.string
}
