const result = (() => {
  const x = {};

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

result.a()
result.b('cheese', 'parmesan')
result.a()
console.log(result.x)

/* this example should be used in the browser's console, since fetch does not exist in JS. */

const Users = (() => {
  const resource = 'https://jsonplaceholder.typicode.com/users'

  return {
    list: async () => {
      return await fetch(resource).then(x => x.json())
    },
    create: async (data) => {
      return await fetch(resource, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json())
    }
  }
})()