import React, { useState } from 'react'



// props is going to be passed 
const CardCount = props => {
  //set to cards intial count value
  const [cardCounts, setCount] = useState(0)
// Each card renders its own count
    return (
      <>
        {/*  Call current card likes -> add parent props -> Show props to button */}
        THIS CARDS LIKES: {cardCounts}
        <br></br>
        <button
          onClick={() => {
            setCount(cardCounts + props.count);
          }}
        >
          Add {props.count} More Likes!
        </button>
      </>
    );
}

export default CardCount
