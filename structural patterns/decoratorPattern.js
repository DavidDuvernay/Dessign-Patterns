class Macbook {
  price() {
    return 1000
  }
};

const memory = mac => {
  const v = mac.price()
  mac.price = function() {
    return v + 100
  }
};

const macbook = new Macbook()
memory(macbook)

console.log(macbook.price())