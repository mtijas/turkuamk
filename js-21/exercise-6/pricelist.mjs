/**
 * TUAS JS-21 course Exercise 6 Part 2 JavaScript
 * This is basically MVP, not a fully tested complete solution.
 */

let priceList = []

const setPriceList = (data) => {
    priceList = data;
}

const getPrice = (itemid, quantity) => {
    let item = findItem(itemid);
    if (item != null) {
        return findItemPrice(item, quantity);
    }
    return null;
}

const findItem = (itemid) => {
    for (let i = 0; i < priceList.length; i++) {
        let item = priceList[i];
        if (item.itemid === itemid) {
            return item;
        }
    }
    return null;
}

const findItemPrice = (item, quantity) => {
    let currentPrice = item.prices[1].price;

    item.prices.forEach((element) => {
        if (quantity < element.qty) {
            return currentPrice;
        }
        currentPrice = element.price;
    });

    return currentPrice * quantity;
}

export { setPriceList, getPrice };
