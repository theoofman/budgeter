var WANT_WEIGHT = 10;
var PRICE_WEIGHT = -1;
function weightedWant(thing) {
    return thing[1] * PRICE_WEIGHT + thing[2] * WANT_WEIGHT;
}
function compareWeights(a, b) {
    return weightedWant(b) - weightedWant(a);
}
function sortByWeights(items) {
    var newList = [];
    for (var i = 0; i < items.length; i++) {
        newList.push(items[i]);
    }
    newList = newList.sort(compareWeights);
    return newList;
}
function generateItems(amt) {
    var returnedList = [];
    for (var i = 0; i < amt; i++) {
        returnedList.push(["".concat(i), Math.random() * 100, Math.random() * 10]);
    }
    return returnedList;
}
console.log(sortByWeights(generateItems(10))[0]);
