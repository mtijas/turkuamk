/**
 * TUAS JS-21 course Exercise 6 Part 3 JavaScript
 * This is basically MVP, not a fully tested complete solution.
 */

import * as PriceList from './pricelist.mjs';

let listOfPrices = [
    {
        itemid: 1,
        itemname: 'bottle',
        prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
    },
    {
        itemid: 2,
        itemname: 'glass',
        prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
    }
]

PriceList.setPriceList(listOfPrices);

console.log(PriceList.getPrice(1, 1));
console.log(PriceList.getPrice(1, 5));
console.log(PriceList.getPrice(1, 100));
console.log(PriceList.getPrice(1, 2341));

console.log(PriceList.getPrice(2, 1));
console.log(PriceList.getPrice(2, 50));
console.log(PriceList.getPrice(2, 201));
