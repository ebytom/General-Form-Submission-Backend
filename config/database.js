const mongoose = require("mongoose");

var db = null

module.exports.connectDB = async () => {
    mongoose.set('strictQuery', true)
    const dbinstance = await mongoose.connect("mongodb+srv://ebytomy7:uxgUJ5le97ZXk9gA@cluster.odk5ymv.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected")
    db = dbinstance
    return dbinstance;
}