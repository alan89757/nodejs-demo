process.nextTick(function() { // p1
  console.log(1);
});

process.nextTick(function() { // p2
  console.log(2);
  setImmediate(function() { // p3
    console.log(3);
  })
  process.nextTick(function() { // p4
    console.log(4);
  })
});

setImmediate(function() { // p5
  console.log(5);
  process.nextTick(function() { // p6
    console.log(6);
  });
  setImmediate(function() { // p7
    console.log(7);
  })
});

setTimeout(() => {  // p8
  console.log(8);
  new Promise((resolve, reject)=> { // p9
    console.log(9);
    resolve();
  }).then(e=> { // p10
    console.log(10);
  });
}, 0);

setTimeout(() => {  // p11
  console.log(11);
}, 0);

setImmediate(function() { // p12
  console.log(12);
  process.nextTick(function() { // p13
    console.log(13);
  })
  process.nextTick(function(){ // p14
    console.log(14);
  })
  setImmediate(function() { // p15
    console.log(15);
  })
})

console.log(16);  // p16

new Promise((resolve, reject)=> { // p17
  console.log(17);
  resolve();
}).then(e=> { // p18
  console.log(18);
})
