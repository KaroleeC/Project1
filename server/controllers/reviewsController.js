const  Reviews = require('../../db/models/reviews');

const reviewsController = {
    Createreview: (req, res) => {
        Reviews.create({
          rating: req.rating,
          UserId: req.user, 
          RestaurantId: req.restaurant
        })
        .then( 
          Reviews.findAll({})
          .then(data => {
            res.status(201).send(data);
        }) 
      )
      .catch(err => { console.log('***ERROR***');});
    },
    GetUserReview: (req, res) => {
      Reviews.findAll({})
      .then(data => {
        res.status(201).send(data)})
      .catch(err => { console.log('***ERROR***');});
  }


}

module.exports = reviewsController;