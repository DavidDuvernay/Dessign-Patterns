const Emitter = (() => {
  const topics = {};
  const hOP = topics.hasOwnProperty;

  return {
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) topics[topic] = []
      topics[topic].push(listener)
    },
    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) return
      topics[topic].forEach(item =>
        item(info != undefined ? info : {}))
    }
  }
})()

Emitter.on('yada', x => console.log(x))

Emitter.emit('yada', { 'yada': 'yede' })

/* Example 2 */

const Emitter_events = require('events');

const emitter_events = new Emitter_events();

emitter_events.on('yada', x => console.log(x))

emitter_events.emit('yada', { 'yada': 'yede' })