
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
	const changes = [];
	changes[0] = 0;

	// changes[] means the anwser for different amount, so ret = changes[amount]
	while(changes.length <= amount){
		let c = Math.pow(2, 31) - 1;
		for (let i = 0; i < coins.length; i++) {
			if (changes.length - coins[i] < 0)
				continue;
			c = Math.min(c, 1 + changes[changes.length - coins[i]]);
		}
		changes.push(c);
	}

	return changes[amount] === Math.pow(2, 31) - 1 ? -1 : changes[amount];
};



// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([1,2,5,11], 11));
// console.log(coinChange([2, 3 , 5], 11));
console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([12], 11));
