const express = require('express');
const gamesController = require('../controllers/gamesController');
const validator = require('express-joi-validation').createValidator({});
const bodySchema = require('../validations/bodyValidator');
const querySchema = require('../validations/queryValidator');
const paramsSchema = require('../validations/paramsValidator');


const router = (Games) => {
  const gamesRouter = express.Router();

    const { getAllGames, getGameById, postGames, deleteGameById, putGameById} = gamesController(Games);

    peopleRouter.route('/games').get(validator.query(querySchema) ,getAllGames).post(validator.body(bodySchema), postGames);

    peopleRouter.route('/games/:idGames').get(validator.params(paramsSchema) ,getGameById).delete(validator.params(paramsSchema) ,deleteGameById)
                                        .put(validator.params(paramsSchema), validator.body(bodySchema), putGameById);

  return gamesRouter;
}

module.exports = router