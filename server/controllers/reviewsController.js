const  Reviews = require('../../db/models/reviews');

const reviewsController = {
    Createreview: (req, res) => {
        Reviews.create({
          rating: 0,
          UserId: req.body.user, 
          RestaurantId: req.body.id
        })
        .then( 
          Reviews.findAll({
            where: {
              RestaurantId: req.body.id
            }
          })
          .then(data => {
            res.status(201).send(data);
        }) 
      )
      .catch(err => { console.log('***ERROR***');});
    },
    GetUserReview: (req, res) => {

      Reviews.findAll({ where:{ userid: req.query.userid } })
      .then(data => {
        res.status(201).send(data)})
      .catch(err => { console.log('***ERROR***');});
  },
  getRestaurantReviews: (req, res)=> {
    Reviews.findAll({
      where:{
        restaurantId: req.query.ID
      }
    })
    .then(data => {
      console.log('inside of getRestaurantReviews here is all the data query from database ====>>>>>', data)
      res.status(201).send(data)
    })
  }


}

module.exports = reviewsController;