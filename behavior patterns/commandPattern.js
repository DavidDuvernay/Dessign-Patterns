const Commander = (() => {
  const o = {
    buy: x => {
      console.log(`Buy ${x}`)
    },
    sell: x => {
      console.log(`Sell ${x}`)
    }
  };

  return {
    run: (command, args) => {
      if(!o[command]){
        console.log('Commnad does not exists')
        return
      }

      o[command](args)
    }
  }
})()

Commander.run('buy', 'Mazda')
Commander.run('sell', 'Mazda')
Commander.run('yada', 'Nothing happens')
