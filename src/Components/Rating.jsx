import React, { useState, useEffect } from 'react';

const Rating = () => {
    
  const getInitialRating = () => {
    const savedRating = localStorage.getItem('rating');
    return savedRating ? parseInt(savedRating) : 0;
  };

  const [rating, setRating] = useState(getInitialRating());

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    localStorage.setItem('rating', rating.toString());
  }, [rating]);

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span className='rating'
            key={star}
            onClick={() => handleStarClick(star)}
            // style={{ cursor: 'pointer' }}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      {/* <p>Puntuación: {rating}</p> */}
    </div>
  );
};

export default Rating;