//This is for mongodb native
const { MongoClient, ServerApiVersion } = require('mongodb')

var db = null

module.exports.connect = (done) => {

    var url = process.env.MONGODB_URL

    const dbname = 'Survey Data'

    const mongoClient = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

    mongoClient.connect((err, data) => {

        if (err) return done(err)
        db = data.db(dbname)
        done()
    }).catch(err => {
        console.log(err);
    })
}

module.exports.get = () => db