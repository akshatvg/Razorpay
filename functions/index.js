const functions = require("firebase-functions");
const Razorpay = require("razorpay");
var key_id = "rzp_live_OyiPTdvmzGIcri";
var key_secret = "hS9UaO0aAj5Yu2Eq3txTaXi8";
var request = require("request");
const cors = require('cors')({
    origin: true
});
var razorpay = new Razorpay({
    key_id: 'rzp_live_OyiPTdvmzGIcri',
    key_secret: 'hS9UaO0aAj5Yu2Eq3txTaXi8',
});

razorpay.once('ready', function (response) {
    console.log(response.methods);
})

// console.clear();