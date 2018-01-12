export const selectRestaurant = (restaurant) => {
  console.log('hello', restaurant);
  return {
    type: "RESTAURANT_SELECTED",
    payload: restaurant
  }
};