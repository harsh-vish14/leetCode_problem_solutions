function howManyGames(priceFirstGame, discount, minCost, budget) {
    var moneyGiven = 0;
    if (priceFirstGame > budget) {
        return 0
    }
    if (priceFirstGame === budget) {
        return 1;
    }
    var gameCount = 0;
    while (true) {
        if (moneyGiven + priceFirstGame > budget) {
            break;
        }
        gameCount++;
        moneyGiven += priceFirstGame;
        priceFirstGame = Math.max(minCost,priceFirstGame-discount)
    }
    return gameCount;
}

console.log(howManyGames(16,2,1,9981));