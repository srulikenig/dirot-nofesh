
import { Apartment } from '../types';

export const getMockApartments = (): Apartment[] => [
  {
    id: '1',
    name: 'סוויטת חוף חלומית',
    imageUrl: 'https://picsum.photos/seed/apt1/600/400',
    city: 'תל אביב',
    street: 'הירקון 100, קומה 5',
    rooms: 3,
    pricePerNight: 850,
    rating: 4.8,
    amenities: ['WiFi מהיר', 'נוף פנורמי לים', 'מטבח שף', 'חניה פרטית'],
    description: 'סוויטה מרווחת ומעוצבת עם מרפסת גדולה המשקיפה ישירות לחוף הים. אידיאלית למשפחות וזוגות המחפשים חופשה יוקרתית.'
  },
  {
    id: '2',
    name: 'דירת גן קסומה בירושלים',
    imageUrl: 'https://picsum.photos/seed/apt2/600/400',
    city: 'ירושלים',
    street: 'עמק רפאים 25',
    rooms: 2,
    pricePerNight: 600,
    rating: 4.5,
    amenities: ['גינה פרטית', 'כניסה נפרדת', 'שקט ופסטורלי', 'קרוב למרכז'],
    description: 'דירת גן מקסימה ושקטה בלב המושבה הגרמנית. כוללת גינה ירוקה ומטופחת, מושלמת לארוחות בוקר באוויר הפתוח.'
  },
  {
    id: '3',
    name: 'פנטהאוז יוקרתי באילת',
    imageUrl: 'https://picsum.photos/seed/apt3/600/400',
    city: 'אילת',
    street: 'משעול הדולפין 7',
    rooms: 4,
    pricePerNight: 1200,
    rating: 4.9,
    amenities: ['בריכה פרטית על הגג', 'ג\'קוזי', 'חדר קולנוע', 'שירותי קונסיירז\''],
    description: 'פנטהאוז עוצר נשימה עם נוף למפרץ אילת. מציע חווית אירוח אקסקלוסיבית עם כל הפינוקים האפשריים.'
  },
  {
    id: '4',
    name: 'בקתת עץ בגליל',
    imageUrl: 'https://picsum.photos/seed/apt4/600/400',
    city: 'ראש פינה',
    street: 'דרך היין 12',
    rooms: 1,
    pricePerNight: 550,
    rating: 4.6,
    amenities: ['אווירה כפרית', 'קמין', 'מרפסת נוף', 'טיפולי ספא (בהזמנה)'],
    description: 'בקתת עץ רומנטית ומבודדת בלב הטבע הגלילי. המקום המושלם לברוח מהמולת היום-יום ולהתחבר לשקט ולשלווה.'
  },
  {
    id: '5',
    name: 'דירה אורבנית בחיפה',
    imageUrl: 'https://picsum.photos/seed/apt5/600/400',
    city: 'חיפה',
    street: 'שדרות הנשיא 88',
    rooms: 2,
    pricePerNight: 480,
    rating: 4.3,
    amenities: ['מרפסת שמש', 'קרוב לכרמלית', 'מעוצבת מודרנית', 'פינת עבודה'],
    description: 'דירה שיקית ומוארת במרכז הכרמל, קרובה לבתי קפה, מסעדות ומוקדי תרבות. נוחה ונגישה לתחבורה ציבורית.'
  },
  {
    id: '6',
    name: 'וילה עם בריכה בקיסריה',
    imageUrl: 'https://picsum.photos/seed/apt6/600/400',
    city: 'קיסריה',
    street: 'הנבל 5',
    rooms: 5,
    pricePerNight: 2500,
    rating: 5.0,
    amenities: ['בריכה גדולה', 'חצר מטופחת', 'שולחן ביליארד', 'מטבח חיצוני'],
    description: 'וילה מפוארת ומרווחת במיקום יוקרתי בקיסריה. מתאימה למשפחות גדולות או קבוצות חברים המחפשים חופשה בלתי נשכחת.'
  }
];
