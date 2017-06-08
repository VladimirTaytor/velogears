'use strict';

var expect = require('expect.js');


describe('models/index', function () {

    it('returns the User model', function () {
        var models = require('../../models');
        expect(models.User).to.be.ok();
    });

    it('returns the Cart model', function () {
        var models = require('../../models');
        expect(models.Cart).to.be.ok();
    });

    it('returns the Category model', function () {
        var models = require('../../models');
        expect(models.Category).to.be.ok();
    });

    it('returns the Image model', function () {
        var models = require('../../models');
        expect(models.Image).to.be.ok();
    });

    it('returns the Item model', function () {
        var models = require('../../models');
        expect(models.Item).to.be.ok();
    });

    it('returns the SubCategory model', function () {
        var models = require('../../models');
        expect(models.SubCategory).to.be.ok();
    });

    it('returns the Order model', function () {
        var models = require('../../models');
        expect(models.Order).to.be.ok();
    });
});