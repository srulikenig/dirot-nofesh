
import React, { useState, useEffect } from 'react';
import { Apartment } from './types';
import { getMockApartments } from './services/mockData';
import ApartmentCard from './components/ApartmentCard';

const App: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setApartments(getMockApartments());
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-sky-600"></div>
        <p className="ml-4 rtl:mr-4 text-xl text-sky-700">טוען דירות...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-sky-800 tracking-tight">דירות נופש מומלצות</h1>
        <p className="text-xl text-sky-600 mt-2">מצאו את המקום המושלם לחופשה הבאה שלכם</p>
      </header>
      
      {apartments.length === 0 ? (
         <p className="text-center text-gray-500 text-lg">לא נמצאו דירות כרגע.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      )}

      <footer className="text-center mt-16 py-8 border-t border-sky-300">
        <p className="text-sky-700">&copy; {new Date().getFullYear()} כל הזכויות שמורות ל-Vacation Rentals Inc.</p>
        <p className="text-sm text-sky-600">נבנה באהבה עם React ו-Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
