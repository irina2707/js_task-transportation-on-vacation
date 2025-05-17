/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost_per_day = 40;
  let discount = 0;
  let totalCost = days * cost_per_day;
  // write code here
  if (days >= 7) {
    discount = 50;
    return (totalCost -= discount);
  }

  if (days >= 3) {
    discount = 20;
    return (totalCost -= discount);
  }

   else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
