// index.js in the seeds folder
const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const seedAll = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database successful.');

    await sequelize.sync({ force: true });
    console.log('Database synced.');

    await seedCategories();
    console.log('Categories seeded.');

    await seedProducts();
    console.log('Products seeded.');

    await seedTags();
    console.log('Tags seeded.');

    await seedProductTags();
    console.log('Product Tags seeded.');

    process.exit(0);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

seedAll();
