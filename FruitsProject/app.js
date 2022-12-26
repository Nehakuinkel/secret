const mongoose = require("mongoose");

//Connection to Database

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true});

const fruitSchema =  new mongoose.Schema({
    
name: {
    type: String,
    required: [true, "please check your data entry no name specified"]
},
rating: {
    type: Number,
    min: 1,
    max: 10
},
review: String

});

const personSchema = new mongoose.Schema({
    name: String,
    age : Number,
    favouriteFruit: fruitSchema
});

const Fruit =mongoose.model("Fruit", fruitSchema );
const mango =new Fruit({
name:"mango",
score:9,
review:"Great Fruit."
});
mango.save();

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
    name:"apple",
    rating: 3,
    review: "peach is solid as a fruit."
});

const banana =new Fruit({
    name:"banana",
    rating: 4,
    review :" thikai"

});

const kiwi =new Fruit({
    name: "Kiwi",
    rating :10,
    review: "yum yum tasty"
});
Person.updateOne({name:"amy"},{favouriteFruit: mango}, function(err){
if(err){
    console.log(err);
}
else{
    console.log(uhu, upadated);
}
});
// const person =new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// Fruit.insertMany([kiwi,banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("successfully saved all the fruits in fruitDB");
//     }
// });


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
       
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});
// Fruit.updateOne({_id:"5f58f33d1f0c7920dc23dd8d"}, {name:"peach"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
//     }
// } );

// Fruit.deleteOne({_id:"5f58f33d1f0c7920dc23dd8d"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Delete");
//     }
// });
// Person.deleteMany({name:"John"}, function(err){
// if(err){
//     console.log(err);

// }
// else{
//     console.log("delete john");
// }
// });


person.save();
//fruit.save();