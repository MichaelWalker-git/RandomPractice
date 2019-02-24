/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
	let result = [];
	const remove = (coin, amount, stack = []) => {
		const newRem = amount - coin;
		if (newRem >= 0 && coin > 0) {
			stack.push(coin);
			return remove(coin, newRem, stack);
		} else {
			return {stack, remainingAmount: amount};
		}
	};
	for (let i = coins.length - 1; i >= 0; i--) {
		const {stack, remainingAmount} = remove(coins[i], amount, result);
		result = [...stack];
		amount = remainingAmount;
	}
	return amount === 0 ? result.length : -1;
};

// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([1,2,5,11], 11));
// console.log(coinChange([2, 3 , 5], 11));
console.log(coinChange([12], 11));
