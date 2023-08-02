class Sum {
  constructor(v = 0){
    this.val = v
  }

  sum(v) {
    this.val += v;
    return this
  }
};

const value = new Sum(1);

console.log(value
  .sum(1)
  .sum(2)
  .sum(3)
  .sum(4)
  .sum(5)
  .val)