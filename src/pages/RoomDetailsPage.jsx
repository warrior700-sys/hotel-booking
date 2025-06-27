import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRaiting from '../components/StarRaiting';

const RoomDetailsPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainimage] = useState(null);

  // Для управления состоянием формы (опционально)
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    const foundRoom = roomsDummyData.find(room => room._id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainimage(foundRoom.images[0]);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можно добавить логику отправки формы
    console.log({ checkIn, checkOut, guests });
  };

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 ld:px-24 lx:px-32 '>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/* Room Rating */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRaiting />
        <p className='ml-2'>200+ reviews</p>
      </div>

      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              onClick={() => setMainimage(image)}
              key={index}
              src={image}
              alt="Room Image"
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline-3 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'
      >
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

          <div className='flex flex-col'>
            <label htmlFor="checkin" className='font-medium'>Check In</label>
            <input
              type="date"
              id='checkin'
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className='rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="checkout" className='font-medium'>Check Out</label>
            <input
              type="date"
              id='checkout'
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className='rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="guests" className='font-medium'>Guests</label>
            <input
              type="number"
              id='guests'
              placeholder='0'
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              min="1"
              required
            />
          </div>
        </div>

        <button
          type='submit'
          className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-black rounded-md max-d:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'
        >
          Check Availability
        </button>
      </form>
       
         <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec,index)=>(
              <div key={index} className='flex items-start gap-2'>
                <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                <div>
                    <p className='text-base'>{spec.title}</p>
                    <p className='text-gray-500'>{spec.description}</p>
                </div>
              </div>
            ))}
         </div>

         <div className='max-w-3xl  border-y border-gray-300 my-15 py-10 text-gray-500'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolor doloremque ipsum odio et, eum dicta nulla unde sit incidunt praesentium maxime quae animi fugit consequatur! Ut ipsum labore expedita commodi accusamus voluptate.</p>
         </div>

        <div className='flex flex-col items-start gap-4'>
         <div className='flex gap-4'>
            <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
         </div>
         <p className='text-lg md:text-xl'> Hosted by {room.hotel.name}</p>
         <div className='flex items-center mt-1'>
            <StarRaiting/>
            <p className='ml-2'>200+ reviews</p>
         </div>
        </div>
    </div>
  );
};

export default RoomDetailsPage;
