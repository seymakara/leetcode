const canShipWithinDays = (weights, D, capacity) => {
  let boats = 1, currentOnBoat = 0;
  for (const weight of weights) {
    currentOnBoat += weight;
    if (currentOnBoat > capacity) {
      ++boats;
      currentOnBoat = weight;
      if (boats > D) break;
    }
  };
  return boats <= D;
};

const shipWithinDays = (weights, D) => {
  const totalWeights = weights.reduce((prev, el) => prev + el, 0);
  let ans = Math.max(Math.max(...weights), Math.ceil(totalWeights / D));
  while (true) {
    if (canShipWithinDays(weights, D, ans)) {
      break;
    }
    ++ans;
  }
  return ans;
};