import createRestaurantHomePage from './restaurant.js';
import createTabs from './tabs.js';

export default function loadPage() {
  createTabs();
  createRestaurantHomePage();
}