import React from 'react';
import title from './title';
import starIconFilled from '../assets/starIconFilled.svg'; // ✅ Путь к заполненной звезде
import starIconOutlined from '../assets/starIconOutlined.svg'; // ✅ Путь к пустой звезде

const StarRaiting = ({ raiting = 4 }) => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            key={index}
            src={raiting > index ? starIconFilled : starIconOutlined}
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRaiting;
