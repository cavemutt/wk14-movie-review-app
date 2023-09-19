// Stars: a one to five-star rating component that allows users to rate something 
import { useState } from 'react'
import { StarFill } from 'react-bootstrap-icons'
// import { Star } from 'react-bootstrap-icons'


const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div>
            {[...Array(5)].map((star,i) => {
                const ratingValue = i + 1

                return (
                    <label key={i} style={{"--i": {i}}}>
                        <input type="radio" className="star-input" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                        <StarFill className='star' color={ratingValue <= (hover || rating) ? "#ffc107" : "#777"} />
                    </label>
                ) 
                
            })}
            
        </div>
    )
}

export default StarRating
