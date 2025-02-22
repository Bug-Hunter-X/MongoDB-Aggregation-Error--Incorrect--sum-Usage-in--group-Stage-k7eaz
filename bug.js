```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /* some criteria */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //incorrect, sum should be a numerical field
]);
```