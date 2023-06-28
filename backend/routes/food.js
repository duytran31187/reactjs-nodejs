// use express router
const router = require("express").Router();

router.get("/", (req, res) => {
    // TODO: return list available foods here
    res.send("will return food data here");
});

module.exports = router;