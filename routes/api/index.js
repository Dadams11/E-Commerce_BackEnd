const router = require('express').Router();


const Product = require('../../models/Product');
const Category = require('../../models/Category');
const Tag = require('../../models/Tag');
const ProductTag = require('../../models/ProductTag');


const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const tagRoutes = require('./tag-routes');

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
