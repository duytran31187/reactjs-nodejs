// use express router
const router = require("express").Router();
const {getAllFoods} = require("../data/food");

router.get("/", async (req, res, next) => {
    console.log(req.token);
  try {

    const foods = await getAllFoods();

    res.json({ foods: foods });
  } catch (error) {
    next(error);
  }
});

module.exports = router;