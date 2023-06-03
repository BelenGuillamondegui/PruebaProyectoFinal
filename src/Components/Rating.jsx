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



// import React, { useState } from 'react';

// const Rating = () => {
//   const [ratings, setRatings] = useState([]);
//   const [userRating, setUserRating] = useState(0);

//   const handleStarClick = (selectedRating) => {
//     setUserRating(selectedRating);
//     setRatings([...ratings, selectedRating]);
//   };

//   const calculateAverageRating = () => {
//     if (ratings.length === 0) {
//       return 0;
//     }
//     const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
//     return totalRating / ratings.length;
//   };

//   return (
//     <div>
//       <div>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleStarClick(star)}
//             style={{
//               cursor: 'pointer',
//               color: star <= userRating ? 'gold' : 'gray',
//             }}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//       <p>Tu valoración: {userRating}</p>
//       <p>Promedio de valoraciones: {calculateAverageRating()}</p>
//     </div>
//   );
// };

// export default Rating;