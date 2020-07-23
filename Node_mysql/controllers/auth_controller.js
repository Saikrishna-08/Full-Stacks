const mysql = require("mysql");
const jwt=require('jsonwebtoken');
const bcrypt =require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
exports.register = (req, res) => {

    const { name, email, psw, psw_repeat } = req.body;

    db.query('select email from users where email=?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            return res.render("register", {
                message: "that email is already in use"
            })
        }
        else if (psw != psw_repeat) {
            return res.render('register', {
                message: 'passwords do not match'
            });
        }
       let hashedPassword=await bcrypt.hash(psw,8);
        console.log(hashedPassword);

        db.query('insert into users set ?',{email:email,pass_word:hashedPassword},(error,results)=>{
            if(error)
            {
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('register',{
                    message:"user registerd"
                });
            }
        });
    });  
}