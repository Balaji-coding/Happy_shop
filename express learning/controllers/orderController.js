const orderModel =require("../models/orderModel")
const productModel =require("../models/productModel")
exports.CreateOrder =async(req,res,next)=>{
    const cartItems = req.body
    console.log(cartItems,'dats')
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.count),0)).toFixed(2)
    const status = 'pending'
    const order =await orderModel.create({cartItems,amount,status})


    cartItems.forEach(async(item) => {
        const product =await productModel.findById(item.product._id);
        product.stock =product.stock -item.count;
        await product.save()
    });
    res.json({
        success : true,
        msg:'order Works',
        order : order
    })
}

