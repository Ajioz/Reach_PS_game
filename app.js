const outcome = Math.floor(Math.random() * 3);

console.log(outcome)

const [forAlice, forBob] = outcome == 2 ? [2, 0] :  outcome == 0 ? [0, 2] : [1, 1];
console.log(forAlice, forBob)