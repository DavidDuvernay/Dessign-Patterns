const user = new User()

const init = () => {
  user.on('login', userLoggedIn)
};

const userLoggedIn =() => {
  //User logs in

};

app.init()

const login = () => {
  //Login logic

  //after
  user.trigger('login')
};

login()