use("CollegeDB");

// db.createCollection("students2");

// db.students2.insert([
//     {
//         name:"Alex",
//         age:23,
//         city:"Surat",
//         semester:3,
//         marks:90,
//         course:"BCA",
//         fees:10000
//     },
//     {
//         name:"Ravi",
//         age:27,
//         city:"Delhi",
//         semester:4,
//         marks:60,
//         course:"Btech",
//         fees:50000
//     },
//     {
//         name:"Deven",
//         age:25,
//         city:"Gugaon",
//         semester:3,
//         marks:80,
//         course:"Btech",
//         fees:140000
//     }
// ])


// db.students2.findOne()
// db.students2.find({city:"Surat"})

// db.students2.find({marks:{$gte:80}})

// db.students2.find({city:"Surat",marks:{$gte:80}})  //AND 
// db.students2.find({$or:[   //OR
//     {city:"Surat"},{marks:{$gte:80}}
// ]})

// db.students2.find({},{name:1,semester:1,course:1,_id:0})  //Project

// db.students2.find().sort({age:-1})

// db.students2.find().limit(4)

// db.students2.find().skip(3).limit(1)


///student find where semester 3 or course btech sort des by his marks and limi it to 2 with skippping one value

