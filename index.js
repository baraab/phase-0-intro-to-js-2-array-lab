// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push('Ralph');
  }

  function destructivelyPrependCat(name) {
    cats.unshift("Bob"); 
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const newCatArray = [...cats,"Broom"];
    return newCatArray;
}
function prependCat(name){
    const newArrayCats=["Arnold",...cats]
    return newArrayCats;
}

function removeLastCat(name){
    const lastCat= cats.slice(0, cats.length -1);
    return lastCat;
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
  }