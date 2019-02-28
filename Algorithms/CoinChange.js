
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

// Changes is an array to store the least amount of coins we need to make up a certain amount of money,
// the index of changes means the amount of money to make up, so changes[x] means to make up money amount x
// how many coins we need at least.
//
// Now, imagine if changes[0] ... to changes[10] is already known, and we need to calculate changes[11], coins = [1, 2, 5],
//
// We know we have to take at least one coin from coins list otherwise we won't be able to make up 11
//
// If we take coins[0] which has value 1, and now the total amount of money we need to make up becomes 10, and
// how many coins we need at least to make up 10 is known already as changes[10], so if we take coins[0] to make up
// amount 11, the least amount of coins we need will be 1 + changes[10]
//
// If we take coins[1] which has value 2, the least amount of coins we need will be 1 + changes[9].
//
// If we take coins[2] which has value 5, the least amount of coins we need will be 1 + changes[6].
//
// changes[11] = min(1 + changes[10], 1 + changes[9], 1 + changes[6])
//
// From the explanation above, we can see that to calculate changes[x], we will need to know the values from changes[0]
// to changes[x-1], so in order to know changes[x] we start to calculate from changes[0].
//
// corner cases are when the amount remaining to make up is less than the coin value, in this case, we simply continue
// to the next coin, and if all coins values are greater than the amount to make up (changes[amount] will equal to
// Math.pow(2, 31) - 1 in my code), that means we don't have any coin to make up that amount, so return -1.

// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([1,2,5,11], 11));
// console.log(coinChange([2, 3 , 5], 11));
console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([12], 11));
