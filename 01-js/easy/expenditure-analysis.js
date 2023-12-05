/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category is not in the totals object, create an entry
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Accumulate the total amount spent for the category
    categoryTotals[category] += price;
  });

  // Convert the categoryTotals object to an array of objects
  const result = Object.entries(categoryTotals).map(([category, total]) => ({
    [category]: total,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
