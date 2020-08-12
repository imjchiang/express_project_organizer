let express = require("express");
let db = require("../models");
let router = express.Router();

router.get('/', (req, res) => {
    db.category.findAll()
    .then(category => 
    {
        res.render('categories/show', {category: category});
    })
    .catch(err => 
    {
        console.log(err);
    })
})

module.exports = router; 