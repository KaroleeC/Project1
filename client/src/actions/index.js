
export const selectRestaurant = (restaurant) => {
  console.log('hello', restaurant);
  return {
    type: "RESTAURANT_SELECTED",
    payload: restaurant
  }
};

export const searchRestaurant = (data) => {
    console.log('inside of searchRestaurant action here is the data', data.businesses)
    return {
        type: "RESTAURANT_SEARCH",
        payload: data.businesses
    }
}
