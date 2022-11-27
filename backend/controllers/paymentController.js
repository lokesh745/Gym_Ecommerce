const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const Instance = new Razorpay({

    // Replace with your key_id
    key_id: "rzp_test_1aShuHpsrGIQ3j",
    

    // Replace with your key_secret
    key_secret: "HDQ5KL7rEAMsViRwNmBfm39A"
});



exports.checkout = catchAsyncErrors(async (req, res, next) => {

    var options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await Instance.orders.create(options);
   


    res.status(200).json({
        success: true,
        order,

    })



});


exports.paymentVerification = catchAsyncErrors(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;


//         generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

//   if (generated_signature == razorpay_signature) {


//   }

        
        res.redirect(
            `http://localhost:3000/success`
          );
 

});

exports.getKey = catchAsyncErrors(async (req, res, next) => {



    res.status(200).json({
        key: "rzp_test_1aShuHpsrGIQ3j"

    })



});