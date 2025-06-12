
import { getMockApartments, getMockAds } from './services/mockData.js';

let allApartments = []; // To store the original list of apartments
let allAds = []; // To store the original list of ads

const StarIconSVG = (filled) => `
  <svg
    class="w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
`;

const renderApartmentCard = (apartment) => {
  const amenitiesHTML = apartment.amenities.map(amenity => `
    <span class="bg-sky-100 text-sky-700 px-3 py-1.5 rounded-full text-xs font-medium_custom whitespace-nowrap">
      ${amenity}
    </span>
  `).join('');

  let starsHTML = '';
  const ratingRounded = Math.round(apartment.rating);
  for (let i = 0; i < 5; i++) {
    starsHTML += StarIconSVG(i < ratingRounded);
  }

  const premiumBadgeHTML = apartment.isPremium ? `
    <div class="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 transform group-hover:scale-110 transition-transform">
      ✨ מומלץ VIP
    </div>
  ` : '';

  const premiumCardClasses = apartment.isPremium ? 'border-2 border-yellow-400 shadow-xl scale-102' : 'shadow-lg';

  return `
    <div class="relative group bg-white rounded-xl overflow-hidden flex flex-col transform hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out h-full-card ${premiumCardClasses}">
      ${premiumBadgeHTML}
      <div class="relative">
        <img class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" src="${apartment.imageUrl}" alt="${apartment.name}" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-2xl font-bold text-sky-800 mb-2 group-hover:text-sky-600 transition-colors">${apartment.name}</h3>
        <p class="text-sm text-gray-500 mb-1">
          <span class="font-medium text-gray-700">מיקום:</span> ${apartment.city}, ${apartment.street}
        </p>
        <p class="text-md text-gray-700 mb-4 line-clamp-3"> 
          ${apartment.description}
        </p>
        
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
          <div class="flex items-center">
            <span class="text-lg mr-2 rtl:ml-2 rtl:mr-0 text-sky-600">🛏️</span>
            <span>${apartment.rooms} חדרים</span>
          </div>
          <div class="flex items-center">
            <span class="text-lg mr-2 rtl:ml-2 rtl:mr-0 text-sky-600">💰</span>
            <span>₪${apartment.pricePerNight} ללילה</span>
          </div>
        </div>

        <div class="mb-5">
          <div class="flex items-center">
            ${starsHTML}
            <span class="ml-2 rtl:mr-2 rtl:ml-0 text-yellow-500 font-semibold">${apartment.rating.toFixed(1)}</span>
            <span class="text-xs text-gray-500 ml-1 rtl:mr-1 rtl:ml-0">(${Math.floor(Math.random() * 50 + 20)} ביקורות)</span>
          </div>
        </div>

        <div class="mt-auto">
          <h4 class="text-sm font-semibold text-gray-800 mb-2">שירותים ומתקנים:</h4>
          <div class="flex flex-wrap gap-2">
            ${amenitiesHTML}
          </div>
        </div>
        <button class="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
          הצג פרטים והזמן
        </button>
      </div>
    </div>
  `;
};

const renderAdCard = (ad) => {
  return `
    <div class="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:shadow-xl transition-shadow duration-300 ease-in-out h-full-card border border-gray-200 p-1">
      <div class="relative aspect-video">
        <img class="w-full h-full object-cover rounded-t-lg" src="${ad.imageUrl}" alt="${ad.title}" />
        <div class="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
          פרסומת
        </div>
      </div>
      <div class="p-5 flex flex-col flex-grow">
        <h4 class="text-lg font-semibold text-gray-800 mb-1">${ad.title}</h4>
        <p class="text-sm text-gray-600 mb-3">מטעם: ${ad.advertiser}</p>
        <a href="${ad.linkUrl}" target="_blank" rel="noopener noreferrer" 
           class="mt-auto inline-block text-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
          ${ad.callToAction}
        </a>
      </div>
    </div>
  `;
}

