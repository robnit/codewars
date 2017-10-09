function greedyThief(items, n){

    items.map(a => {a.value = a.price / a.weight});
        
    items.sort(function (a,b) { 
      if(a.value > b.value) {return -1}
      if(a.value < b.value) {return 1}
      if(a.value === b.value && a.price > b.price) {return -1}
      if(a.value === b.value && a.price < b.price) {return 1}
      });

    const stolen = [];

    for (let i = 0; i < items.length; i++){
        if (n >= items[i].weight) {
          stolen.push(items[i]);
          n -= items[i].weight;
          }
    }
    
    stolen.forEach(a => delete a.value);

    return stolen;
    
  }



  describe("Basic Tests", function(){
    it("It should works for basic tests", function(){
  
  //example in description
  var items=[
   {weight:2,price:6},
   {weight:2,price:3},
   {weight:6,price:5},
   {weight:5,price:4},
   {weight:4,price:6}
   ],
  n=10,referenceResult=[
   {weight:2,price:6},
   {weight:2,price:3},
   {weight:4,price:6}
  ]
  Test.assertEquals(check(greedyThief(items, n) ,items,referenceResult),"Passed!")
  
  //should get the max total price
  var items=[
   {weight:9,price:1},
   {weight:9,price:2},
   {weight:9,price:3},
   {weight:9,price:4},
   {weight:9,price:5}
   ],
  n=10,referenceResult=[{weight:9,price:5}]
  Test.assertEquals(check(greedyThief(items, n) ,items,referenceResult),"Passed!")
  
  //If more than one valid result, you should return one of them
  var items=[
   {weight:1,price:1},
   {weight:2,price:2},
   {weight:3,price:3},
   {weight:4,price:4},
   {weight:5,price:5}
   ],
  n=10,referenceResult=[{ weight: 2, price: 2 }, { weight: 3, price: 3 }, { weight: 5, price: 5 }]
  Test.assertEquals(check(greedyThief(items, n) ,items,referenceResult),"Passed!")
  
  var items=[
   {weight:2,price:2},
   {weight:2,price:2},
   {weight:2,price:2},
   {weight:2,price:2},
   {weight:2,price:2},
   {weight:10,price:10},
   {weight:5,price:5}
   
   ],
  n=10,referenceResult=[{ weight: 10, price: 10 }]
  Test.assertEquals(check(greedyThief(items, n) ,items,referenceResult),"Passed!")
  
  //If no valid solution should return []
  var items=[
   {weight:9,price:1},
   {weight:9,price:2},
   {weight:9,price:3},
   {weight:9,price:4},
   {weight:9,price:5}
   ],
  n=8,referenceResult=[]
  Test.assertEquals(check(greedyThief(items, n) ,items,referenceResult),"Passed!")
  
  })})