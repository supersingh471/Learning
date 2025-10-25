function calculateTotalSpentByCategory(transactions) {

    const total = {};

    for (let i = 0; i < transactions.length; i++) {
        let category = transactions[i].category;
        let price = transactions[i].price;          // Extracting category and price

        // If the category already exists, add the price to it
        if (total[category]) {
            total[category] += price;
        } else {                            // Otherwise, set the price
            total[category] = price;
        }

    }

    let result = [];                        // Convert totals object into an array of { category, totalSpent }
    for (let category in total) {
        result.push({ category: category, totalSpent: total[category] });
    }

    return result;
}
    // Example data
const transactions = [
    {   id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza',},
    {   id: 2, timestamp: 1654646800000, price: 20, category: 'Beverages', itemName: 'Coke',},
    {   id: 3, timestamp: 1654664570000, price: 30, category: 'Food', itemName: 'Burger',},
    {   id: 4, timestamp: 1658646400000, price: 40, category: 'Beverages', itemName: 'Juice',}
];
  console.log(calculateTotalSpentByCategory(transactions));
