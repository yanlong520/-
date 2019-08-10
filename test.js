var MongoControl = require('./tools/db')

// var c = new MongoControl('contact','users')
var c = new MongoControl('contact','test')
// c.insert({name :'sunyanlong',phoneNumber : '1884615527'},()=>{})


// 
// c.insert({username: 'sunyanlong',password : 'sunyanlong'} , function(){})
// c.remove({name : 'yanlong'},()=>{})
// c.removeById('5bfbeb416abe620b1cfde89f',()=>{})
c.find({phoneNumber : 1779945122},(err,data)=>{
    console.log(data)
})
c.find({name:{$regex:"123123123"}},(err,data)=>{
    console.log(data)
})//正则查询
// c.findById('5bde820b85079ce789288627',(err,data)=>{
//         console.log(data)
//     })


// c.update({name : 777},{age : 000},()=>{})
// c.updateById('5bde820b85079ce789288627',{age : 10},function(){})