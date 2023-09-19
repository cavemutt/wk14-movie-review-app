// ReviewList: a container inside of a Movie that houses Review components.
import PropTypes from "prop-types"
// import Review from "./Review";


export default function ReviewList(props) {
    return (
        <div className="review-list">
            {props.reviewArray.map((review) => {
                return (
                    <>
                        <h5><em>reviewed by</em> {review.name} <span>{review.stars}</span></h5>
                        <p>{review.review}</p>      
                    </>
                    )
                    
                })  
            }

        </div>

    )

}
{/* <h4><em>reviewed by</em> {review.name} <span>{review.stars}</span></h4>
<p>{review.review}</p>            */}

    

ReviewList.propTypes = {
    reviewArray: PropTypes.array
}