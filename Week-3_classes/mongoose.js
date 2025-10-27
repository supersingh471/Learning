const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://cohort2:supersingh471@cohort2.6d1abj6.mongodb.net/user_app"
	);

const Users = mongoose.model('Users', {name: String, email: String,
password: String });

const user = new Users({
	name: 'Vikash Singh',
	email: 'Vikas.Singh471@gmail.com',
	password: '123456'
});

user.save()
  .then(() => {
    console.log("User saved successfully");
  })
  .catch((err) => {
    console.error("Error saving user:", err);
  });