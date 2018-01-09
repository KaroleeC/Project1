export const searchRestaurant = (e) => {
    console.log('you clicked on search button');
    return {
        tyle: 'RESTAURANT_SEARCH',
        payload: e
    }
}