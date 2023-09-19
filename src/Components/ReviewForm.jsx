// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import { useState } from "react";
import Stars from "./Stars";
// import Review from "./Review"

export default function ReviewForm() {
    const [name, setName] = useState('')
    const [stars, setStars] = useState('')
    const [review, setReview] = useState('')
    // const [newReview, isNewReview] = useState(false)

    const submitForm = e => {
        e.preventDefault()

        // console.log({name, stars, review})
        document.getElementById('name').value = ""
        document.getElementById('stars').value = ""
        document.getElementById('review').value = ""
    }


    return (
        <div>
            <div className="new-review">
                <h5><em>New Review by :</em> {name} <span>{stars}</span></h5>
                <p>{review}</p>   
            </div>
            <div className="review-form-container">
                <h4>Leave your own review :</h4>
                <fieldset>
                    <form>
                        <div>
                            <label htmlFor="name">Your name</label>
                            <br></br>
                            <input id="name" name="name" type="text" placeholder="enter your name here" onChange={e => {setName(e.target.value)}}></input>
                            <Stars onChange={e => {setStars(e.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="review">Leave a review of this movie :</label>
                            <br></br>
                            <textarea id="review" onChange={e => {setReview(e.target.value)}}></textarea>
                        </div>

                        <button type="submit" onClick={submitForm}>Submit Review</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
    
}


