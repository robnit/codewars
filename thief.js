function greedyThief(items, n){
    const newItems = items.split(); 
    newItems.sort(function (a,b) { 
      if((a.price/a.weight) > (b.price/b.weight)) {return -1}
      if((a.price/a.weight) < (b.price/b.weight)) {return 1}
      if((a.price/a.weight) === (b.price/b.weight) && a.price > b.price) {return -1}
      if((a.price/a.weight) === (b.price/b.weight) && a.price < b.price) {return 1}
      });

    const stolen = [];

    for (let i = 0; i < newItems.length; i++){
        if (n >= newItems[i].weight) {
          stolen.push(newItems[i]);
          n -= newItems[i].weight;
          }
    }

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