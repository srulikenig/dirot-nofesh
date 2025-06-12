
import React from 'react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
      <img className="w-full h-56 object-cover" src={apartment.imageUrl} alt={apartment.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-sky-700 mb-2">{apartment.name}</h3>
        <p className="text-md text-gray-600 mb-1">
          <span className="font-medium">מיקום:</span> {apartment.city}, {apartment.street}
        </p>
        <p className="text-md text-gray-600 mb-3">
          <span className="font-medium">תיאור קצר:</span> {apartment.description}
        </p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
          <div className="flex items-center">
            <span className="text-xl mr-2 rtl:ml-2 rtl:mr-0">🛏️</span>
            <span>{apartment.rooms} חדרים</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2 rtl:ml-2 rtl:mr-0">💰</span>
            <span>₪{apartment.pricePerNight} ללילה</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-800 mb-1">דירוג:</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < Math.round(apartment.rating)} />
            ))}
            <span className="ml-2 rtl:mr-2 rtl:ml-0 text-yellow-500 font-semibold">{apartment.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-auto">
          <h4 className="text-sm font-medium text-gray-800 mb-2">שירותים ומתקנים:</h4>
          <div className="flex flex-wrap gap-2">
            {apartment.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
