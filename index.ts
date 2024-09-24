type item = [name: string, price: number, want: number];
type itemList = item[];

const WANT_WEIGHT: number = 10;
const PRICE_WEIGHT: number = -1;
function weightedWant(thing: item): number {
    return thing[1] * PRICE_WEIGHT + thing[2] * WANT_WEIGHT;
}
function compareWeights(a, b) {
    return weightedWant(b) - weightedWant(a)
}
function sortByWeights(items: itemList): itemList {
    let newList: itemList = [];
    for (var i = 0; i < items.length; i++) {
        newList.push(items[i]);
    }
    newList = newList.sort(compareWeights)
    return newList;
}
function generateItems(amt: number): itemList {
    let returnedList: itemList = [];
    for (var i = 0; i < amt; i++) {
        returnedList.push([`${i}`, Math.random() * 100, Math.random() * 10])
    }
    return returnedList;
}
console.log(sortByWeights(generateItems(10))[0])