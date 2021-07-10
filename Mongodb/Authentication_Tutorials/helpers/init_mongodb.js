const mongoose = require('mongoose');
// const validator = require('validator');

// creation of new collection in new db
mongoose.connect('mongodb://localhost:27017', {dbName : 'Anmol', useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then( () => {console.log('mongodb connected')})
.catch((err) => console.log(err.message));  

mongoose.connect('mongodb://localhost:27017/Anmol', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then( () => console.log('connected'))
.catch((err) => console.log(err));

const netflixSchema = mongoose.Schema( {
    name: String,
    year: Number,
    rating : Number,
    language:  String,
    active : Boolean,   
    director : String,  
    email: {type: String,required : true },
    date : {type: Date, default: Date.now}
})

const netflix = new mongoose.model("netflix", netflixSchema)
    const func = async () => {
        try {
            const res= await netflix.insertMany({
            name: "sacred games",
            year: 2018,
            rating : 8.4,
            language: "Hindi",
            active : true,
            director : "Nawaaz",
            email: "Nawaaz2@gmail.com"
            })
            console.log(res)
        }   catch (err) {
            console.log(err); 
        }  
}
func()

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db');
});

mongoose.connection.on('error', () => {
    console.log(err.message);
}); 

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnection');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit()
})

