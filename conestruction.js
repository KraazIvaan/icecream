// IceCream object constructor
function IceCream(){
  this.cone = "";
  this.flavor = "";
  this.topping = "";

  this.setCone = function(c){
    this.cone = c;
  }

  this.setFlavor = function(f){
    this.flavor = f;
  }

  this.setTopping = function(t){
    this.topping = t;
  }
}


// i: IceCream object
// c: cone string
// sets the IceCream object's 'cone' property
function cone(i,c){
  return new Promise(function(resolve,reject){
	//var time = (10*Math.random()+1)*1000;
    //console.log("getting the cone will take " + time + " seconds.");
	//setTimeout(function(){
	i.setCone(c);

    if(i.cone === c){
      resolve("obtained cone " + c + ".");
    }
    else{
      reject("Sorry, we're out of " + c + " cones.");
    }//},time);
  })
}

// i: IceCream object
// f: flavor string
// sets the IceCream object's 'flavor' property
function flavor(i,f){
  return new Promise(function(resolve,reject){
	//var time = (10*Math.random()+1)*1000;
    //console.log("getting the ice cream will take " + time + " seconds.");
    //setTimeout(function(){
    i.setFlavor(f);

    if(i.flavor === f){
      resolve("obtained flavor " + f + ".");
    }
    else{
      reject("Sorry, we're out of " + f + " flavor.");
    }//},time);
  })
}

// i: IceCream object
// t: topping string
// sets the IceCream object's 'topping' property
function topping(i,t){
  return new Promise(function(resolve,reject){
	//var time = (10*Math.random()+1)*1000;
	//console.log("getting the topping will take " + time + " seconds.");
    //setTimeout(function(){
    i.setTopping(t);

    if(i.topping === t){
      resolve("obtained topping " + t + ".");
    }
    else{
      reject("Sorry, we're out of " + t + ".");
    }//},time);
  })
}

var i = new IceCream();

console.log("Cone: " + i.cone);
console.log("Flavor: " + i.flavor);
console.log("Topping: " + i.topping);

cone(i,"sugar")
.then(flavor(i,"chocolate"))
.then(topping(i,"sprinkles"))
.then(function(){
  console.log("Cone: " + i.cone);
  console.log("Flavor: " + i.flavor);
  console.log("Topping: " + i.topping);
})
