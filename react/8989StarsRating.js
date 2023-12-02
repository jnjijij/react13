// StarsRating.js
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarsRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#FFD700" />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarsRating;
