

module.exports.getAllProducts = async (req, res, next) => {
  res.status(200).json({msg: 'Products testing route'});
};

module.exports.getProduct = async (req, res, next) => {
  res.status(200).json({msg: 'Get one product'});
};