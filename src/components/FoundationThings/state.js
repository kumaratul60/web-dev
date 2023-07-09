//  we can write state in this way also

// const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

const arrWork = useState(resList);

// const filteredRestaurants = arrWork[0];
// const setFilteredRestaurants = arrWork[1];

const [filteredRestaurants, setFilteredRestaurants] = arrWork;
