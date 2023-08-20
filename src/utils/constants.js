export const HEADER_URL =
  "https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png";

export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fill";

// export const RESTRA_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6609677&lng=77.2276704&page_type=DESKTOP_WEB_LISTING"

export const RESTRA_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5177559&lng=73.81511119999999&page_type=DESKTOP_WEB_LISTING";

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6609677&lng=77.2276704&restaurantId=";

//   &catalog_qa=undefined&submitAction=ENTER"  => this part is api is optional
//  the complete menu api is  =>   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6609677&lng=77.2276704&restaurantId=32127&catalog_qa=undefined&submitAction=ENTER"

//Function to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  if (n <= 0) return 0;
  let count = 0;
  // let num = 2;
   let num = 1;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
  // return num;
}
