
export interface Apartment {
  id: string;
  name: string;
  imageUrl: string;
  city: string;
  street: string;
  rooms: number;
  pricePerNight: number;
  rating: number; // 0-5
  amenities: string[];
  description: string;
}