const displayLogicToShowItems = (apartmentsToDisplay, adsToDisplay) => {
  const contentGrid = document.getElementById('apartments-grid');
  const noItemsMessage = document.getElementById('no-items-message');
  
  contentGrid.innerHTML = ''; // Clear previous items

  let items = [];
  if (apartmentsToDisplay && apartmentsToDisplay.length > 0) {
    let adIndex = 0;
    for (let i = 0; i < apartmentsToDisplay.length; i++) {
      items.push(apartmentsToDisplay[i]);
      // Interleave ads: 1 ad after every 3 apartments, if ads are available
      if ((i + 1) % 3 === 0 && adIndex < adsToDisplay.length) {
        // Ensure the ad itself has a 'type' property
        if(adsToDisplay[adIndex] && typeof adsToDisplay[adIndex] === 'object') {
            items.push({...adsToDisplay[adIndex], type: 'ad'}); // Ensure type is set for ads
        }
        adIndex++;
      }
    }
    // Add any remaining ads if not all were placed and there are apartments
    // This logic might need refinement based on desired ad placement strategy
    while(adIndex < adsToDisplay.length && items.length < apartmentsToDisplay.length + adsToDisplay.length) {
       if(adsToDisplay[adIndex] && typeof adsToDisplay[adIndex] === 'object') {
            items.push({...adsToDisplay[adIndex], type: 'ad'});
        }
      adIndex++;
    }
  } else if (adsToDisplay.length > 0) { // If no apartments, but there are ads, show only ads
      items = adsToDisplay.map(ad => ({...ad, type: 'ad'}));
  }


  if (items.length > 0) {
    contentGrid.innerHTML = items.map(item => {
      // Check for a 'type' property to distinguish ads, or use a property like 'isPremium' for apartments
      if (item.type === 'ad') { 
        return renderAdCard(item);
      }
      return renderApartmentCard(item); // Assumed to be an apartment if not an ad
    }).join('');
    contentGrid.style.display = 'grid';
    noItemsMessage.style.display = 'none';
  } else {
    contentGrid.style.display = 'none';
    noItemsMessage.style.display = 'block';
    noItemsMessage.textContent = 'לא נמצאו דירות או הצעות התואמות את החיפוש שלך. נסו לשנות את תנאי החיפוש או נקו סינונים.';
  }
};

const filterApartments = (apartments, filters) => {
  const { searchText, city, minPrice, maxPrice } = filters;
  
  return apartments.filter(apt => {
    const searchTextLower = searchText.toLowerCase();
    const cityLower = city.toLowerCase();

    const matchesSearchText = searchText ? 
      apt.name.toLowerCase().includes(searchTextLower) || 
      apt.description.toLowerCase().includes(searchTextLower) ||
      apt.street.toLowerCase().includes(searchTextLower) ||
      apt.city.toLowerCase().includes(searchTextLower) : true;

    const matchesCity = city ? apt.city.toLowerCase().includes(cityLower) : true;
    
    const matchesMinPrice = minPrice ? apt.pricePerNight >= parseFloat(minPrice) : true;
    const matchesMaxPrice = maxPrice ? apt.pricePerNight <= parseFloat(maxPrice) : true;

    return matchesSearchText && matchesCity && matchesMinPrice && matchesMaxPrice;
  });
};

const initialLoadAndSetup = () => {
  const loadingIndicator = document.getElementById('loading-indicator');
  const contentGrid = document.getElementById('apartments-grid');
  
  loadingIndicator.style.display = 'flex';
  contentGrid.style.display = 'none';

  // Simulate API call
  setTimeout(() => {
    allApartments = getMockApartments();
    allAds = getMockAds();
    
    loadingIndicator.style.display = 'none';
    displayLogicToShowItems(allApartments, allAds);

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(searchForm);
      const filters = {
        searchText: formData.get('search-text') || '',
        city: formData.get('search-city') || '',
        minPrice: formData.get('min-price') || '',
        maxPrice: formData.get('max-price') || '',
      };
      const filteredApartments = filterApartments(allApartments, filters);
      displayLogicToShowItems(filteredApartments, allAds); // Always show all ads with filtered apartments
    });

    searchForm.addEventListener('reset', () => {
      // Resetting the form clears the inputs. Then display all items.
      // Need a brief timeout to allow form reset to complete before re-filtering
      setTimeout(() => {
        displayLogicToShowItems(allApartments, allAds);
      }, 0);
    });

  }, 700); 
};

document.addEventListener('DOMContentLoaded', () => {
  initialLoadAndSetup();
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
