var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/items', function(req, res) {
    models.Item.findAll({
        include: [{model: models.SubCategory, include: models.Category}]
        }).then(function(items) {

       res.send(items);
    });
});

router.get("/items/post", function (req, res) {

    models.Category.create({
        name: "Category 1"
    }).then(function () {
        models.SubCategory.create({
            name: "SubCategory 1",
            CategoryId: 1
        })
    }).then(function () {
        models.Item.create({
            name: "Item 1",
            description: "Description 1",
            price: 21.3,
            SubCategoryId: 1
        });
    });
});

module.exports = router;