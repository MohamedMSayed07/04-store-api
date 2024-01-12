const Product = require('../models/productModel');

module.exports.getAllProducts = async (req, res, next) => {
  const {featured, company, name, sort} = req.query;
  const queryObject = {};

  if(featured)
    queryObject.featured = featured === 'true'? true : false;

  if(company)
    queryObject.company = company;

  if(name)
    queryObject.name = {$regex: name, $options: 'i'};
  
  let result = Product.find(queryObject);
  
  if(sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }
  else {
    result = result.sort('createdAt');
  }

  const products = await result;
  res.status(200).json({products});
    // throw new Error('testing async errors');
};

module.exports.getProduct = async (req, res, next) => {
  res.status(200).json({msg: 'Get one product'});
};