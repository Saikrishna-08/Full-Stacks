const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   // res.send("<h1>home page</h1>");
   res.render("home"); //  or index.hbs
});

//when we click on register link its href="/register"
router.get("/register", (req, res) => {
   // res.send("<h1>home page</h1>");
   res.render("register"); // or register.hbs
});
router.get("/login", (req, res) => {
   res.render("login");
});
router.get("/contactus", (req, res) => {
   res.render("contactus");
});
router.get("/individual", (req, res) => {
   res.render("individual");
});
router.get("/products", (req, res) => {
   res.render("products");
});

router.get("/payment", (req, res) => {
   res.render("payment");
});

router.get("/forgot", (req, res) => {
   res.render("forgotpassword");
});

module.exports = router;
