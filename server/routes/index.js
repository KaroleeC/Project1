const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController')
const restaurantController = require('../controllers/restaurantController')
// require path to user controller

router.route('/user') 
    .get()
    .post()


router.route('/search')
    .get(searchController.search)
    .post(searchController.search)


router.route('/restaurant') 
    .get(restaurantController.CreateRestaurant)    
    .post()


router.route('/reviews') 
    .get()
    .post()



module.exports = router;