use("CollegeDB");

////Create operations

// db.createCollection("students");
// db.students.insertOne(
//     {rollNo:1, name:"Krishn", section:"FSD-A", marks:90},
// )

// db.students.insertMany([
//     {rollNo:2, name:"Ravi", section:"FSD-B", marks:80},
//     {rollNo:3, name:"Deven", section:"FSD-C", marks:70},
//     {rollNo:4, name:"Vasu", section:"FSD-D", marks:60},
//     {rollNo:5, name:"Rohit", section:"FSD-E", marks:50},
// ]);

// db.students.insert(
//     {rollNo:6, name:"Alex", section:"FSD-B", marks:80}
// )


/////REad operations

// db.students.findOne(); // return first one document from the collection

// db.students.find(); // return all documents from the collection
// db.students.find({section:"FSD-B"}); // return all documents from the collection where section is FSD-B

// db.students.find({name:"Alex"})


///////update document
// 
// db.students.updateOne({name:"Vasu"},{$set:{section:"FSD-B",marks:90}});

// db.students.updateMany({marks:80},{$set:{marks:85}});
// db.students.updateMany({},{$set:{department:"SOET"}});

////Delete document

// db.students.deleteOne({name:"Alex"});