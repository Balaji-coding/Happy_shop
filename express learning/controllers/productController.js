const ProductModel = require('../models/productModel')
// get products =/api/v1/product
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword
        ? {
              name: {
                  $regex: req.query.keyword,
                  $options: 'i'   // <-- Correct here
              }
          }
        : {};

        console.log(query, 'query');
    const Products = await ProductModel.find(query);


    res.json({
        success: true,
        msg: 'Get products working',
        product: Products
    });
};


exports.getSingleProducts =async(req,res,next)=>{
    // const temp = req.params.id
    try{
        const product = await ProductModel.findById(req.params.id)
        res.json({
            success :true,
            msg:'Get products single working',
            product:product
        })
    }
    catch (err){
        res.status(404).json({
            success :false,
            msg:err.message
        })
    }
}